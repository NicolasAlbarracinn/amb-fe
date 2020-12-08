import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import { documentTypeList, civilStateList, statusList } from 'utils/constants';
import { defaultPartner } from './defaultStates';

import { useStyles } from 'components/Wizard/stepsStyles';

import { selectBenefitsData, selectIsDataFetched } from 'containers/Benefits/selectors';
import { actions as benefitActions } from 'containers/Benefits/slice';

import { parseResponseData } from './parseResponseData';

import InputText from 'components/Form/InputText';

const PartnerDetail = () => {
  const classes = useStyles();
  const { inputs: partner, onChangeHanlder, updateInputs } = useInputChange(defaultPartner);
  const { loadError, handleNext } = useWizardStep(partner, 'partnerDetail');

  const { personalData, createdAt, status } = useSelector(selectBenefitsData);
  const isDataFetched = useSelector(selectIsDataFetched);
  const dispatch = useDispatch();

  useEffect(() => {
    const { isValid, value } = partner.partnerId;
    //Maybe for the isDataFetched condition we could use something like isEmpty function from lodash an verify if benefitData is empty or not
    if (isValid && !isDataFetched) {
      dispatch(benefitActions.getUpdateBenefitRequest(value));
    }
  }, [dispatch, partner, isDataFetched]);

  useEffect(() => {
    if (isDataFetched) {
      const updatedInput = parseResponseData(personalData);

      updateInputs({
        ...updatedInput,
        admissionDate: { value: createdAt, isValid: true },
        //TODO: add this parameter on db partner schema
        status: {
          value: status,
          isValid: true,
        },
      });
    }
  }, [isDataFetched, personalData, createdAt]);

  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={4}>
          <TextInput
            id="partnerId"
            label="numero de socio"
            value={partner.partnerId.value}
            onChange={onChangeHanlder}
            length={[1, 25]}
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
          {/* TODO: modificar/termmina input basado en el templeta */}
          <DateInput
            id="admissionDate"
            label="Fecha de ingreso"
            value={partner.admissionDate.value}
            isValid={partner.admissionDate.isValid}
            onChange={onChangeHanlder}
            loadError={loadError}
            disabled={true}
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
            disabled={true}
          />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <SelectInput
            id="status"
            label="Estado"
            mainSelectLabel="Selecione el estado"
            value={partner.status.value}
            handleSelect={onChangeHanlder}
            items={statusList}
            loadError={loadError}
            isValid={partner.status.isValid}
            disabled={true}
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
            disabled={true}
          />
        </GridItem>
      </GridContainer>
      <div className={classes.footer}>
        <div className={classes.right}>
          {true ? (
            <Button type="submit" color="rose" onClick={handleNext}>
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
