import React from 'react';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import Step1 from './PartnersSteps/Step1';
import Step2 from './PartnersSteps/Step2';
import Step3 from './PartnersSteps/Step3';

import WizardContainer from 'containers/WizardContainer/WizardContainer';

const PartnersEditor = () => {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <WizardContainer
          steps={[
            { stepName: 'Datos Personales', stepComponent: Step1, stepId: 'personalData' },
            { stepName: 'Domicilio Real', stepComponent: Step2, stepId: 'adress' },
            { stepName: 'Informacion Laboral', stepComponent: Step3, stepId: 'workInfo' },
          ]}
          title="Agregar Socio"
          subtitle="Complete los campos requeridos para crear un nuevo socio"
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

export default PartnersEditor;
