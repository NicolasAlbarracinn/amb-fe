import React from 'react';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import Step1 from './AffiliatesSteps/Step1';
import Step2 from './AffiliatesSteps/Step2';
import Step3 from './AffiliatesSteps/Step3';

import WizardContainer from 'containers/WizardContainer/WizardContainer';

const AffiliatesEditor = () => {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <WizardContainer
          steps={[
            { stepName: 'Datos Personales', stepComponent: Step1, stepId: 'personalData' },
            { stepName: 'Domicilio Real', stepComponent: Step2, stepId: 'adress' },
            { stepName: 'Informacion Laboral', stepComponent: Step3, stepId: 'workInfo' },
          ]}
          title="Agregar Afiliado"
          subtitle="Complete los campos requeridos para crear un nuevo afiliado"
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

export default AffiliatesEditor;
