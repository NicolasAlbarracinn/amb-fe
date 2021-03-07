import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';
// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import StepPartner from '../components/StepPartner';
import StepDistribution from '../components/StepDistribution';
import StepDetails from '../components/StepDetails';
import StepPDFCreator from '../components/StepPDFCreator';

import WizardContainer from '../../wizard/WizardContainer';

import { WizardStepsConfig } from '../config';
import { selectStepsData, selectSubmitReady } from 'features/wizard/selectors';
import { selectFetchedBenefitId, selectIsBenefitCreated } from '../store/selectors';
import { actions } from '../store/slice';

const BenefitFormContainer = () => {
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
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <WizardContainer
          steps={[
            { stepName: 'Datos del socio', stepComponent: StepPartner, stepId: WizardStepsConfig.PARTER_STEP },
            {
              stepName: 'Datos de reparticion',
              stepComponent: StepDistribution,
              stepId: WizardStepsConfig.DISTRIBUTION_STEP,
            },
            { stepName: 'Datos de la prestación', stepComponent: StepDetails, stepId: WizardStepsConfig.DETAILS_STEP },
            { stepName: 'Documentacion', stepComponent: StepPDFCreator, stepId: WizardStepsConfig.DOCUMENTATION_STEP },
          ]}
          title="Agregar prestacion"
          subtitle="Complete los campos requeridos para crear un nuevo prestacion"
          color="rose"
          previousButtonText="Anterior"
          previousButtonClasses={{ color: 'rose' }}
          nextButtonText="Proximo"
          finishButtonClasses=""
          finishButtonText="Terminar"
        />
      </GridItem>
    </GridContainer>
  );
};

export default BenefitFormContainer;
