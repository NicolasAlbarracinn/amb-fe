import { useDispatch } from 'react-redux';
import { actions as wizardActions } from './slice';

export const useWizardStep = (stepId: string) => {
  const dispatch = useDispatch();

  const handleNext = (inputs: object) => {
    dispatch(wizardActions.setStep({ stepId, data: inputs, isValid: true, type: 'next' }));
  };

  const handlePrevious = (inputs: object) => {
    dispatch(wizardActions.setStep({ stepId, data: inputs, isValid: true, type: 'previous' }));
  };

  const handleSubmit = (inputs: object) => {
    dispatch(wizardActions.setStep({ stepId, data: inputs, isValid: true, type: 'submit' }));
  };

  return { handleNext, handlePrevious, handleSubmit };
};
