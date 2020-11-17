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
  const [hasErrors, setHasErrors] = useState(false);

  const dispatch = useDispatch();

  const handleNext = () => {
    const isFormInvalid = Object.entries(personalData).some(key => key[1].isValid === false);
    if (isFormInvalid) {
      setHasErrors(true);
      dispatch(wizardActions.setStep({ stepId: 'personalData', data: personalData, isValid: false }));
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

  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={2}>
          <TextInput
            id="associateNumber"
            hasErrors={hasErrors}
            label="N de socio"
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.associateNumber.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={4}>
          <SelectInput
            id="documentType"
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
            label="N de documento"
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.documentNumber.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="procedureNumber"
            label="N de tramite"
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.procedureNumber.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <SelectInput
            id="gender"
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
            label="N de CUIL"
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.cuil.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <TextInput
            id="name"
            label="Nombre"
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.name.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <TextInput
            id="lastName"
            label="Apellido"
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.lastName.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <SelectInput
            id="country"
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
            label="Sueldo Bruto"
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.salary.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <TextInput
            id="netSalary"
            label="Sueldo Neto"
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.netSalary.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <TextInput
            id="socialQuota"
            label="Cuota Social"
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.socialQuota.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <TextInput
            id="otherPerferences"
            label="Otros Pereferenciales"
            isRequired={true}
            onChange={onChangeHanlder}
            value={personalData.otherPerferences.value}
            length={[2, 25]}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <SelectInput
            id="paymentType"
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
