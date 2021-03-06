import React from 'react';
import { Formik, Form, Field } from 'formik';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import TextFormField from 'components/Form/TextField';
import SelectFormField from 'components/Form/SelectField';
import { useStyles } from 'components/Wizard/styles';

import { calculusTypeOption } from 'utils/constants';

import { useWizardStep } from '../../wizard/hooks';

import { defaultLiquidationBank, formLiquidationSchema, WizardStepsConfig } from '../config';

const StepBank = () => {
  const { handleNext, handlePrevious } = useWizardStep(WizardStepsConfig.BANK_LIQUIDATION);
  const classes = useStyles();

  return (
    <div>
      <Formik
        initialValues={defaultLiquidationBank}
        validationSchema={formLiquidationSchema}
        onSubmit={values => handleNext(values)}
      >
        {props => {
          return (
            <Form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="cutDay" label="Día de Corte Haberes" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field
                    name="fixedChargeDebtCommission"
                    label="Comision Por Debito Cargo Fijo"
                    component={TextFormField}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field
                    name="fixedChargeDebtCommissionPercent"
                    label="Comisión por Debito Cargo %"
                    component={TextFormField}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="percentCreditTax" label="Impuestos Débitos/Créditos %" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="percentBankingExpenses" label="Gastos Bancarios %" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field
                    name="typeOfCalculation"
                    label="Tipo de Cálculo"
                    options={calculusTypeOption}
                    component={SelectFormField}
                  />
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

export default StepBank;
