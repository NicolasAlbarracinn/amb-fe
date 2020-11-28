import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PartnersEditor from 'pages/PartnersPage/PartnersEditor';
import PartnersList from 'pages/PartnersPage/PartnersList';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './slice';
import { partnersSaga } from './saga';
import { selectNewPartnerId } from './selectors';

import { selectSubmitReady, selectStepsData } from 'containers/WizardContainer/selectors';

const Partners = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: partnersSaga });

  const history = useHistory();

  const dispatch = useDispatch();
  const submitReady = useSelector(selectSubmitReady);
  const data = useSelector(selectStepsData);
  const newPartnerId = useSelector(selectNewPartnerId);

  useEffect(() => {
    return () => {
      dispatch(actions.reset());
    };
  });
  useEffect(() => {
    if (submitReady) {
      dispatch(actions.getSavePartnerRequest(data));
    }
  }, [data, dispatch, submitReady]);

  useEffect(() => {
    if (newPartnerId !== '') {
      history.push('list');
    }
  }, [history, newPartnerId]);
  return (
    <Switch>
      <Route path="/app/partners/list" component={PartnersList} />
      <Route path="/app/partners/new" component={PartnersEditor} />
    </Switch>
  );
};

export default Partners;
