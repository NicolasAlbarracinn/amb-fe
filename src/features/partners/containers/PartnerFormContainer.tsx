import React from 'react';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import StepPersonalData from '../components/StepPersonalData';
import StepAddress from '../components/StepAddress';
import StepWorkInfo from '../components/StepWorkInfo';

import WizardContainer from '../../wizard/WizardContainer';

import { WizardStepsConfig } from '../config';

const PartnerFormContainer = () => {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <WizardContainer
          steps={[
            {
              stepName: 'Datos Personales',
              stepComponent: StepPersonalData,
              stepId: WizardStepsConfig.PERSONAL_DATA_STEP,
            },
            { stepName: 'Domicilio Real', stepComponent: StepAddress, stepId: WizardStepsConfig.ADDRESS_STEP },
            { stepName: 'Informacion Laboral', stepComponent: StepWorkInfo, stepId: WizardStepsConfig.WORK_STEP },
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

export default PartnerFormContainer;
