import React from 'react';

useEffect(() => {
    isValidated
}, [input])

const WizardContainer = (stepData) => {
  return <WizardComponet stepData={stepData} />;
};

export default WizardContainer;
