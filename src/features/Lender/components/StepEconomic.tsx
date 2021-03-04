import React from 'react';
import { Formik, Form, Field } from 'formik';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import TextFormField from 'components/Form/TextField';

import { useStyles } from 'components/Wizard/styles';

import { useWizardStep } from '../../wizard/hooks';

import { defaultEconomic, WizardStepsConfig, formEconomicSchema } from '../config';

const StepEconomic = () => {
  const { handleNext, handlePrevious } = useWizardStep(WizardStepsConfig.ADDRESS_STEP);
  const classes = useStyles();

  return (
    <div>
      <Formik
        validationSchema={formEconomicSchema}
        initialValues={defaultEconomic}
        onSubmit={values => handleNext(values)}
        enableReinitialize={true}
      >
        {props => {
          return (
            <Form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Field name="type" label="Actividad ecònomica" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field name="order" label="Orden de la actividad" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field name="registrationPeriod" label="Periodo de alta de la actividad" component={TextFormField} />
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
                    Finalizar
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

export default StepEconomic;
