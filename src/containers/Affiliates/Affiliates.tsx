import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import AffiliatesEditor from 'pages/AffiliatesPage/AffiliatesEditor';
import AffiliatesList from 'pages/AffiliatesPage/AffiliatesList';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './slice';
import { affiliatesSaga } from './saga';
import { selectAffiliatesList } from './selectors';

const Affiliates = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: affiliatesSaga });

  const dispatch = useDispatch();
  const affiliatesList = useSelector(selectAffiliatesList);

  useEffect(() => {
    dispatch(actions.getAffiliatedInfoRequest({}));
  }, [dispatch]);

  return (
    <Switch>
      <Route path="/app/affiliates/list" render={() => <AffiliatesList affiliates={affiliatesList} />} />
      <Route path="/app/affiliates/new" component={AffiliatesEditor} />
    </Switch>
  );
};

export default Affiliates;
