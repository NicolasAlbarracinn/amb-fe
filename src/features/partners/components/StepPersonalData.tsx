import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, FormikProps } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import TextFormField from 'components/Form/TextField';
import SelectFormField from 'components/Form/SelectField';
import { useStyles } from 'components/Wizard/styles';

import { selectPersonalData, selectFetchedRenaperData } from '../store/selectors';
import { actions as partnersActions } from '../store/slice';

import { defaultPersonalData, WizardStepsConfig, formPersonalDataSchema } from '../config';
import { IPesonalData } from '../types';

import { useWizardStep } from '../../wizard/hooks';
import { genderList, documentTypeList, civilStateList, recuperoCSList } from 'utils/constants';

const StepPersonalData = () => {
  const classes = useStyles();
  const [inputFields, setInputFields] = useState(defaultPersonalData);

  const { handleNext } = useWizardStep(WizardStepsConfig.PERSONAL_DATA_STEP);

  const renaperData = useSelector(selectPersonalData);
  const fetchedRenaperData = useSelector(selectFetchedRenaperData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchedRenaperData) {
      setInputFields(renaperData);
    }
  }, [renaperData, fetchedRenaperData]);

  const handleSearchPartnerData = (props: FormikProps<IPesonalData>) => {
    const hasError = props.errors.documentNumber || props.errors.procedureNumber || props.errors.gender;
    if (!hasError && !fetchedRenaperData) {
      dispatch(
        partnersActions.getRenaperDataRequest({
          documentNumber: props.values.documentNumber,
          procedureNumber: props.values.procedureNumber,
          gender: props.values.gender,
        }),
      );
    }
  };

  return (
    <div>
      <Formik
        initialValues={inputFields}
        validationSchema={formPersonalDataSchema}
        onSubmit={values => handleNext(values)}
        enableReinitialize={true}
      >
        {props => {
          return (
            <Form>
              {/* <GridContainer>
                <GridItem xs={12} sm={12}>
                  <Field name="partnerId" label="N de socio" component={TextFormField} />
                </GridItem>
              </GridContainer> */}

              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="documentNumber" label="N de documento" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="procedureNumber" label="N de tramite" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="gender" label="Genero" options={genderList} component={SelectFormField} />
                </GridItem>
                <GridItem>
                  <Button color="rose" onClick={() => handleSearchPartnerData(props)}>
                    Buscar datos de usuario
                  </Button>
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Field
                    disabled
                    name="documentType"
                    label="Tipo de Documento"
                    options={documentTypeList}
                    component={SelectFormField}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field disabled name="cuil" label="N de CUIL" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field disabled name="name" label="Nombre" component={TextFormField} />
                </GridItem>
                <GridItem disabled xs={12} sm={12} md={3}>
                  <Field disabled name="lastName" label="Apellido" component={TextFormField} />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Field disabled name="country" label="Nacionalidad" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <Field disabled name="birthDate" label="Fecha de nacimiento" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                  <Field disabled name="age" label="Edad" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field disabled name="birthPlace" label="Lugar de Nacimiento" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field
                    disabled
                    name="civilState"
                    label="Estado Civil"
                    options={civilStateList}
                    component={SelectFormField}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Field disabled name="email" label="Email" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field disabled name="phone" label="Telefono" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field disabled name="personalPhone" label="Telefono Personal" component={TextFormField} />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Field name="commercializer" label="Comercializador" component={TextFormField} />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Field disabled name="salary" label="Sueldo Bruto" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field disabled name="netSalary" label="Sueldo Neto" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field disabled name="socialQuota" label="Cuota Social" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field
                    name="paymentType"
                    label="Forma de Cobro C$"
                    options={recuperoCSList}
                    component={SelectFormField}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field
                    name="recoveryPaymentType"
                    label="Forma de Cobro Recupero CS"
                    options={recuperoCSList}
                    component={SelectFormField}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Field name="otherPerferences" label="Otros Pereferenciales" component={TextFormField} />
                </GridItem>
              </GridContainer>

              <div className={classes.footer}>
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

export default StepPersonalData;
