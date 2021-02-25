import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';

import BenefitsForm from 'pages/BenefitsPage/BenefitsForm';
import BenefitList from 'pages/BenefitsPage/BenefitList';
import BenefitPreRequestForm from 'pages/BenefitsPage/BenefitPreRequestForm';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './slice';
import { benefitsSaga } from './saga';
import { selectIsBenefitCreated, selectFetchedBenefitId } from './selectors';

import { selectSubmitReady, selectStepsData } from 'containers/WizardContainer/selectors';

const Benefits = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: benefitsSaga });

  const history = useHistory();

  const dispatch = useDispatch();
  const submitReady = useSelector(selectSubmitReady);
  const data = useSelector(selectStepsData);
  const isBenefitCreated = useSelector(selectIsBenefitCreated);
  const benefitId = useSelector(selectFetchedBenefitId);

  useEffect(() => {
    if (submitReady && !isEmpty(data) && !isBenefitCreated) {
      if (benefitId) {
        dispatch(
          actions.updateBenefitRequest({
            id: benefitId,
            updatedInfo: {
              ...data.benefitDetail,
              partnerObjectId: data.partnerDetail.partnerObjectId,
            },
          }),
        );

        return;
      }

      dispatch(
        actions.setBenefitRequest({
          ...data.benefitDetail,
          partnerObjectId: data.partnerDetail.partnerObjectId,
          paymentMethod: data.distributionDetail.paymentMethod,
          paymentMethodRecovery: data.distributionDetail.paymentMethodRecovery,
        }),
      );
    }
  }, [data, dispatch, submitReady, benefitId, isBenefitCreated]);

  useEffect(() => {
    if (isBenefitCreated) history.push(`/app/benefits/preRequest/${benefitId}`);
  }, [isBenefitCreated, history, benefitId]);

  return (
    <Switch>
      <Route path="/app/benefits/list" component={BenefitList} />
      <Route path="/app/benefits/new" component={BenefitsForm} />
      <Route path="/app/benefits/preRequest/:benefitId" component={BenefitPreRequestForm} />
      <Route path="/app/benefits/:benefitId" component={BenefitsForm} />
    </Switch>
  );
};

export default Benefits;
