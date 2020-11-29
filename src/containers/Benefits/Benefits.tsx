import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import BenefitsForm from 'pages/BenefitsPage/BenefitsForm';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './slice';
import { benefitsSaga } from './saga';
import { selectFetchedBenefitId } from './selectors';

import { selectSubmitReady, selectStepsData } from 'containers/WizardContainer/selectors';

const Benefits = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: benefitsSaga });

  const history = useHistory();

  const dispatch = useDispatch();
  const submitReady = useSelector(selectSubmitReady);
  const data = useSelector(selectStepsData);
  const benefitId = useSelector(selectFetchedBenefitId);

  useEffect(() => {
    if (benefitId) {
      history.push('dashboard');
      return;
    }

    if (submitReady) {
      dispatch(actions.setBenefitRequest(data.benefitDetail));
    }
  }, [data, dispatch, history, submitReady, benefitId]);

  return (
    <Switch>
      <Route path="/app/benefits/new" component={BenefitsForm} />
    </Switch>
  );
};

export default Benefits;
