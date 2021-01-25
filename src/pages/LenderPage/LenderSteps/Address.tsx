import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GridContainer from 'components/Grid/GridContainer';
import Button from 'components/CustomButtons/Button';

import { DefaultState, useInputChange, useWizardStep } from 'containers/WizardContainer/hooks';

import { useStyles } from 'components/Wizard/stepsStyles';

import { actions as wizardActions } from 'containers/WizardContainer/slice';

import { parseReceivedForm, parseSubmitForm } from 'utils/parseForm';

import FormInputs from 'components/Form/Inputs';
import { addressConfig } from './lenderConfig';
import { addressDefaultState } from './lenderDefaultValues';

import { selectLenderData, selectIsDataBeenFetched } from 'containers/Lender/selectors';

const Address = () => {
  const classes = useStyles();
  const [formHasBeenSubmited, setFormHasBeenSubmited] = useState(false);
  const { inputs, updateInputs } = useInputChange(addressDefaultState);
  const config = addressConfig(addressDefaultState, updateInputs, formHasBeenSubmited);
  const [inputsConfig, setInputConfig] = useState(config);

  //TODO: move this to the wizard custom hook
  const dispatch = useDispatch();
  const { address: addressData } = useSelector(selectLenderData);
  const fetched = useSelector(selectIsDataBeenFetched);

  const handleNext = () => {
    const isFormInvalid = Object.entries(inputs).some(key => key[1].isValid === false);
    if (isFormInvalid) {
      dispatch(wizardActions.setStep({ stepId: 'address', data: parseSubmitForm(inputs), isValid: false }));
      setFormHasBeenSubmited(true);
    } else {
      dispatch(
        wizardActions.setStep({
          stepId: 'address',
          data: parseSubmitForm(inputs),
          isValid: true,
          type: 'next',
        }),
      );
    }
  };

  useEffect(() => {
    if (addressData) {
      const updatedItems = parseReceivedForm(addressData);
      const activityConfig = addressConfig(updatedItems, updateInputs, formHasBeenSubmited);
      setInputConfig(activityConfig);
    }
  }, [addressData, fetched]);

  return (
    <>
      <GridContainer>{FormInputs(inputsConfig)}</GridContainer>
      <div className={classes.footer}>
        <div className={classes.right}>
          <Button type="submit" color="rose" onClick={handleNext}>
            Proximo
          </Button>
        </div>
        <div className={classes.clearfix} />
      </div>
    </>
  );
};

export default Address;
