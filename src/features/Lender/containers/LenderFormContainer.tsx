import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import StepAddress from '../components/StepAddress';
import StepEconomic from '../components/StepEconomic';
import StepFilesUpload from '../components/StepFilesUpload';
import StepLender from '../components/StepLender';

import WizardContainer from '../../wizard/WizardContainer';
import { WizardStepsConfig } from '../config';
import { selectStepsData, selectSubmitReady } from 'features/wizard/selectors';
import { selectIsSuccessfullyCreated } from '../store/selectors';
import { actions } from '../store/slice';

const LenderForm = () => {
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
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <WizardContainer
          steps={[
            { stepName: 'Datos personales', stepComponent: StepLender, stepId: WizardStepsConfig.LENDER_STEP },
            { stepName: 'Actividad econimica', stepComponent: StepEconomic, stepId: WizardStepsConfig.ECONOMIC_STEP },
            { stepName: 'Domicilio', stepComponent: StepAddress, stepId: WizardStepsConfig.ADDRESS_STEP },
            {
              stepName: 'Carga de documentacion',
              stepComponent: StepFilesUpload,
              stepId: WizardStepsConfig.FILES_STEP,
            },
          ]}
          title="Agregar fondista"
          subtitle="Complete los campos requeridos para agregar un nuevo fondista"
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

export default LenderForm;
