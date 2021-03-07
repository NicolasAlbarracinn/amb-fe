import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Formik, Form, Field, FormikProps, FormikHelpers } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import Edit from '@material-ui/icons/Edit';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import TextFormField from 'components/Form/TextField';
import SelectFormField from 'components/Form/SelectField';
import { useStyles } from 'components/Wizard/styles';

import { benefitTypeList, portfoliosList, benefitStatusList } from 'utils/constants';

import { actions as benefitActions } from '../store/slice';
import { selectPlanList, selectPlan } from '../store/selectors';

import { formBenefitSchema } from '../config';
import { IBenefitInfo, IPlan } from '../types';

interface IBenefitEditorProps {
  benefitData: IBenefitInfo;
}

const BenefitEditor = ({ benefitData }: IBenefitEditorProps) => {
  const [disabledInputs, setDisabledInput] = useState(true);
  const formikRef = useRef<FormikProps<IBenefitInfo>>(null);

  const planList: IPlan[] = useSelector(selectPlanList);
  const plan: IPlan | null = useSelector(selectPlan);

  const classes = useStyles();
  const dispatch = useDispatch();

  const formAcctions = formikRef.current;

  const setPlanDefaultValues = useCallback(() => {
    if (benefitData && formAcctions && disabledInputs) {
      formAcctions.setValues(benefitData);
    }
  }, [benefitData, formAcctions, disabledInputs]);

  useEffect(() => {
    setPlanDefaultValues();
  }, [setPlanDefaultValues]);

  const handlerPortfolioSelection = (props: FormikProps<IBenefitInfo>) => {
    const handleOnChange = field => {
      dispatch(benefitActions.getPlanListRequest(field.target.value));
      props.setFieldValue('portfolio', field.target.value);
    };

    return handleOnChange;
  };

  const handlePlanSelection = (props: FormikProps<IBenefitInfo>) => {
    const handleOnChange = field => {
      dispatch(benefitActions.getPlanRequest(field.target.value));
      props.setFieldValue('plan', field.target.value);
    };
    return handleOnChange;
  };

  const handleDuesQuantityChange = (props: FormikProps<IBenefitInfo>) => {
    const handleOnChange = field => {
      const duesAmount = plan?.dues.filter(d => d.duesQuantity === field.target.value) || [];
      props.setFieldValue('duesQuantity', field.target.value);
      props.setFieldValue('duesAmount', duesAmount[0].duesAmount);
    };
    return handleOnChange;
  };

  const handleChangeIconClick = () => setDisabledInput(false);

  const handleSubmit = (values: typeof benefitData, formikHelpers: FormikHelpers<typeof benefitData>) => {
    //TODO: fix plan, need to be the object id
    dispatch(benefitActions.updateBenefitRequest({ id: values.benefitId || 0, updatedInfo: values }));
    setDisabledInput(true);
  };

  return (
    <div style={{ width: '100%' }}>
      <Formik
        initialValues={benefitData}
        onSubmit={handleSubmit}
        validationSchema={formBenefitSchema}
        enableReinitialize={true}
        innerRef={formikRef}
      >
        {props => {
          console.log(props);

          const areValuesEmpty = !props.values.amountGranted && !props.values.signatureAmount;

          if (plan?.signatureAmount && plan.amountGranted && areValuesEmpty) {
            props.setFormikState(prevState => ({
              ...prevState,
              values: {
                ...prevState.values,
                amountGranted: plan.signatureAmount,
                signatureAmount: plan.signatureAmount,
              },
            }));
          }

          return (
            <Form>
              <GridContainer direction="row" justify="flex-end" style={{ padding: '0 40px' }}>
                {disabledInputs ? (
                  <Button onClick={handleChangeIconClick} color="white" aria-label="edit" justIcon round>
                    <Edit />
                  </Button>
                ) : (
                  <div className={classes.footer}>
                    <div className={classes.right}>
                      <Button type="submit" color="success" size="sm" simple>
                        Guardar cambio
                      </Button>
                    </div>
                    <div className={classes.right}>
                      <Button onClick={() => setDisabledInput(true)} color="danger" size="sm" simple>
                        cancelar
                      </Button>
                    </div>
                    <div className={classes.clearfix} />
                  </div>
                )}
              </GridContainer>
              <GridContainer alignItems="center">
                <GridItem xs={12} sm={12} md={4}>
                  <Field
                    disabled={disabledInputs}
                    name="benefitType"
                    label="Tipo"
                    options={benefitTypeList}
                    component={SelectFormField}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field
                    disabled={disabledInputs}
                    name="certificateNumber"
                    label="N° Certificado"
                    component={TextFormField}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field disabled name="applicationDate" label="Fecha de solicitud" component={TextFormField} />
                </GridItem>
              </GridContainer>

              <GridContainer alignItems="center">
                <GridItem xs={12} sm={12} md={4}>
                  <Field
                    disabled={disabledInputs}
                    name="portfolio"
                    label="Cartera"
                    options={portfoliosList}
                    component={SelectFormField}
                    onChange={handlerPortfolioSelection(props)}
                    value={props.values.portfolio}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  {disabledInputs ? (
                    <Field disabled={disabledInputs} name="plan" label="Plan" component={TextFormField} />
                  ) : (
                    <Field
                      name="plan"
                      label="Plan"
                      options={planList.map(pl => ({ value: pl._id, label: pl.plan }))}
                      component={SelectFormField}
                      onChange={handlePlanSelection(props)}
                      value={props.values.plan}
                    />
                  )}
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field disabled name="signatureAmount" label="Monto Firma" component={TextFormField} />
                </GridItem>{' '}
              </GridContainer>

              <GridContainer alignItems="center">
                <GridItem xs={12} sm={12} md={4}>
                  {disabledInputs ? (
                    <Field
                      disabled={disabledInputs}
                      name="duesQuantity"
                      label="Cantidad de cuotas"
                      component={TextFormField}
                    />
                  ) : (
                    <Field
                      name="duesQuantity"
                      label="Cantidad de cuotas"
                      options={
                        plan?.dues?.map(d => ({
                          value: d.duesQuantity,
                          label: `${d.duesQuantity} cuotas`,
                        })) || []
                      }
                      component={SelectFormField}
                      onChange={handleDuesQuantityChange(props)}
                    />
                  )}
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field disabled name="duesAmount" label="Monto de la cuota" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field disabled name="amountGranted" label="Monto Otorgado" component={TextFormField} />
                </GridItem>
              </GridContainer>

              <GridContainer alignItems="center">
                <GridItem xs={12} sm={12} md={4}>
                  <Field
                    disabled={disabledInputs}
                    name="observations"
                    label="Observaciones"
                    component={TextFormField}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field
                    disabled
                    name="benefitStatus"
                    label="Estado de la prestación"
                    options={benefitStatusList}
                    component={SelectFormField}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field
                    disabled={disabledInputs}
                    name="commercializer"
                    label="Comercializador"
                    component={TextFormField}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer alignItems="center">
                <GridItem xs={12} sm={12} md={4}>
                  <Field
                    disabled={disabledInputs}
                    name="grantedPeriod"
                    label="Periodo otorgado"
                    component={TextFormField}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field
                    disabled={disabledInputs}
                    name="fileGranted"
                    label="Legajo entregado"
                    options={[{ value: '12312312', label: '1223123' }]}
                    component={SelectFormField}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field disabled name="statusDate" label="Fecha Estado" component={TextFormField} />
                </GridItem>
              </GridContainer>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default BenefitEditor;
