import React, { useState, ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles, Theme } from '@material-ui/core';

import Face from '@material-ui/icons/Face';
import Email from '@material-ui/icons/Email';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import TextInput from 'components/Form/TextInput';
import SelectInput from 'components/Form/SelectInput';
import EmailInput from 'components/Form/EmailInput';
import DateInput from 'components/Form/DateInput';
import Button from 'components/CustomButtons/Button';

import { useInputChange, useWizardStep } from 'containers/WizardContainer/hooks';

import { documentTypeList, civilStateList } from 'utils/constants';

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

const initialForm = {
  partnerId: {
    value: '',
    isValid: true,
  },
  name: {
    value: '',
    isValid: false,
  },
  lastName: {
    value: '',
    isValid: false,
  },
  admissionDate: {
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
  gender: {
    value: '',
    isValid: false,
  },
  cuil: {
    value: '',
    isValid: false,
  },

  civilState: {
    value: '',
    isValid: false,
  },
  status: {
    value: '',
    isValid: false,
  },
  email: {
    value: '',
    isValid: false,
  },
};

const PartnerDetail = () => {
  const classes = useStyles();
  const { inputs: partner, onChangeHanlder } = useInputChange(initialForm);
  const { loadError, handleNext } = useWizardStep(partner, 'partnerDetail');

  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={4}>
          <TextInput
            id="streetAdress"
            label="N° de afiliado"
            value={partner.partnerId.value}
            onChange={onChangeHanlder}
            length={[2, 25]}
            isValid={partner.partnerId.isValid}
            loadError={loadError}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <TextInput
            id="name"
            label="Nombre"
            value={partner.name.value}
            onChange={onChangeHanlder}
            isValid={partner.name.isValid}
            loadError={loadError}
            disabled={true}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <TextInput
            id="lastName"
            label="Apellido"
            value={partner.lastName.value}
            isValid={partner.lastName.isValid}
            onChange={onChangeHanlder}
            loadError={loadError}
            disabled={true}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <DateInput
            id="admissionDate"
            label="Fecha de ingreso"
            value={partner.admissionDate.value}
            isValid={partner.admissionDate.isValid}
            onChange={onChangeHanlder}
            loadError={loadError}
            disabled={false}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={2}>
          <SelectInput
            id="documentType"
            label="Tipo de Documento"
            mainSelectLabel="Selecione tipo documento"
            value={partner.documentType.value}
            items={documentTypeList}
            handleSelect={onChangeHanlder}
            loadError={loadError}
            isValid={partner.documentType.isValid}
            disabled={true}
          />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <TextInput
            id="documentNumber"
            label="N de documento"
            inputType="number"
            value={partner.documentNumber.value}
            onChange={onChangeHanlder}
            length={[7, 8]}
            isValid={partner.documentNumber.isValid}
            loadError={loadError}
            disabled={true}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <SelectInput
            id="gender"
            label="Genero"
            mainSelectLabel="Selecione su genero"
            value={partner.gender.value}
            items={[
              { value: 'm', label: 'Masculino' },
              { value: 'f', label: 'Femenino' },
            ]}
            handleSelect={onChangeHanlder}
            loadError={loadError}
            isValid={partner.gender.isValid}
            disabled={true}
          />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <TextInput
            id="cuil"
            label="N de CUIL"
            inputType="number"
            value={partner.cuil.value}
            onChange={onChangeHanlder}
            length={[10, 11]}
            isValid={partner.cuil.isValid}
            loadError={loadError}
            disabled={true}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={4}>
          <SelectInput
            id="civilState"
            label="Estado Civil"
            mainSelectLabel="Selecione su lugar de estado civil"
            value={partner.civilState.value}
            items={civilStateList}
            handleSelect={onChangeHanlder}
            loadError={loadError}
            isValid={partner.civilState.isValid}
          />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <TextInput
            id="status"
            label="Estado"
            inputType="number"
            value={partner.cuil.value}
            onChange={onChangeHanlder}
            length={[10, 11]}
            isValid={partner.cuil.isValid}
            loadError={loadError}
            disabled={true}
            endAdornmentIcon={<Face className={classes.inputAdornmentIcon} />}
          />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <DateInput
            id="stau"
            label="Fecha de Estado"
            value=""
            isValid={partner.admissionDate.isValid}
            onChange={onChangeHanlder}
            loadError={loadError}
            disabled={false}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6}>
          <EmailInput
            id="email"
            label="Email"
            value={partner.email.value}
            onChange={onChangeHanlder}
            isValid={partner.email.isValid}
            loadError={loadError}
            endAdornmentIcon={<Email className={classes.inputAdornmentIcon} />}
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

export default PartnerDetail;
