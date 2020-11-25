import React from 'react';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import PartnerDetail from './BenefitsSteps/PartnerDetail';
import DistributionDetail from './BenefitsSteps/DistributionDetail';
import BenefitDetail from './BenefitsSteps/BenefitDetail';

import WizardContainer from 'containers/WizardContainer/WizardContainer';

const BenefitsForm = () => {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <WizardContainer
          steps={[
            { stepName: 'Datos del socio', stepComponent: PartnerDetail, stepId: 'partnerDetail' },
            { stepName: 'Datos de reparticion', stepComponent: DistributionDetail, stepId: 'distributionDetail' },
            { stepName: 'Datos de la prestación', stepComponent: BenefitDetail, stepId: 'benefitDetail' },
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

export default BenefitsForm;
