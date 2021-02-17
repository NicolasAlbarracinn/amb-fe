import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';

import BenefitsForm from 'pages/BenefitsPage/BenefitsForm';
import BenefitList from 'pages/BenefitsPage/BenefitList';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './slice';
import { benefitsSaga } from './saga';
import { selectIsBenefitCreated } from './selectors';

import { selectSubmitReady, selectStepsData } from 'containers/WizardContainer/selectors';
import { isEmptyBindingElement } from 'typescript';

const Benefits = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: benefitsSaga });

  const history = useHistory();

  const dispatch = useDispatch();
  const submitReady = useSelector(selectSubmitReady);
  const data = useSelector(selectStepsData);
  const isBenefitCreated = useSelector(selectIsBenefitCreated);

  useEffect(() => {
    dispatch(actions.reset());
  }, []);

  useEffect(() => {
    if (submitReady && !isEmpty(data)) {
      dispatch(
        actions.setBenefitRequest({
          ...data.benefitDetail,
          distributionDetail: data.distributionDetail,
          partnerDetail: data.partnerDetail,
        }),
      );
    }
  }, [data, dispatch, submitReady]);

  useEffect(() => {
    if (isBenefitCreated) history.push('/');
  }, [isBenefitCreated, history]);

  return (
    <Switch>
      <Route path="/app/benefits/new" component={BenefitsForm} />
      <Route path="/app/benefits/list" component={BenefitList} />
    </Switch>
  );
};

export default Benefits;
