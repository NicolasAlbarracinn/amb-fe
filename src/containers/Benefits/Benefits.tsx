import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import BenefitsForm from 'pages/BenefitsPage/BenefitsForm';

const Financing = () => (
  <Switch>
    <Route path="/app/financing/new" component={BenefitsForm} />
  </Switch>
);

export default Financing;
