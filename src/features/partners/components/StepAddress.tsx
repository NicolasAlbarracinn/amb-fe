import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useSelector } from 'react-redux';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import TextFormField from 'components/Form/TextField';
import { useStyles } from 'components/Wizard/styles';
import { selectAddress, selectFetchedRenaperData } from '../store/selectors';

import { defaultAddress, formAddressSchema } from '../config';

import { useWizardStep } from '../../wizard/hooks';
import { WizardStepsConfig } from '../config';

const StepAddress = () => {
  const classes = useStyles();
  const [inputFields, setInputFields] = useState(defaultAddress);

  const renaperData = useSelector(selectAddress);
  const fetchedRenaperData = useSelector(selectFetchedRenaperData);

  useEffect(() => {
    if (fetchedRenaperData) {
      setInputFields(renaperData);
    }
  }, [renaperData, fetchedRenaperData]);

  const { handleNext, handlePrevious } = useWizardStep(WizardStepsConfig.ADDRESS_STEP);
  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={inputFields}
        validationSchema={formAddressSchema}
        onSubmit={values => handleNext(values)}
      >
        {props => {
          return (
            <Form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Field disabled name="streetAddress" label="Calle y N" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field disabled name="floor" label="Piso" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field disabled name="aptNumber" label="Depto" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field disabled name="department" label="Departamento" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field disabled name="location" label="Localidad" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field disabled name="province" label="Provincia" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field disabled name="postalCode" label="Codigo Postal" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field disabled name="observations" label="Observaciones" component={TextFormField} />
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

export default StepAddress;
