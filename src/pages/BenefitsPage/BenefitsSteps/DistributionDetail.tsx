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

import { selectBenefitsData, selectIsDataFetched } from 'containers/Benefits/selectors';

import { parseResponseData } from './parseResponseData';

const DistributionDetail = () => {
  const classes = useStyles();
  const { inputs: distribution, onChangeHanlder, updateInputs } = useInputChange(defaultDistribution);
  const { loadError, handleNext, handlePrevious } = useWizardStep(distribution, 'distributionDetail');

  const { workInfo } = useSelector(selectBenefitsData);
  const isDataFetched = useSelector(selectIsDataFetched);

  useEffect(() => {
    if (isDataFetched) {
      const updatedInput = parseResponseData(workInfo);
      updateInputs({
        ...updatedInput,
        //This value is wrong on the db
        repartition: { value: 'bica', isValid: true },
        //Thit two filed are missing in the db
        dependence: { value: '12222', isValid: true },
        distributionCode: { value: 'bica', isValid: true },
      });
    }
  }, [workInfo]);

  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={4}>
          <SelectInput
            id="repartition"
            label="Repartición"
            value={distribution.repartition.value}
            items={ministriesList}
            handleSelect={onChangeHanlder}
            loadError={loadError}
            isValid={distribution.repartition.isValid}
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
            value={distribution.fileNumber.value}
            onChange={onChangeHanlder}
            isValid={distribution.fileNumber.isValid}
            loadError={loadError}
            disabled={true}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="fileItem"
            label="Item Legajo"
            inputType="number"
            value={distribution.fileItem.value}
            onChange={onChangeHanlder}
            isValid={distribution.fileItem.isValid}
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
            id="branch"
            label="Sucursal bancaria"
            value={distribution.branch.value}
            onChange={onChangeHanlder}
            isValid={distribution.branch.isValid}
            loadError={loadError}
            disabled={true}
          />
        </GridItem>
        <GridItem xs={12} sm={3}>
          <TextInput
            id="accountNumber"
            label="N° de cuenta"
            value={distribution.accountNumber.value}
            onChange={onChangeHanlder}
            isValid={distribution.accountNumber.isValid}
            loadError={loadError}
            disabled={true}
          />
        </GridItem>
      </GridContainer>
      {distribution.repartition.value === 'cajaDePolicía' && (
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
