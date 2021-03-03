import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import StepPersonalData from '../components/StepPersonalData';
import StepAddress from '../components/StepAddress';
import StepWorkInfo from '../components/StepWorkInfo';

import WizardContainer from '../../wizard/WizardContainer';
import { selectStepsData, selectSubmitReady } from '../../wizard/selectors';

import { actions } from '../store/slice';
import { selectNewPartnerId } from '../store/selectors';

import { WizardStepsConfig } from '../config';

const PartnerFormContainer = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const submitReady = useSelector(selectSubmitReady);
  const data = useSelector(selectStepsData);
  const newPartnerId = useSelector(selectNewPartnerId);

  useEffect(() => {
    if (submitReady) {
      console.log(data);
      dispatch(actions.getSavePartnerRequest(data));
    }
  }, [data, dispatch, history, submitReady]);

  useEffect(() => {
    if (newPartnerId !== '') {
      history.push('list');
    }
  }, [history, newPartnerId]);

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <WizardContainer
          steps={[
            {
              stepName: 'Datos Personales',
              stepComponent: StepPersonalData,
              stepId: WizardStepsConfig.PERSONAL_DATA_STEP,
            },
            { stepName: 'Domicilio Real', stepComponent: StepAddress, stepId: WizardStepsConfig.ADDRESS_STEP },
            { stepName: 'Informacion Laboral', stepComponent: StepWorkInfo, stepId: WizardStepsConfig.WORK_STEP },
          ]}
          title="Agregar Socio"
          subtitle="Complete los campos requeridos para crear un nuevo socio"
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

export default PartnerFormContainer;
