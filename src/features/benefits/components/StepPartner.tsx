import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import TextFormField from 'components/Form/TextField';
import SearchBar from 'components/SearchBar/SearchBar';
import { useStyles } from 'components/Wizard/styles';
import { selectParameterWasSubmited, selectSearchParameter } from 'components/SearchBar/selectors';

import { useWizardStep } from '../../wizard/hooks';

import { actions as benefitActions } from '../store/slice';
import { selectPartnerData, selectIsDataFetched } from '../store/selectors';
import { defaultPartner, partnerValidationSchema } from '../config';
import { IPartner } from '../types';

const UserProfile = () => {
  const [inputFields, setInputFields] = useState(defaultPartner);
  const { handleNext } = useWizardStep('partnerDetail');

  const classes = useStyles();
  const dispatch = useDispatch();

  const partnertData: IPartner | null = useSelector(selectPartnerData);
  const isDataFetched = useSelector(selectIsDataFetched);
  const wasSubmited = useSelector(selectParameterWasSubmited);
  const searchParam = useSelector(selectSearchParameter);

  useEffect(() => {
    if (wasSubmited) dispatch(benefitActions.getPartnerInformationRequest(searchParam));
  }, [wasSubmited, searchParam, dispatch]);

  useEffect(() => {
    if (isDataFetched && partnertData) {
      setInputFields(partnertData.partnerDetail);
    }
  }, [isDataFetched, partnertData]);

  return (
    <div>
      <Formik
        initialValues={inputFields}
        onSubmit={values => handleNext(values)}
        validationSchema={partnerValidationSchema}
        enableReinitialize={true}
      >
        <Form>
          <GridContainer>
            <GridItem xs={12} sm={12}>
              <Field name="partnerId" label="Numero de socio" component={SearchBar} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Field name="name" label="Nombre" component={TextFormField} />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Field name="lastName" label="Apellido" component={TextFormField} />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={2}>
              <Field name="documentType" label="Tipo de Documento" component={TextFormField} />
            </GridItem>
            <GridItem xs={12} sm={12} md={2}>
              <Field name="documentNumber" label="N de documento" component={TextFormField} />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Field name="gender" label="Genero" component={TextFormField} />
            </GridItem>{' '}
            <GridItem xs={12} sm={12} md={4}>
              <Field name="cuil" label="N de CUIL" component={TextFormField} />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Field name="civilState" label="Estado Civil" component={TextFormField} />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Field name="status" label="Estado" component={TextFormField} />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Field name="email" label="Email" component={TextFormField} />
            </GridItem>
          </GridContainer>

          <div className={classes.footer}>
            <div className={classes.right}>
              {true ? (
                <Button type="submit" color="rose" onClick={() => {}}>
                  Proximo
                </Button>
              ) : null}
            </div>
            <div className={classes.clearfix} />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UserProfile;
