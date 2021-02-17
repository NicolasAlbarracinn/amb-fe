import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { actions as benefitActions } from 'containers/Benefits/slice';
import { actions as wizardActions } from 'containers/WizardContainer/slice';
import { actions as portfolioActions } from 'containers/Portfolio/slice';
import { actions as lenderActions } from 'containers/Lender/slice';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(benefitActions.reset());
    dispatch(wizardActions.reset());
    dispatch(portfolioActions.reset());
    dispatch(lenderActions.reset());
  }, [dispatch]);

  return <div>Dashboard</div>;
};

export default Dashboard;
