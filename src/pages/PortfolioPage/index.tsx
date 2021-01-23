import React from 'react';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import PortfolioDetails from './formSteps/PorfolioDetails';
import AssetsLiquidation from './formSteps/AssetsLiquidation';
import BankLiquidation from './formSteps/BankLiquidation';

import WizardContainer from 'containers/WizardContainer/WizardContainer';

const PortfolioForm = () => {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <WizardContainer
          steps={[
            { stepName: 'Alta de cartera', stepComponent: PortfolioDetails, stepId: 'portfolioDetails' },
            { stepName: 'Lidacion de haberes', stepComponent: AssetsLiquidation, stepId: 'assetsLiquidation' },
            { stepName: 'Lidacion bancaria', stepComponent: BankLiquidation, stepId: 'bankLiquidation' },
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

export default PortfolioForm;
