import React from 'react';
// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import StepPartner from '../components/StepPartner';
import { StepDistribution } from '../components/StepDistribution';
import { StepDetails } from '../components/StepDetails';

import WizardContainer from '../../wizard/WizardContainer';

import { WizardStepsConfig } from '../config';

const BenefitFormContainer = () => {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <WizardContainer
          steps={[
            { stepName: 'Datos del socio', stepComponent: StepPartner, stepId: WizardStepsConfig.PARTER_STEP },
            {
              stepName: 'Datos de reparticion',
              stepComponent: StepDistribution,
              stepId: WizardStepsConfig.DISTRIBUTION_STEP,
            },
            { stepName: 'Datos de la prestación', stepComponent: StepDetails, stepId: WizardStepsConfig.DETAILS_STEP },
          ]}
          title="Agregar prestacion"
          subtitle="Complete los campos requeridos para crear un nuevo prestacion"
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

export default BenefitFormContainer;
