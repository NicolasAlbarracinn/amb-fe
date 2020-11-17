import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import AffiliatesEditor from 'pages/AffiliatesPage/AffiliatesEditor';
import AffiliatesList from 'pages/AffiliatesPage/AffiliatesList';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './slice';
import { affiliatesSaga } from './saga';
import { selectAffiliatesList } from './selectors';
import { selectButtonType, selectStepsData } from 'containers/WizardContainer/selectors';

const Affiliates = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: affiliatesSaga });

  const dispatch = useDispatch();
  const affiliatesList = useSelector(selectAffiliatesList);
  const buttonType = useSelector(selectButtonType);
  const stepsData = useSelector(selectStepsData);

  useEffect(() => {
    dispatch(actions.getAffiliatedInfoRequest({}));
  }, [dispatch]);

  useEffect(() => {
    if (buttonType === 'complete') {
      console.log('mandarFrom', stepsData);
    }
  }, [buttonType, stepsData]);

  const handlerSort = (sortBy?: { field: string; value: string }) => {
    dispatch(actions.getAffiliatedInfoRequest({ sortBy }));
  };

  return (
    <Switch>
      <Route
        path="/app/affiliates/list"
        render={() => <AffiliatesList affiliates={affiliatesList} handlerSort={handlerSort} />}
        handlerSort={handlerSort}
      />
      <Route path="/app/affiliates/new" component={AffiliatesEditor} />
    </Switch>
  );
};

export default Affiliates;
