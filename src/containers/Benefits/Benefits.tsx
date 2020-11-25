import React from 'react';
import { Route, Switch } from 'react-router';

import BenefitsForm from 'pages/BenefitsPage/BenefitsForm';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer } from './slice';
import { benefitsSaga } from './saga';

const Benefits = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: benefitsSaga });

  return (
    <Switch>
      <Route path="/app/benefits/new" component={BenefitsForm} />
    </Switch>
  );
};

export default Benefits;
