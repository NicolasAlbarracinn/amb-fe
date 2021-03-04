import React, { useEffect } from 'react';
// import { isEmpty } from 'loadsh';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import TextFormField from 'components/Form/TextField';
// import SearchBar from 'components/SearchBar/SearchBar';
import { selectParameterWasSubmited, selectSearchParameter } from 'components/SearchBar/selectors';
import { useStyles } from 'components/Wizard/styles';

import { actions as lenderActions } from '../store/slice';
// import { selectLenderData } from '../store/selectors';

import { useWizardStep } from '../../wizard/hooks';

import { Defaultlender, WizardStepsConfig, formLenderSchema } from '../config';

const StepLender = () => {
  //   const [inputFields, setInputFields] = useState(Defaultlender);
  const { handleNext, handlePrevious } = useWizardStep(WizardStepsConfig.ADDRESS_STEP);

  const classes = useStyles();
  const dispatch = useDispatch();

  //   const lenderData = useSelector(selectLenderData);
  const wasSubmited = useSelector(selectParameterWasSubmited);
  const searchParam = useSelector(selectSearchParameter);

  useEffect(() => {
    if (wasSubmited) dispatch(lenderActions.getLenderRequest(searchParam));
  }, [wasSubmited, searchParam, dispatch]);

  //   useEffect(() => {
  //     if (isEmpty(lenderData)) {
  //       setInputFields(lenderData);
  //     }
  //   }, [lenderData, searchParam]);

  return (
    <div>
      <Formik
        validationSchema={formLenderSchema}
        initialValues={Defaultlender}
        onSubmit={values => handleNext(values)}
        enableReinitialize={true}
      >
        {props => {
          return (
            <Form>
              {/* 
              TODO: add this when we have the afip web server integration
              <GridContainer>
                <GridItem xs={12} sm={12}>
                  <Field name="partnerId" label="Cuit" component={SearchBar} />
                </GridItem>
              </GridContainer> */}

              <GridContainer>
                <GridItem xs={12} sm={4}>
                  <Field name="cuit" label="Cuit" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field name="lenderName" label="Nombre del fondista en el sistema" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field name="personType" label="Tipo de persona" component={TextFormField} />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Field name="name" label="Nombre" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field name="lastName" label="Apellido" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Field name="businessName" label="Razon social" component={TextFormField} />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="documentType" label="Tipo de documento" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="documentNumber" label="Numero de documento" component={TextFormField} />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="email" label="E-mail" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="cellphone" label="Celular" component={TextFormField} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <Field name="phone" label="Telefono" component={TextFormField} />
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

export default StepLender;
