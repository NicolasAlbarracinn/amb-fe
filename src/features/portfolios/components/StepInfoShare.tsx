import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, FormikProps } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import TextFormField from 'components/Form/TextField';
import SelectFormField from 'components/Form/SelectField';
import { useStyles } from 'components/Wizard/styles';

import { actions } from '../store/slice';
import { selectLenderNameList } from '../store/selectors';

import { useWizardStep } from '../../wizard/hooks';

import { defaultShare, WizardStepsConfig } from '../config';

const StepBank = () => {
  const { handleNext, handlePrevious } = useWizardStep(WizardStepsConfig.ASSETS_LIQUIDATION);

  const classes = useStyles();

  return (
    <div>
      <Formik enableReinitialize={true} initialValues={defaultShare} onSubmit={values => handleNext(values)}>
        {props => {
          return (
            <Form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="plan" label="Plan" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="amountGranted" label="Monto Otorgado" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="signatureAmount" label="Monto Firma" component={TextFormField} />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="duesQuantity" label="Cantidad de cuotas" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="duesAmount" label="Monto de la cuota" component={TextFormField} />
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
