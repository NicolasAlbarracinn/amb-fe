import React from 'react';

// core components
import Wizard from 'components/Wizard/Wizard';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import Step1 from './Step1';
import Step2 from './Step2';

const initialForm = {
  email: 'jp92lorek@gmail.com',
  firstName: 'jp',
  lastName: 'lorek',
};

export default function WizardView() {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <Wizard
          validate
          steps={[
            {
              stepName: 'About',
              stepComponent: Step2,
              stepId: 'about',
            },
            { stepName: 'Account', stepComponent: Step2, stepId: 'address' },
          ]}
          title="Build Your Profile"
          subtitle="This information will let us know more about you."
          finishButtonClick={e => alert(e)}
        />
      </GridItem>
    </GridContainer>
  );
}
