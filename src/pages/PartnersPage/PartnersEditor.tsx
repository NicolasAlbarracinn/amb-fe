import React from 'react';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import PersonalData from './PartnersSteps/PersonalData';
import Adress from './PartnersSteps/Adress';
import WorkInfo from './PartnersSteps/WorkInfo';

import WizardContainer from 'containers/WizardContainer/WizardContainer';

const PartnersEditor = () => {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <WizardContainer
          steps={[
            { stepName: 'Datos Personales', stepComponent: PersonalData, stepId: 'personalData' },
            { stepName: 'Domicilio Real', stepComponent: Adress, stepId: 'adress' },
            { stepName: 'Informacion Laboral', stepComponent: WorkInfo, stepId: 'workInfo' },
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
