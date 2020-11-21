import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';
import { initialState } from './slice';

const selectWizardContainer = (state: RootState) => state.wizardContainer || initialState;
export const selectStepsData = createSelector(
  [selectWizardContainer],
  wizardContainerState => wizardContainerState.stepsData,
);
export const selectCurrentStepId = createSelector(
  [selectWizardContainer],
  wizardContainerState => wizardContainerState.currentStepId,
);
export const selectButtonType = createSelector(
  [selectWizardContainer],
  wizardContainerState => wizardContainerState.buttonType,
);

export const selectSubmitReady = createSelector(
  [selectWizardContainer],
  wizardContainerState => wizardContainerState.submitReady,
);
