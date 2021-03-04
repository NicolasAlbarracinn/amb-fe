import React from 'react';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import StepAddress from '../components/StepAddress';
import StepEconomic from '../components/StepEconomic';
import StepFilesUpload from '../components/StepFilesUpload';
import StepLender from '../components/StepLender';

import WizardContainer from '../../wizard/WizardContainer';
import { WizardStepsConfig } from '../config';

const LenderForm = () => {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <WizardContainer
          steps={[
            { stepName: 'Datos personales', stepComponent: StepLender, stepId: WizardStepsConfig.LENDER_STEP },
            { stepName: 'Actividad econimica', stepComponent: StepEconomic, stepId: WizardStepsConfig.ECONOMIC_STEP },
            { stepName: 'Domicilio', stepComponent: StepAddress, stepId: WizardStepsConfig.ADDRESS_STEP },
            {
              stepName: 'Carga de documentacion',
              stepComponent: StepFilesUpload,
              stepId: WizardStepsConfig.FILES_STEP,
            },
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
