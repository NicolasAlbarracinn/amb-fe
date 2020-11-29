import React, { memo, useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer } from 'utils/redux-injectors';
import { actions, reducer, sliceKey } from './slice';

import { selectButtonType, selectValidatingStepId, selectStepsData, selectStepsIds } from './selectors';

import Wizard from 'components/Wizard/Wizard';

const WizardContainer = memo(
  ({
    steps,
    color,
    title,
    subtitle,
    previousButtonClasses,
    previousButtonText,
    nextButtonClasses,
    nextButtonText,
    finishButtonClasses,
    finishButtonText,
  }: any) => {
    useInjectReducer({ key: sliceKey, reducer: reducer });
    const [currentStep, setCurrentStep] = useState(0);

    const stepsData = useSelector(selectStepsData);
    const validatingStepId = useSelector(selectValidatingStepId);
    const buttonType = useSelector(selectButtonType);
    const stepsIds = useSelector(selectStepsIds);

    const dispatch = useDispatch();

    useEffect(() => {
      if (stepsData[validatingStepId]?.isValid) {
        if (buttonType === 'next') {
          setCurrentStep(prevState => prevState + 1);
        }
        if (buttonType === 'previous') {
          setCurrentStep(prevState => prevState - 1);
        }
      }
    }, [buttonType, steps, stepsData, validatingStepId]);

    useEffect(() => {
      dispatch(actions.setCurrentStepId(stepsIds[currentStep]));
    }, [currentStep, dispatch, stepsIds]);

    const navigationStepChange = key => {
      if (stepsData[validatingStepId]?.isValid) {
        setCurrentStep(key);
        return true;
      }
    };

    return (
      <Wizard
        steps={steps}
        title={title}
        subtitle={subtitle}
        finishButtonClick={e => alert(e)}
        color={color}
        navigationStepChange={navigationStepChange}
        previousButtonText={previousButtonText}
        previousButtonClasses={previousButtonClasses}
        nextButtonText={nextButtonText}
        nextButtonClasses={nextButtonClasses}
        finishButtonClasses={finishButtonClasses}
        finishButtonText={finishButtonText}
        currentStep={currentStep}
      />
    );
  },
);

export default WizardContainer;
