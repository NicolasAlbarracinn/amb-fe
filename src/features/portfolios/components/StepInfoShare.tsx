import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Formik, Form, Field, FormikProps, FormikHelpers } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'loadsh';

import Add from '@material-ui/icons/Add';
import Clear from '@material-ui/icons/Clear';

import { useStyles } from 'components/Wizard/styles';
import Card from 'components/Card/Card';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import TextFormField from 'components/Form/TextField';
import SelectFormField from 'components/Form/SelectField';
import RegularButton from 'components/CustomButtons/Button';

import { useWizardStep } from '../../wizard/hooks';

import { actions } from '../store/slice';
import { selectPlanList } from '../store/selectors';
import { IDues, IplanList } from '../types';
import { defaultShare, WizardStepsConfig, formPlanSchema } from '../config';

import TableShares from './TableShares';

const StepBank = () => {
  const { handleSubmit, handlePrevious } = useWizardStep(WizardStepsConfig.SHARE_INFO);
  const [duesList, setDuesList] = useState<IDues>([]);

  const classes = useStyles();
  const dispatch = useDispatch();

  const planList: IplanList[] = useSelector(selectPlanList);

  const handlePushDues = (props: FormikProps<typeof defaultShare>) => {
    if (duesList.some(dl => dl.duesQuantity === props.values.duesQuantity)) {
      toast.error('La cuota ya fue cargada', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    setDuesList(prevState => [
      ...prevState,
      { duesAmount: props.values.duesAmount, duesQuantity: props.values.duesQuantity },
    ]);
    props.setFieldValue('duesAmount', '');
    props.setFieldValue('duesQuantity', '');
  };

  const handleRemoveTag = (quantity: string) => {
    setDuesList(prevState => prevState.filter(dl => dl.duesQuantity !== quantity));
  };

  const handleSavePlan = (values: typeof defaultShare, formikHelpers: FormikHelpers<typeof defaultShare>) => {
    const newPlan: IplanList = {
      plan: values.plan,
      amountGranted: values.amountGranted,
      signatureAmount: values.signatureAmount,
      dues: duesList,
    };

    dispatch(actions.setPlanToList(newPlan));
    formikHelpers.resetForm({ values: defaultShare });
    setDuesList([]);
  };

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={defaultShare}
        validationSchema={formPlanSchema}
        onSubmit={handleSavePlan}
      >
        {props => {
          return (
            <Form>
              <Card className={classes.cardPadding}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <Field name="plan" label="Nombre del plan" component={TextFormField} />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <Field name="amountGranted" label="Monto Otorgado" component={TextFormField} />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <Field name="signatureAmount" label="Monto Firma" component={TextFormField} />
                  </GridItem>
                </GridContainer>

                <GridContainer alignItems="center">
                  <GridItem xs={12} sm={12} md={3}>
                    <Field
                      name="duesQuantity"
                      label="Cantidad de cuotas"
                      options={getDuesOptions(60)}
                      component={SelectFormField}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <Field name="duesAmount" label="Monto de la cuota" component={TextFormField} />
                  </GridItem>
                  <GridItem xs={12} sm={3}>
                    <RegularButton
                      disabled={props.values.duesAmount.length === 0 || props.values.duesQuantity.length === 0}
                      size="sm"
                      color="success"
                      onClick={() => handlePushDues(props)}
                    >
                      <Add /> agregar
                    </RegularButton>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  {duesList.map(dl => (
                    <GridItem>
                      <div className={classes.tagContainer}>
                        <span>{`${dl.duesQuantity} cuotas de $${dl.duesAmount}`}</span>
                        <Clear className={classes.icons} onClick={() => handleRemoveTag(dl.duesQuantity)} />
                      </div>
                    </GridItem>
                  ))}
                </GridContainer>
                <div className={classes.footer}>
                  <div className={classes.right}>
                    <RegularButton size="sm" color="success" type="submit">
                      Guardar plan
                    </RegularButton>
                  </div>
                  <div className={classes.clearfix} />
                </div>
              </Card>
            </Form>
          );
        }}
      </Formik>

      <Card className={classes.cardPadding}>
        <TableShares />
      </Card>
      <div className={classes.footer}>
        <div className={classes.left}>
          <Button color="rose" onClick={handlePrevious}>
            Anterior
          </Button>
        </div>
        <div className={classes.right}>
          <Button disabled={isEmpty(planList)} color="rose" onClick={() => handleSubmit(planList)}>
            Finalizar
          </Button>
        </div>
        <div className={classes.clearfix} />
      </div>
    </div>
  );
};

export default StepBank;

const getDuesOptions = (maxAmount: number) => {
  const options: Array<{ value: string; label: string }> = [{ value: '0', label: 'selectione una cuota' }];
  for (let i = 1; i <= maxAmount; i++) {
    options.push({ value: i.toString(), label: i.toString() });
  }
  return options;
};
