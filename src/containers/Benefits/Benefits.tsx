import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import BenefitsForm from 'pages/BenefitsPage/BenefitsForm';

const Benefits = () => (
  <Switch>
    <Route path="/app/benefits/new" component={BenefitsForm} />
  </Switch>
);

export default Benefits;
