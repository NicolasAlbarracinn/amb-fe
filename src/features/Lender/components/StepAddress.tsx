import React from 'react';
import { Formik, Form, Field } from 'formik';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import TextFormField from 'components/Form/TextField';

import { useStyles } from 'components/Wizard/styles';

import { useWizardStep } from '../../wizard/hooks';

import { defaultAddress, WizardStepsConfig, formAddressSchema } from '../config';

const StepAddress = () => {
  const { handleNext, handlePrevious } = useWizardStep(WizardStepsConfig.ADDRESS_STEP);
  const classes = useStyles();

  return (
    <div>
      <Formik
        validationSchema={formAddressSchema}
        initialValues={defaultAddress}
        onSubmit={values => handleNext(values)}
        enableReinitialize={true}
      >
        {props => {
          return (
            <Form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Field name="streetAdress" label="Calle y N°" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field name="floor" label="Calle y N°" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field name="aptNumber" label="Depto" component={TextFormField} />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="department" label="Departamento" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="location" label="Localidad" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="province" label="Provincia" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="postalCode" label="Código postal" component={TextFormField} />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Field name="observations" label="Observaciones" component={TextFormField} />
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

export default StepAddress;
