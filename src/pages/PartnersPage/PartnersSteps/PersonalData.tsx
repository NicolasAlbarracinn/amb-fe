import React, { useState, ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles, Theme } from '@material-ui/core';
import Face from '@material-ui/icons/Face';
import Email from '@material-ui/icons/Email';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import EmailInput from 'components/Form/EmailInput';
import TextInput from 'components/Form/TextInput';
import SelectInput from 'components/Form/SelectInput';
import Button from 'components/CustomButtons/Button';

import { actions as wizardActions } from 'containers/WizardContainer/slice';

import { actions as partnersActions } from 'containers/Partners/slice';
import { selectFetchedRenaperData, selectPersonalData } from 'containers/Partners/selectors';
import { parseSubmitForm } from 'utils/parseForm';

export const useStyles = makeStyles((theme: Theme) => ({
  infoText: {
    fontWeight: 300,
    margin: '10px 0 30px',
    textAlign: 'center',
  },
  inputAdornmentIcon: {
    color: '#555',
  },
  inputAdornment: {
    position: 'relative',
  },
  footer: {
    padding: '0 15px',
  },
  left: {
    float: 'left!important' as 'left',
  },
  right: {
    float: 'right!important' as 'right',
  },
  clearfix: {
    '&:after,&:before': {
      display: 'table',
      content: '" "',
    },
    clear: 'both',
  },
}));

type SubmitFunction = (arg: any) => void;

interface IStep1 {
  handleSubmit: SubmitFunction;
  formValues: typeof initialForm;
  compone: ReactNode;
}

const initialForm = {
  documentType: {
    value: '',
    isValid: false,
  },
  partnerId: {
    value: '',
    isValid: true,
  },
  documentNumber: {
    value: '',
    isValid: false,
  },
  procedureNumber: {
    value: '',
    isValid: false,
  },
  gender: {
    value: '',
    isValid: false,
  },
  cuil: {
    value: '',
    isValid: false,
  },
  name: {
    value: '',
    isValid: false,
  },
  lastName: {
    value: '',
    isValid: false,
  },
  country: {
    value: '',
    isValid: false,
  },
  birthPlace: {
    value: '',
    isValid: false,
  },
  civilState: {
    value: '',
    isValid: false,
  },
  email: {
    value: '',
    isValid: false,
  },
  phone: {
    value: '',
    isValid: false,
  },
  personalPhone: {
    value: '',
    isValid: false,
  },
  salary: {
    value: '',
    isValid: false,
  },
  netSalary: {
    value: '',
    isValid: false,
  },
  socialQuota: {
    value: '',
    isValid: false,
  },
  paymentType: {
    value: '',
    isValid: false,
  },
  recoveryPaymentType: {
    value: '',
    isValid: false,
  },
  otherPerferences: {
    value: '',
    isValid: false,
  },
};

const PersonalData = () => {
  const classes = useStyles();
  const [personalData, setPersonalData] = useState(initialForm);
  const [loadError, setLoadError] = useState(false);
  const renaperData = useSelector(selectPersonalData);
  const fetchedRenaperData = useSelector(selectFetchedRenaperData);
  const dispatch = useDispatch();

  useEffect(() => {
    const { documentNumber, procedureNumber, gender } = personalData;
    if (documentNumber.isValid && procedureNumber.isValid && gender.isValid && !fetchedRenaperData) {
      dispatch(
        partnersActions.getRenaperDataRequest({
          documentNumber: documentNumber.value,
          procedureNumber: procedureNumber.value,
          gender: gender.value,
        }),
      );
    }
  }, [dispatch, fetchedRenaperData, personalData]);

  useEffect(() => {
    if (fetchedRenaperData) {
      setPersonalData(prevState => ({ ...prevState, ...renaperData }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedRenaperData, renaperData]);

  const handleNext = () => {
    const isFormInvalid = Object.entries(personalData).some(key => key[1].isValid === false);
    if (isFormInvalid) {
      dispatch(wizardActions.setStep({ stepId: 'personalData', data: parseSubmitForm(personalData), isValid: false }));
      setLoadError(true);
    } else {
      dispatch(
        wizardActions.setStep({
          stepId: 'personalData',
          data: parseSubmitForm(personalData),
          isValid: true,
          type: 'next',
        }),
      );
    }
  };

  const onChangeHanlder = ({ id, value, isValid }) => {
    setPersonalData(prevState => ({
      ...prevState,
      [id]: {
        value: value,
        isValid,
      },
    }));
  };

  return (
    <>
      <GridContainer id="renaper-data" style={{ marginBottom: '3%' }}>
        {/*<GridItem xs={12} sm={4}>
          <SelectInput
            id="documentType"
            isValid={personalData.documentType.isValid}
            loadError={loadError}
            label="Tipo de Documento"
            mainSelectLabel="Selecione su tipo de documento"
            value={personalData.documentType.value}
            handleSelect={onChangeHanlder}
            items={[
              { value: 'dni', label: 'DNI' },
              { value: 'passaporte', label: 'Passaporte' },
            ]}
          />
          </GridItem>*/}
        {/*        <GridItem xs={12} sm={2}>
          <TextInput
            id="partnerId"
            isValid={personalData.partnerId.isValid}
            loadError={loadError}
            label="N de socio"
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.partnerId.value}
            length={[1, 25]}
            inputType="number"
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>*/}
        <GridItem xs={12} sm={3}>
          <TextInput
            id="documentNumber"
            label="N de documento"
            inputType="number"
            value={personalData.documentNumber.value}
            onChange={onChangeHanlder}
            length={[7, 8]}
            isValid={personalData.documentNumber.isValid}
            loadError={loadError}
            disabled={fetchedRenaperData}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="procedureNumber"
            label="N de tramite"
            inputType="number"
            value={personalData.procedureNumber.value}
            onChange={onChangeHanlder}
            length={[10, 12]}
            isValid={personalData.procedureNumber.isValid}
            loadError={loadError}
            disabled={fetchedRenaperData}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <SelectInput
            id="gender"
            label="Genero"
            mainSelectLabel="Selecione su genero"
            value={personalData.gender.value}
            items={[
              { value: 'm', label: 'Masculino' },
              { value: 'f', label: 'Femenino' },
            ]}
            handleSelect={onChangeHanlder}
            loadError={loadError}
            isValid={personalData.gender.isValid}
            disabled={fetchedRenaperData}
          />
        </GridItem>
      </GridContainer>
      <GridContainer id="disabled-data" style={{ marginBottom: '3%' }}>
        <GridItem xs={12} sm={2}>
          <TextInput
            id="cuil"
            label="N de CUIL"
            inputType="number"
            value={personalData.cuil.value}
            onChange={onChangeHanlder}
            length={[10, 11]}
            isValid={personalData.cuil.isValid}
            loadError={loadError}
            disabled={true}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <TextInput
            id="name"
            label="Nombre"
            value={personalData.name.value}
            onChange={onChangeHanlder}
            isValid={personalData.name.isValid}
            loadError={loadError}
            disabled={true}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <TextInput
            id="lastName"
            label="Apellido"
            value={personalData.lastName.value}
            isValid={personalData.lastName.isValid}
            onChange={onChangeHanlder}
            loadError={loadError}
            disabled={true}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <SelectInput
            id="country"
            label="Nacionalidad"
            mainSelectLabel="Selecione su nacionalidad"
            value={personalData.country.value}
            items={[{ value: 'argentina', label: 'Argentina' }]}
            handleSelect={onChangeHanlder}
            loadError={loadError}
            isValid={personalData.country.isValid}
            disabled={true}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <SelectInput
            id="birthPlace"
            label="Lugar de Nacimiento"
            mainSelectLabel="Selecione su lugar de nacimiento"
            value={personalData.birthPlace.value}
            items={[{ value: 'argentina', label: 'Argentina' }]}
            handleSelect={onChangeHanlder}
            loadError={loadError}
            isValid={personalData.birthPlace.isValid}
            disabled={true}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <SelectInput
            id="civilState"
            label="Estado Civil"
            mainSelectLabel="Selecione su lugar de estado civil"
            value={personalData.civilState.value}
            items={[
              { value: 's', label: 'Soltero' },
              { value: 'c', label: 'Casado' },
            ]}
            handleSelect={onChangeHanlder}
            loadError={loadError}
            isValid={personalData.civilState.isValid}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <EmailInput
            id="email"
            label="Email"
            value={personalData.email.value}
            onChange={onChangeHanlder}
            isValid={personalData.email.isValid}
            loadError={loadError}
            endAdornmentIcon={<Email className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="phone"
            label="Telefono"
            value={personalData.phone.value}
            loadError={loadError}
            onChange={onChangeHanlder}
            length={[2, 25]}
            isValid={personalData.phone.isValid}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="personalPhone"
            label="Telefono Personal"
            value={personalData.personalPhone.value}
            onChange={onChangeHanlder}
            length={[2, 25]}
            isValid={personalData.personalPhone.isValid}
            loadError={loadError}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
      </GridContainer>
      <GridContainer id="enabled-data" style={{ marginBottom: '3%' }}>
        <GridItem xs={12} sm={4}>
          <TextInput
            id="salary"
            isValid={personalData.salary.isValid}
            loadError={loadError}
            label="Sueldo Bruto"
            onChange={onChangeHanlder}
            value={personalData.salary.value}
            length={[0, 25]}
            inputType="number"
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <TextInput
            id="netSalary"
            isValid={personalData.netSalary.isValid}
            loadError={loadError}
            label="Sueldo Neto"
            onChange={onChangeHanlder}
            value={personalData.netSalary.value}
            length={[0, 25]}
            inputType="number"
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <TextInput
            id="socialQuota"
            isValid={personalData.socialQuota.isValid}
            loadError={loadError}
            label="Cuota Social"
            onChange={onChangeHanlder}
            value={personalData.socialQuota.value}
            length={[0, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <SelectInput
            id="paymentType"
            isValid={personalData.documentType.isValid}
            loadError={loadError}
            label="Forma de Cobro C$"
            mainSelectLabel="Selecione Forma de Cobro C$"
            value={personalData.paymentType.value}
            handleSelect={onChangeHanlder}
            items={[
              { value: 'm', label: 'Masculino' },
              { value: 'F', label: 'Femenino' },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <SelectInput
            id="recoveryPaymentType"
            isValid={personalData.documentType.isValid}
            loadError={loadError}
            label="Forma de Cobro Recupero C$"
            mainSelectLabel="Selecione Forma de Cobro Recupero C$"
            value={personalData.recoveryPaymentType.value}
            handleSelect={onChangeHanlder}
            items={[
              { value: 'm', label: 'Masculino' },
              { value: 'F', label: 'Femenino' },
            ]}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12}>
          <TextInput
            id="otherPerferences"
            isValid={personalData.otherPerferences.isValid}
            loadError={loadError}
            label="Otros Pereferenciales"
            onChange={onChangeHanlder}
            value={personalData.otherPerferences.value}
            length={[0, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
      </GridContainer>
      <div className={classes.footer}>
        <div className={classes.right}>
          {true ? (
            <Button color="rose" onClick={handleNext}>
              Proximo
            </Button>
          ) : null}
        </div>
        <div className={classes.clearfix} />
      </div>
    </>
  );
};

export default PersonalData;
