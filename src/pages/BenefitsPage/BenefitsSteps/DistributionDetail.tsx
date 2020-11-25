import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import TextInput from 'components/Form/TextInput';
import SelectInput from 'components/Form/SelectInput';

import Button from 'components/CustomButtons/Button';

import { useInputChange, useWizardStep } from 'containers/WizardContainer/hooks';
import { ministriesList, recuperoCSList } from 'utils/constants';

import { defaultDistribution } from './defaultStates';

import { useStyles } from 'components/Wizard/stepsStyles';

import { selectBenefitsData } from 'containers/Benefits/selectors';

const DistributionDetail = () => {
  const classes = useStyles();
  const { inputs: distribution, onChangeHanlder, updateInputs } = useInputChange(defaultDistribution);
  const { loadError, handleNext, handlePrevious } = useWizardStep(distribution, 'distributionDetail');

  const { distribution: distributionData } = useSelector(selectBenefitsData);

  useEffect(() => {
    updateInputs(distributionData);
  }, [distributionData]);

  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={4}>
          <SelectInput
            id="distribution"
            label="Repartición"
            value={distribution.distribution.value}
            items={ministriesList}
            handleSelect={onChangeHanlder}
            loadError={loadError}
            isValid={distribution.distribution.isValid}
            disabled={true}
          />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <TextInput
            id="distributionCode"
            label="Código"
            value={distribution.distributionCode.value}
            onChange={onChangeHanlder}
            length={[2, 25]}
            isValid={distribution.distributionCode.isValid}
            loadError={loadError}
            disabled={true}
          />
        </GridItem>
        <GridItem xs={12} sm={4}>
          <TextInput
            id="dependence"
            label="Dependencia"
            inputType="number"
            value={distribution.dependence.value}
            onChange={onChangeHanlder}
            isValid={distribution.dependence.isValid}
            loadError={loadError}
            disabled={true}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="fileNumber"
            label="N° Legajo"
            inputType="number"
            value={distribution.dependence.value}
            onChange={onChangeHanlder}
            isValid={distribution.dependence.isValid}
            loadError={loadError}
            disabled={true}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="fileItem"
            label="Item Legajo"
            inputType="number"
            value={distribution.dependence.value}
            onChange={onChangeHanlder}
            isValid={distribution.dependence.isValid}
            loadError={loadError}
            disabled={true}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <SelectInput
            id="paymentMethod"
            label="Forma de cobro"
            value={distribution.paymentMethod.value}
            items={recuperoCSList}
            handleSelect={onChangeHanlder}
            loadError={loadError}
            isValid={distribution.paymentMethod.isValid}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <SelectInput
            id="paymentMethodRecovery"
            label="Forma de Cobro Recupero"
            value={distribution.paymentMethodRecovery.value}
            items={recuperoCSList}
            handleSelect={onChangeHanlder}
            loadError={loadError}
            isValid={distribution.paymentMethodRecovery.isValid}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="bank"
            label="Banco"
            value={distribution.bank.value}
            onChange={onChangeHanlder}
            isValid={distribution.bank.isValid}
            loadError={loadError}
            disabled={true}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="cbu"
            label="CBU"
            value={distribution.cbu.value}
            onChange={onChangeHanlder}
            isValid={distribution.cbu.isValid}
            loadError={loadError}
            disabled={true}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="bankBranch"
            label="Sucursal bancaria"
            value={distribution.bankBranch.value}
            onChange={onChangeHanlder}
            isValid={distribution.bankBranch.isValid}
            loadError={loadError}
            disabled={true}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="acountNumber"
            label="N° de cuenta"
            value={distribution.acountNumber.value}
            onChange={onChangeHanlder}
            isValid={distribution.acountNumber.isValid}
            loadError={loadError}
            disabled={true}
          />
        </GridItem>
      </GridContainer>
      {distribution.distribution.value === 'cajaDePolicía' && (
        <GridContainer>
          <GridItem xs={12} sm={4}>
            <SelectInput
              id="programCode"
              label="Código de programa"
              value={distribution.programCode.value}
              items={[{ value: 'no', label: 'faltan opciones' }]}
              handleSelect={onChangeHanlder}
              loadError={loadError}
              isValid={distribution.programCode.isValid}
            />
          </GridItem>
          <GridItem xs={12} sm={4}>
            <TextInput
              id="sequenceNumber"
              label="N° de secuencia"
              value={distribution.sequenceNumber.value}
              onChange={onChangeHanlder}
              isValid={distribution.sequenceNumber.isValid}
              loadError={loadError}
            />
          </GridItem>
        </GridContainer>
      )}

      <div className={classes.footer}>
        <div className={classes.left}>
          <Button color="rose" onClick={handlePrevious}>
            Anterior
          </Button>
        </div>
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

export default DistributionDetail;

// Repartición
// Código
// Dependencia
// N° Legajo
// Item Legajo
// Forma de cobro
// Forma de Cobro Recupero
// Banco
// CBU
// Sucursal bancaria
// N° de cuenta
// Código de programa
// N° de secuencia
