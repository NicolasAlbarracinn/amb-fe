import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions as wizardActions } from './slice';

export const useWizardStep = (inputs: object, stepId: string) => {
  const [loadError, setLoadError] = useState(false);
  const dispatch = useDispatch();

  const handleNext = () => {
    const isFormInvalid = Object.entries(inputs).some(key => key[1].isValid === false);
    if (isFormInvalid) {
      dispatch(wizardActions.setStep({ stepId, data: inputs, isValid: false }));
      setLoadError(true);
    } else {
      dispatch(wizardActions.setStep({ stepId, data: inputs, isValid: true, type: 'next' }));
    }
  };

  const handlePrevious = () => {
    dispatch(wizardActions.setStep({ stepId, data: inputs, isValid: true, type: 'previous' }));
  };

  const handleSubmit = () => {
    const isFormInvalid = Object.entries(inputs).some(key => key[1].isValid === false);
    if (!isFormInvalid) {
      dispatch(wizardActions.setStep({ stepId, data: inputs, isValid: true, type: 'submit' }));
    }
  };

  return { loadError, handleNext, handlePrevious, handleSubmit };
};
