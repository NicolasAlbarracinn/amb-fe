import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IPlan, IBenefit } from 'containers/Benefits/types';
import { selectPlan, selectPlanList, selectPartnerData } from 'containers/Benefits/selectors';
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
import { parseResponseData } from './parseResponseData';

const defaultPlanState = {
  plan: {
    value: '',
    isValid: false,
  },
  duesQuantity: {
    value: '',
    isValid: false,
  },
  duesAmount: {
    value: '',
    isValid: false,
  },
};

const BenefitDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const partnerData: IBenefit | null = useSelector(selectPartnerData);
  const planList: IPlan[] = useSelector(selectPlanList);
  const plan: IPlan | null = useSelector(selectPlan);
  const { inputs: benefit, onChangeHanlder, updateInputs } = useInputChange(defaultBenefit);
  const { loadError, handleSubmit, handlePrevious } = useWizardStep(benefit, 'benefitDetail');

  const setPlanDefaultValues = useCallback(() => {
    if (partnerData?.benefitId) {
      const updatedInput = parseResponseData(partnerData);
      updateInputs(updatedInput);
      return;
    }

    updateInputs(defaultPlanState);
  }, [updateInputs, partnerData]);

  useEffect(() => {
    updateInputs({
      duesQuantity: {
        value: '',
        isValid: false,
      },
      duesAmount: {
        value: '',
        isValid: false,
      },
    });
    if (benefit.plan.isValid) {
      dispatch(benefitAction.getPlanRequest(benefit.plan.value));
    }
  }, [benefit.plan, dispatch, updateInputs]);

  useEffect(() => {
    setPlanDefaultValues();
    if (benefit.portfolio.value) {
      dispatch(benefitAction.getPlanListRequest(benefit.portfolio.value));
    }
  }, [benefit.portfolio.value, dispatch, setPlanDefaultValues]);

  useEffect(() => {
    if (benefit.duesQuantity.isValid) {
      onChangeHanlder({ id: 'duesAmount', value: benefit.duesQuantity.value, isVAlid: true });
    }
  }, [benefit.duesQuantity, onChangeHanlder]);

  useEffect(() => {
    if (plan) {
      updateInputs({
        amountGranted: {
          value: plan.amountGranted,
          isValid: true,
        },
        signatureAmount: {
          value: plan.signatureAmount,
          isValid: true,
        },
      });
    }
  }, [plan, updateInputs]);

  return (
    <>
      <GridContainer>
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
            items={planList.map(pl => ({ value: pl._id, label: pl.plan }))}
            isValid={benefit.plan.isValid}
          />
        </GridItem>

        <GridItem xs={12} sm={3}>
          <TextInput
            id="signatureAmount"
            label="Monto Firma"
            inputType="signatureAmount"
            value={plan?.signatureAmount || ''}
            onChange={onChangeHanlder}
            length={[0, 100]}
            isValid={benefit.signatureAmount.isValid}
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
            items={
              plan?.dues?.map(d => ({
                value: `${d.duesQuantity} cuotas de ${d.duesAmount}`,
                label: `${d.duesQuantity} cuotas`,
              })) || []
            }
            isValid={benefit.duesQuantity.isValid}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="duesAmount"
            label="Monto de la cuota"
            value={benefit.duesAmount.value}
            onChange={onChangeHanlder}
            isValid={benefit.duesAmount.isValid}
            loadError={loadError}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="amountGranted"
            label="Monto Otorgado"
            inputType="number"
            value={plan?.amountGranted || ''}
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
