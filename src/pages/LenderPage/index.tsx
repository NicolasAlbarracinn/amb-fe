import React from 'react';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import LenderDetails from './LenderSteps/LenderDetails';
import EconomicActivity from './LenderSteps/EconomicActivity';
import Address from './LenderSteps/Address';

import WizardContainer from 'containers/WizardContainer/WizardContainer';

const LenderForm = () => {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <WizardContainer
          steps={[
            { stepName: 'Alta de cartera', stepComponent: LenderDetails, stepId: 'lenderDetails' },
            { stepName: 'Lidacion de haberes', stepComponent: EconomicActivity, stepId: 'economicActivity' },
            { stepName: 'Lidacion bancaria', stepComponent: Address, stepId: 'address' },
          ]}
          title="Agregar nueva cartera"
          subtitle="Complete los campos requeridos para crear una nueva cartera"
          color="rose"
          previousButtonText="Anterior"
          previousButtonClasses={{ color: 'rose' }}
          nextButtonText="Proximo"
          finishButtonClasses=""
          finishButtonText="Terminar"
        />
      </GridItem>
    </GridContainer>
  );
};

export default LenderForm;
