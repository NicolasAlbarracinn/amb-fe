import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import GridContainer from 'components/Grid/GridContainer';
import Button from 'components/CustomButtons/Button';

import { useInputChange } from 'containers/WizardContainer/hooks';

import { useStyles } from 'components/Wizard/stepsStyles';

import { actions as wizardActions } from 'containers/WizardContainer/slice';

import { parseSubmitForm } from 'utils/parseForm';

import FormInputs from 'components/Form/Inputs';
import { liquidationsConfig } from './liquidationsConfig';
import { bankLiquidationState } from './PortfoliosDeafultValues';

const BankLiquidation = () => {
  const classes = useStyles();
  const { inputs, updateInputs } = useInputChange(bankLiquidationState);

  //TODO: move this to the wizard custom hook
  const dispatch = useDispatch();
  const [formHasBeenSubmited, setFormHasBeenSubmited] = useState(false);

  const handleSubmit = () => {
    const isFormInvalid = Object.entries(inputs).some(key => key[1].isValid === false);

    if (!isFormInvalid) {
      dispatch(
        wizardActions.setStep({
          stepId: 'bankLiquidation',
          data: parseSubmitForm(inputs),
          isValid: true,
          type: 'submit',
        }),
      );
    }
  };
  const handlePrevious = () => {
    dispatch(
      wizardActions.setStep({
        stepId: 'bankLiquidation',
        data: parseSubmitForm(inputs),
        isValid: true,
        type: 'previous',
      }),
    );
  };

  const config = liquidationsConfig(inputs, updateInputs, formHasBeenSubmited);

  return (
    <>
      <GridContainer>{FormInputs(config)}</GridContainer>
      <div className={classes.footer}>
        <div className={classes.left}>
          <Button color="rose" onClick={handlePrevious}>
            Anterior
          </Button>
        </div>
        <div className={classes.right}>
          <Button color="rose" onClick={handleSubmit}>
            Finalizar
          </Button>
        </div>
        <div className={classes.clearfix} />
      </div>
    </>
  );
};

export default BankLiquidation;
