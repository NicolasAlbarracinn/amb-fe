import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from 'utils/@reduxjs/toolkit';

// The initial state of the GithubRepoForm container
export const initialState: any = {
  stepsData: {},
  currentStepId: '',
  buttonType: '',
};

const WizardContainerSlice = createSlice({
  name: 'wizardContainer',
  initialState,
  reducers: {
    reset(state) {
      state.stepsValidation = initialState.stepsValidation;
      state.currentStepId = initialState.currentStepId;
      state.buttonType = initialState.buttonType;
    },
    setStep(state, action: PayloadAction<any>) {
      state.stepsData = {
        ...state.stepsData,
        [action.payload.stepId]: {
          ...[action.payload.stepId],
          data: action.payload.data,
          isValid: action.payload.isValid,
        },
      };
      state.buttonType = action.payload.type;
      state.currentStepId = action.payload.stepId;
    },
  },
});

export const { actions, reducer, name: sliceKey } = WizardContainerSlice;
