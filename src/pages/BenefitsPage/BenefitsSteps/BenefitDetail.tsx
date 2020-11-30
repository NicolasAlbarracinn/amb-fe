import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { actions as benefitAction } from 'containers/Benefits/slice';

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
  const { inputs: benefit, onChangeHanlder, updateInputs } = useInputChange(defaultBenefit);
  const { loadError, handleSubmit, handlePrevious } = useWizardStep(benefit, 'benefitDetail');
  //TODO: agregar logica del formulario

  useEffect(() => {
    if (benefit.plan.isValid) {
      updateInputs({
        ...benefit,
        duesAmount: { value: '24 cuotas de 5292', isValid: true },
        duesQuantity: { value: 'cuota', isValid: true },
        amountGranted: { value: '56700', isValid: true },
        benefitStatus: { value: 's', isValid: true },
        signatureAmount: { value: '56700', isValid: true },
        statusDate: { value: '11/30/2020', isValid: true },
      });
    }
  }, [benefit.plan]);

  console.log(benefit);
  return (
    <>
      <GridContainer>
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
            disabled={true}
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
          <SelectInput
            id="plan"
            label="Plan"
            mainSelectLabel="Selecione el plan"
            value={benefit.plan.value}
            handleSelect={onChangeHanlder}
            items={[{ value: 'NMANOV2020', label: 'NMA - NOV/2020' }]}
            isValid={benefit.plan.isValid}
          />
        </GridItem>

        <GridItem xs={12} sm={3}>
          <TextInput
            id="signatureAmount"
            label="Monto Firma"
            inputType="signatureAmount"
            value={benefit.plan.value === 'NMANOV2020' ? '56700' : benefit.signatureAmount.value}
            onChange={onChangeHanlder}
            length={[10, 11]}
            isValid={benefit.plan.value === 'NMANOV2020' ? true : benefit.signatureAmount.isValid}
            loadError={loadError}
          />
        </GridItem>

        <GridItem xs={12} sm={3}>
          <SelectInput
            id="duesQuantity"
            label="Cantidad de cuotas"
            mainSelectLabel="Selecione Cantidad de cuotas"
            value={benefit.plan.value === 'NMANOV2020' ? 'cuota' : benefit.duesQuantity.value}
            handleSelect={onChangeHanlder}
            items={[{ value: 'cuota', label: '24 cuotas' }]}
            isValid={benefit.plan.value === 'NMANOV2020' ? true : benefit.duesQuantity.isValid}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="duesAmount"
            label="Monto de la cuota"
            value={benefit.plan.value === 'NMANOV2020' ? '24 cuotas de 5292' : benefit.duesAmount.value}
            onChange={onChangeHanlder}
            isValid={benefit.plan.value === 'NMANOV2020' ? true : benefit.duesAmount.isValid}
            loadError={loadError}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="amountGranted"
            label="Monto Otorgado"
            inputType="number"
            value={benefit.plan.value === 'NMANOV2020' ? '56700' : benefit.amountGranted.value}
            onChange={onChangeHanlder}
            isValid={benefit.plan.value === 'NMANOV2020' ? true : benefit.amountGranted.isValid}
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
            isValid={true}
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
            value={'s' ?? benefit.benefitStatus.value}
            handleSelect={onChangeHanlder}
            items={benefitStatusList}
            isValid={true}
            disabled={true}
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
            isValid={true}
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
