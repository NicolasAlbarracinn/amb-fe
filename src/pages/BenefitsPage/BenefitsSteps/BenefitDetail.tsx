import React from 'react';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import TextInput from 'components/Form/TextInput';
import SelectInput from 'components/Form/SelectInput';
import DateInput from 'components/Form/DateInput';
import Button from 'components/CustomButtons/Button';

import { useInputChange, useWizardStep } from 'containers/WizardContainer/hooks';
import { benefitTypeList, portfoliosList, benefitStatusList } from 'utils/constants';
import { defaultBenefit } from './defaultStates';
import { useStyles } from 'components/Wizard/stepsStyles';

const BenefitDetail = () => {
  const classes = useStyles();
  const { inputs: benefit, onChangeHanlder } = useInputChange(defaultBenefit);
  const { loadError, handleSubmit, handlePrevious } = useWizardStep(benefit, 'benefitDetail');

  //TODO: agregar logica del formulario
  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="benefitNumber"
            label="N° de prestación"
            inputType="number"
            value={benefit.benefitNumber.value}
            onChange={onChangeHanlder}
            length={[10, 11]}
            isValid={benefit.benefitNumber.isValid}
            loadError={loadError}
            disabled={true}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="lotNumber"
            label="N° de lote"
            value={benefit.lotNumber.value}
            onChange={onChangeHanlder}
            isValid={benefit.lotNumber.isValid}
            loadError={loadError}
          />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <SelectInput
            id="benefitType"
            label="Tipo"
            mainSelectLabel="Selecione el tipo"
            value={benefit.benefitType.value}
            handleSelect={onChangeHanlder}
            items={benefitTypeList}
            isValid={benefit.benefitType.isValid}
          />
        </GridItem>
        <GridItem xs={12} sm={2}>
          <TextInput
            id="certificateNumber"
            label="N° Certificado"
            inputType="number"
            value={benefit.certificateNumber.value}
            onChange={onChangeHanlder}
            isValid={benefit.certificateNumber.isValid}
            loadError={loadError}
            disabled={benefit.benefitType.value === benefitTypeList[1].value}
          />
        </GridItem>
        {/* siempre el dia actual */}
        <GridItem xs={12} sm={2}>
          {/* TODO: modificar/termmina input basado en el templeta */}
          <DateInput
            id="applicationDate"
            label="Fecha de solicitud"
            value={benefit.applicationDate.value}
            isValid={benefit.applicationDate.isValid}
            onChange={onChangeHanlder}
            loadError={loadError}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={3}>
          <SelectInput
            id="portfolio"
            label="Cartera"
            mainSelectLabel="Selecione el tipo de Cartera"
            value={benefit.portfolio.value}
            handleSelect={onChangeHanlder}
            items={portfoliosList}
            isValid={benefit.portfolio.isValid}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="plan"
            label="Plan"
            inputType="number"
            value={benefit.plan.value}
            onChange={onChangeHanlder}
            isValid={benefit.plan.isValid}
            loadError={loadError}
          />
        </GridItem>

        <GridItem xs={12} sm={3}>
          <TextInput
            id="signatureAmount"
            label="Monto Firma"
            inputType="signatureAmount"
            value={benefit.signatureAmount.value}
            onChange={onChangeHanlder}
            length={[10, 11]}
            isValid={benefit.signatureAmount.isValid}
            loadError={loadError}
          />
        </GridItem>

        <GridItem xs={12} sm={3}>
          <SelectInput
            id="duesQuantity"
            label="Cantidad de cuotas"
            mainSelectLabel="Selecione Cantidad de cuotas"
            value={benefit.duesQuantity.value}
            handleSelect={onChangeHanlder}
            items={[{ value: 'cuota', label: '3 cuotas' }]}
            isValid={benefit.duesQuantity.isValid}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="duesAmount"
            label="Monto Otorgado"
            inputType="number"
            value={benefit.duesAmount.value}
            onChange={onChangeHanlder}
            isValid={benefit.duesAmount.isValid}
            loadError={loadError}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="amountGranted"
            label="Monto de la cuota"
            inputType="number"
            value={benefit.amountGranted.value}
            onChange={onChangeHanlder}
            isValid={benefit.amountGranted.isValid}
            loadError={loadError}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12}>
          <TextInput
            id="observations"
            label="Observaciones"
            value={benefit.observations.value}
            onChange={onChangeHanlder}
            isValid={benefit.observations.isValid}
            loadError={loadError}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={3}>
          <SelectInput
            id="benefitStatus"
            label="Estado de la prestación"
            mainSelectLabel="estado de prestacion"
            value={benefit.benefitStatus.value}
            handleSelect={onChangeHanlder}
            items={benefitStatusList}
            isValid={benefit.benefitStatus.isValid}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="commercializer"
            label="Comercializador"
            value={benefit.commercializer.value}
            onChange={onChangeHanlder}
            isValid={benefit.commercializer.isValid}
            loadError={loadError}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="grantedPeriod"
            label="Periodo otorgado"
            value={benefit.grantedPeriod.value}
            onChange={onChangeHanlder}
            isValid={benefit.grantedPeriod.isValid}
            loadError={loadError}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <SelectInput
            id="proceedingGranted"
            label="Legajo entregado"
            mainSelectLabel="Seleccione numero de Legajo"
            value={benefit.proceedingGranted.value}
            handleSelect={onChangeHanlder}
            items={[{ value: '12312312', label: '1223123' }]}
            isValid={benefit.proceedingGranted.isValid}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          {/* TODO: modificar/termmina input basado en el templeta */}
          <DateInput
            id="statusDate"
            label="Fecha Estado"
            value={benefit.statusDate.value}
            isValid={benefit.statusDate.isValid}
            onChange={onChangeHanlder}
            loadError={loadError}
          />
        </GridItem>
      </GridContainer>
      <div className={classes.footer}>
        <div className={classes.left}>
          <Button color="rose" onClick={handlePrevious}>
            Anterior
          </Button>
        </div>
        <div className={classes.right}>
          {true ? (
            <Button color="rose" onClick={handleSubmit}>
              Finalizar
            </Button>
          ) : null}
        </div>
        <div className={classes.clearfix} />
      </div>
    </>
  );
};

export default BenefitDetail;

// N° de prestación
// N° de lote
// Tipo
// N° Certificado
// Fecha de solicitud
// Cartera
// Plan
// Monto Firma
// Cantidad de cuotas
// Monto de la cuota
// Monto en mano
// Monto Otorgado
// Observaciones
// Estado de la prestación
// Comercializador
// Periodo otorgado
// Legajo entregado
// Fecha Estado
