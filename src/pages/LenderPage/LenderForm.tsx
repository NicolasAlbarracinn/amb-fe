import React from 'react';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import LenderDetail from './LenderSteps/index';

import WizardContainer from 'containers/WizardContainer/WizardContainer';

const LenderForm = () => {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <WizardContainer
          steps={[{ stepName: 'Alta de cartera', stepComponent: LenderDetail, stepId: 'lenderDetail' }]}
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
