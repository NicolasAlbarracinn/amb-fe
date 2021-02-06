import React, { useCallback, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import LenderForm from 'pages/LenderPage';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './slice';
import { lenderSaga } from './saga';
import { selectIsSuccessfullyCreated } from './selectors';

import { selectSubmitReady, selectStepsData } from 'containers/WizardContainer/selectors';

const Portfolios = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: lenderSaga });

  const history = useHistory();
  const dispatch = useDispatch();
  const submitReady = useSelector(selectSubmitReady);
  const data = useSelector(selectStepsData);
  const isSuccessfullyCreated = useSelector(selectIsSuccessfullyCreated);

  useEffect(() => {
    if (!isEmpty(data) && submitReady) {
      dispatch(
        actions.setLenderRequest({
          ...data.lenderDetails,
          economicActivity: data.economicActivity,
          address: data.address,
          files: data.ledersFileUpdates,
        }),
      );
    }
  }, [submitReady, data, dispatch]);

  useEffect(() => {
    if (isSuccessfullyCreated) {
      history.push('/');
    }
  }, [isSuccessfullyCreated, history]);

  return (
    <Switch>
      <Route path="/app/lender/new" component={LenderForm} />
    </Switch>
  );
};

export default Portfolios;
