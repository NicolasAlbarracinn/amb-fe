import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GridContainer from 'components/Grid/GridContainer';
import Button from 'components/CustomButtons/Button';

import { DefaultState, useInputChange, useWizardStep } from 'containers/WizardContainer/hooks';

import { useStyles } from 'components/Wizard/stepsStyles';

import { actions as wizardActions } from 'containers/WizardContainer/slice';

import { parseSubmitForm } from 'utils/parseForm';

import FormInputs from 'components/Form/Inputs';
import { LenderFormInputsConfig } from '../lenderFormConfig';

const LenderDetail = () => {
  const classes = useStyles();
  const { inputs, onChangeHanlder, updateInputs } = useInputChange({
    testValue: { isValid: false, value: '' },
    email: { isValid: false, value: '' },
  });

  //TODO: move this to the wizard custom hook
  const dispatch = useDispatch();
  const [formHasBeenSubmited, setFormHasBeenSubmited] = useState(false);

  const handleNext = () => {
    const isFormInvalid = Object.entries(inputs).some(key => key[1].isValid === false);
    if (isFormInvalid) {
      dispatch(wizardActions.setStep({ stepId: 'lenderDetail', data: parseSubmitForm(inputs), isValid: false }));
      setFormHasBeenSubmited(true);
    } else {
      dispatch(
        wizardActions.setStep({ stepId: 'lenderDetail', data: parseSubmitForm(inputs), isValid: true, type: 'next' }),
      );
    }
  };

  const config = LenderFormInputsConfig(inputs, updateInputs, formHasBeenSubmited);

  return (
    <>
      <GridContainer>{FormInputs(config)}</GridContainer>
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

export default LenderDetail;
