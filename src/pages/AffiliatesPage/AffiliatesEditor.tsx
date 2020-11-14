import React from 'react';

// core components
import Wizard from 'components/Wizard/Wizard';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import Step1 from './AffiliatesSteps/Step1.js';
import Step2 from './AffiliatesSteps/Step2.js';
import Step3 from './AffiliatesSteps/Step3.js';

export default function AffiliatesEditor() {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={10}>
        <Wizard
          validate
          steps={[
            { stepName: 'Datos Personales', stepComponent: Step1, stepId: 'personalData' },
            { stepName: 'Domicilio Particular', stepComponent: Step2, stepId: 'adress' },
            { stepName: 'Informacion Laboral', stepComponent: Step3, stepId: 'workInfo' },
          ]}
          title="Agregar Afiliado"
          subtitle="Complete los campos requeridos para crear un nuevo afiliado"
          finishButtonClick={e => alert(e)}
          color="rose"
          previousButtonText="Anterior"
          previousButtonClasses=""
          nextButtonClasses=""
          nextButtonText="Proximo"
          finishButtonClasses=""
          finishButtonText="Terminar"
        />
      </GridItem>
    </GridContainer>
  );
}
