import React, { useCallback, useEffect, useRef } from 'react';
import { Formik, Form, Field, FormikProps } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import TextFormField from 'components/Form/TextField';
import SelectFormField from 'components/Form/SelectField';
import { useStyles } from 'components/Wizard/styles';

import { benefitTypeList, portfoliosList, benefitStatusList } from 'utils/constants';

import { useWizardStep } from '../../wizard/hooks';

import { actions as benefitActions } from '../store/slice';
import { selectPartnerData, selectPlanList, selectPlan } from '../store/selectors';

import { defaultBenefit, formBenefitSchema, WizardStepsConfig } from '../config';
import { IBenefitInfo, IPlan } from '../types';

const StepDetails = () => {
  const formikRef = useRef<FormikProps<IBenefitInfo>>(null);
  const { handleNext, handlePrevious } = useWizardStep(WizardStepsConfig.DETAILS_STEP);

  const partnerData: IBenefitInfo | null = useSelector(selectPartnerData);
  const planList: IPlan[] = useSelector(selectPlanList);
  const plan: IPlan | null = useSelector(selectPlan);

  const classes = useStyles();
  const dispatch = useDispatch();

  const formAcctions = formikRef.current;

  const setPlanDefaultValues = useCallback(() => {
    if (partnerData?.benefitId && formAcctions) {
      formAcctions.setValues(partnerData);
      return;
    }
  }, [partnerData, formAcctions]);

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

  return (
    <div>
      <Formik
        initialValues={defaultBenefit}
        onSubmit={values => handleNext(values)}
        validationSchema={formBenefitSchema}
        enableReinitialize={true}
        innerRef={formikRef}
      >
        {props => {
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
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Field name="benefitType" label="Tipo" options={benefitTypeList} component={SelectFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field name="certificateNumber" label="N° Certificado" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field disabled name="applicationDate" label="Fecha de solicitud" component={TextFormField} />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <Field
                    name="portfolio"
                    label="Cartera"
                    options={portfoliosList}
                    component={SelectFormField}
                    onChange={handlerPortfolioSelection(props)}
                    value={props.values.portfolio}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <Field
                    name="plan"
                    label="Plan"
                    options={planList.map(pl => ({ value: pl._id, label: pl.plan }))}
                    component={SelectFormField}
                    onChange={handlePlanSelection(props)}
                    value={props.values.plan}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field disabled name="signatureAmount" label="Monto Firma" component={TextFormField} />
                </GridItem>{' '}
                <GridItem xs={12} sm={12} md={4}>
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
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Field disabled name="duesAmount" label="Monto de la cuota" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field disabled name="amountGranted" label="Monto Otorgado" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="observations" label="Observaciones" component={TextFormField} />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Field
                    disabled
                    name="benefitStatus"
                    label="Estado de la prestación"
                    options={benefitStatusList}
                    component={SelectFormField}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="commercializer" label="Comercializador" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="grantedPeriod" label="Periodo otorgado" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field
                    name="fileGranted"
                    label="Legajo entregado"
                    options={[{ value: '12312312', label: '1223123' }]}
                    component={SelectFormField}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field disabled name="statusDate" label="Fecha Estado" component={TextFormField} />
                </GridItem>
              </GridContainer>

              <div className={classes.footer}>
                <div className={classes.left}>
                  <Button color="rose" onClick={handlePrevious}>
                    Anterior
                  </Button>
                </div>
                <div className={classes.right}>
                  <Button type="submit" color="rose">
                    Proximo
                  </Button>
                </div>
                <div className={classes.clearfix} />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default StepDetails;
