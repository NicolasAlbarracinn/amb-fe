import React, { memo, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';

import { selectButtonType, selectCurrentStepId, selectStepsData } from './selectors';

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
    const currentStepId = useSelector(selectCurrentStepId);
    const buttonType = useSelector(selectButtonType);

    useEffect(() => {
      if (stepsData[currentStepId]?.isValid) {
        if (buttonType === 'next') {
          setCurrentStep(prevState => prevState + 1);
        }
        if (buttonType === 'previous') {
          setCurrentStep(prevState => prevState - 1);
        }
      }
    }, [buttonType, currentStepId, steps, stepsData]);

    const navigationStepChange = key => {
      setCurrentStep(key);
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
