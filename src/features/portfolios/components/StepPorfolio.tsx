import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, FormikProps } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import TextFormField from 'components/Form/TextField';
import SelectFormField from 'components/Form/SelectField';
import DateFormField from 'components/Form/DateField';
import { useStyles } from 'components/Wizard/styles';

import { actions } from '../store/slice';
import { selectLenderNameList } from '../store/selectors';

import { useWizardStep } from '../../wizard/hooks';

import { defaultDetails, WizardStepsConfig } from '../config';

const StepPorfolio = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { handleNext, handlePrevious } = useWizardStep(WizardStepsConfig.PORTFOLIO_DETAILS);

  useEffect(() => {
    dispatch(actions.getLendersNameListRequest());
  }, [dispatch]);

  const namesList = useSelector(selectLenderNameList);

  return (
    <div>
      <Formik enableReinitialize={true} initialValues={defaultDetails} onSubmit={values => handleNext(values)}>
        {props => {
          return (
            <Form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <Field
                    name="lender"
                    label="Fondista"
                    options={namesList.map(n => ({ value: n._id, label: n.lenderName }))}
                    component={SelectFormField}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="portfolioTypes" label="tipo de cartera" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="minCapital" label="minCapital" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="minDues" label="minimo de cuotas" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="administrativeExpense" label="Gasto administrativo" component={TextFormField} />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="monthlyCashRate" label="Tasa Efectiva Mensual - T.E.M %" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="nominalAnulRate" label="Tasa Nominal Anual - T.N.A%" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="anualCashRate" label="Tasa Efectiva Anual - T.E.A%" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="financialTotal" label="Costo Financiero Total - C.F.T %" component={TextFormField} />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Field
                    name="validSince"
                    label="Vigencia Desde"
                    minDate={moment(new Date())}
                    value={props.values.validSince}
                    onChange={value => props.setFieldValue('validSince', value)}
                    component={DateFormField}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field
                    name="validTo"
                    label="Vigencia Hasta"
                    value={props.values.validTo}
                    onChange={value => props.setFieldValue('validTo', value)}
                    component={DateFormField}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="showsAmountAwarded" label="Muestra monto ortogado" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="description" label="descripcion Breve" component={TextFormField} />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="maxCapital" label="capital Maximo" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="maxDues" label="maximo de cuotas" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="cancellationExpense" label="gasto de cancelacion" component={TextFormField} />
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

export default StepPorfolio;
