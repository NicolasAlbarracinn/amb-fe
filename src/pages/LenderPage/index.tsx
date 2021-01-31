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
            { stepName: 'Datos personales', stepComponent: LenderDetails, stepId: 'lenderDetails' },
            { stepName: 'Actividad econimica', stepComponent: EconomicActivity, stepId: 'economicActivity' },
            { stepName: 'Domicilio', stepComponent: Address, stepId: 'address' },
          ]}
          title="Agregar fondista"
          subtitle="Complete los campos requeridos para agregar un nuevo fondista"
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
