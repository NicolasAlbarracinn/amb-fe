import React, { useState, ReactNode } from 'react';
import { useDispatch } from 'react-redux';

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
  associateNumber: {
    value: '',
    isValid: false,
  },
  documentType: {
    value: '',
    isValid: false,
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
  otherPerferences: {
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
};

const Step1 = () => {
  const classes = useStyles();
  const [personalData, setpersonalData] = useState(initialForm);
  const [loadError, setLoadError] = useState(false);

  const dispatch = useDispatch();

  const handleNext = () => {
    const isFormInvalid = Object.entries(personalData).some(key => key[1].isValid === false);
    if (isFormInvalid) {
      dispatch(wizardActions.setStep({ stepId: 'personalData', data: personalData, isValid: false }));
      setLoadError(true);
    } else {
      dispatch(wizardActions.setStep({ stepId: 'personalData', data: personalData, isValid: true, type: 'next' }));
    }
  };

  const onChangeHanlder = ({ id, value, isValid }) => {
    setpersonalData(prevState => ({
      ...prevState,
      [id]: {
        value: value,
        isValid,
      },
    }));
  };
  console.log(personalData);
  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={2}>
          <TextInput
            id="associateNumber"
            isValid={personalData.associateNumber.isValid}
            loadError={loadError}
            label="N de socio"
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.associateNumber.value}
            length={[1, 25]}
            inputType="number"
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={4}>
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
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="documentNumber"
            isValid={personalData.documentNumber.isValid}
            loadError={loadError}
            label="N de documento"
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.documentNumber.value}
            inputType="number"
            length={[7, 8]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="procedureNumber"
            isValid={personalData.procedureNumber.isValid}
            loadError={loadError}
            label="N de tramite"
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.procedureNumber.value}
            length={[0, 25]}
            inputType="number"
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <SelectInput
            id="gender"
            isValid={personalData.gender.isValid}
            loadError={loadError}
            label="Genero"
            mainSelectLabel="Selecione su genero"
            value={personalData.gender.value}
            handleSelect={onChangeHanlder}
            items={[
              { value: 'm', label: 'Masculino' },
              { value: 'F', label: 'Femenino' },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <TextInput
            id="cuil"
            isValid={personalData.cuil.isValid}
            loadError={loadError}
            label="N de CUIL"
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.cuil.value}
            inputType="number"
            length={[10, 11]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <TextInput
            id="name"
            isValid={personalData.name.isValid}
            loadError={loadError}
            label="Nombre"
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.name.value}
            length={[0, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <TextInput
            id="lastName"
            isValid={personalData.lastName.isValid}
            loadError={loadError}
            label="Apellido"
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.lastName.value}
            length={[0, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <SelectInput
            id="country"
            isValid={personalData.country.isValid}
            loadError={loadError}
            label="Nacionalidad"
            mainSelectLabel="Selecione su nacionalidad"
            value={personalData.country.value}
            handleSelect={onChangeHanlder}
            items={[
              { value: 'm', label: 'Masculino' },
              { value: 'F', label: 'Femenino' },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <SelectInput
            id="birthPlace"
            isValid={personalData.birthPlace.isValid}
            loadError={loadError}
            label="Lugar de Nacimiento"
            mainSelectLabel="Selecione su lugar de nacimiento"
            value={personalData.birthPlace.value}
            handleSelect={onChangeHanlder}
            items={[
              { value: 'm', label: 'Masculino' },
              { value: 'F', label: 'Femenino' },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <SelectInput
            id="civilState"
            isValid={personalData.civilState.isValid}
            loadError={loadError}
            label="Estado Civil"
            mainSelectLabel="Selecione su lugar de estado civil"
            value={personalData.civilState.value}
            handleSelect={onChangeHanlder}
            items={[
              { value: 'm', label: 'Masculino' },
              { value: 'F', label: 'Femenino' },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <EmailInput
            id="email"
            isValid={personalData.email.isValid}
            loadError={loadError}
            label="Email"
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.email.value}
            endAdornmentIcon={<Email className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="phone"
            isValid={personalData.phone.isValid}
            loadError={loadError}
            label="Telefono"
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.phone.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="personalPhone"
            isValid={personalData.personalPhone.isValid}
            loadError={loadError}
            label="Telefono"
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.personalPhone.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <TextInput
            id="salary"
            isValid={personalData.salary.isValid}
            loadError={loadError}
            label="Sueldo Bruto"
            isRequired={true}
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
            isRequired={true}
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
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.socialQuota.value}
            length={[0, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <TextInput
            id="otherPerferences"
            isValid={personalData.otherPerferences.isValid}
            loadError={loadError}
            label="Otros Pereferenciales"
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.otherPerferences.value}
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

export default Step1;