import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GridContainer from 'components/Grid/GridContainer';
import Button from 'components/CustomButtons/Button';

import { useInputChange } from 'containers/WizardContainer/hooks';

import { useStyles } from 'components/Wizard/stepsStyles';

import { actions as wizardActions } from 'containers/WizardContainer/slice';

import { parseReceivedForm, parseSubmitForm } from 'utils/parseForm';

import FormInputs from 'components/Form/Inputs';
import { economicActivityConfig } from './lenderConfig';
import { economicActivityState } from './lenderDefaultValues';

import { selectLenderData, selectIsDataBeenFetched } from 'containers/Lender/selectors';

const EconomicActivity = () => {
  const classes = useStyles();
  const [formHasBeenSubmited, setFormHasBeenSubmited] = useState(false);
  const { inputs, updateInputs } = useInputChange(economicActivityState);
  const config = economicActivityConfig(economicActivityState, updateInputs, formHasBeenSubmited);
  const [inputsConfig, setInputConfig] = useState(config);

  //TODO: move this to the wizard custom hook
  const dispatch = useDispatch();
  const { economicActivity } = useSelector(selectLenderData);
  const fetched = useSelector(selectIsDataBeenFetched);

  const handleNext = () => {
    const isFormInvalid = Object.entries(inputs).some(key => key[1].isValid === false);
    if (isFormInvalid) {
      dispatch(wizardActions.setStep({ stepId: 'economicActivity', data: parseSubmitForm(inputs), isValid: true }));
      setFormHasBeenSubmited(true);
    } else {
      dispatch(
        wizardActions.setStep({
          stepId: 'economicActivity',
          data: parseSubmitForm(inputs),
          isValid: true,
          type: 'next',
        }),
      );
    }
  };

  useEffect(() => {
    if (economicActivity) {
      const updatedItems = parseReceivedForm(economicActivity);
      const activityConfig = economicActivityConfig(updatedItems, updateInputs, formHasBeenSubmited);
      setInputConfig(activityConfig);
    }
  }, [economicActivity, fetched]);

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

export default EconomicActivity;
