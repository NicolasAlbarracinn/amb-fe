import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import WizardContainer from '../../wizard/WizardContainer';

import StepAsests from '../components/StepAsests';
import StepBank from '../components/StepBank';
import StepInfoShare from '../components/StepInfoShare';
import StepPorfolio from '../components/StepPorfolio';

import { WizardStepsConfig } from '../config';

const PortfolioFormContainer = () => {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <WizardContainer
          steps={[
            { stepName: 'Alta de cartera', stepComponent: StepPorfolio, stepId: WizardStepsConfig.PORTFOLIO_DETAILS },
            {
              stepName: 'Liquidacion de haberes',
              stepComponent: StepAsests,
              stepId: WizardStepsConfig.ASSETS_LIQUIDATION,
            },
            { stepName: 'Liquidacion Bancaria', stepComponent: StepBank, stepId: WizardStepsConfig.BANK_LIQUIDATION },
            { stepName: 'Carga de cuotas', stepComponent: StepInfoShare, stepId: WizardStepsConfig.SHARE_INFO },
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

export default PortfolioFormContainer;
