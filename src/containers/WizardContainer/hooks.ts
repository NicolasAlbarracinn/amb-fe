import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions as wizardActions } from 'containers/WizardContainer/slice';

import { parseSubmitForm } from 'utils/parseForm';

export const useWizardStep = (inputs: object, stepId: string) => {
  const [loadError, setLoadError] = useState(false);
  const dispatch = useDispatch();

  const handleNext = () => {
    const isFormInvalid = Object.entries(inputs).some(key => key[1].isValid === false);
    if (isFormInvalid) {
      dispatch(wizardActions.setStep({ stepId, data: parseSubmitForm(inputs), isValid: false }));
      setLoadError(true);
    } else {
      dispatch(wizardActions.setStep({ stepId, data: parseSubmitForm(inputs), isValid: true, type: 'next' }));
    }
  };

  const handlePrevious = () => {
    dispatch(wizardActions.setStep({ stepId, data: parseSubmitForm(inputs), isValid: true, type: 'previous' }));
  };

  const handleSubmit = () => {
    const isFormInvalid = Object.entries(inputs).some(key => key[1].isValid === false);
    if (!isFormInvalid) {
      dispatch(wizardActions.setStep({ stepId, data: parseSubmitForm(inputs), isValid: true, type: 'submit' }));
    }
  };

  return { loadError, handleNext, handlePrevious, handleSubmit };
};

export interface DefaultState {
  value: string;
  isValid: boolean;
}

export const useInputChange = (defaultState: { [key: string]: DefaultState }) => {
  const [inputs, setInputs] = useState(defaultState);

  const onChangeHanlder = useCallback(({ id, value, isValid }) => {
    setInputs(prevState => ({
      ...prevState,
      [id]: {
        value: value,
        isValid,
      },
    }));
  }, []);

  const updateInputs = useCallback((updatedValues: { [key: string]: DefaultState }) => {
    setInputs(prevState => ({ ...prevState, ...updatedValues }));
  }, []);

  return {
    inputs,
    onChangeHanlder,
    updateInputs,
  };
};
