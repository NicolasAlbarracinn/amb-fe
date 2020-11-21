import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import PartnersEditor from 'pages/PartnersPage/PartnersEditor';
import PartnersList from 'pages/PartnersPage/PartnersList';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './slice';
import { partnersSaga } from './saga';

import { selectSubmitReady, selectStepsData } from 'containers/WizardContainer/selectors';

const Partners = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: partnersSaga });

  const dispatch = useDispatch();
  const submitReady = useSelector(selectSubmitReady);
  const data = useSelector(selectStepsData);

  useEffect(() => {
    if (submitReady) {
      dispatch(actions.getSavePartnerRequest(data));
    }
  }, [data, dispatch, submitReady]);
  return (
    <Switch>
      <Route path="/app/partners/list" component={PartnersList} />
      <Route path="/app/partners/new" component={PartnersEditor} />
    </Switch>
  );
};

export default Partners;
