import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from 'utils/@reduxjs/toolkit';

// The initial state of the GithubRepoForm container
export const initialState: any = {
  stepsData: {},
  validatingStepId: '',
  currentStepId: '',
  buttonType: '',
  submitReady: false,
  stepsIds: [],
};

const WizardContainerSlice = createSlice({
  name: 'wizard',
  initialState,
  reducers: {
    reset(state) {
      state.stepsValidation = initialState.stepsValidation;
      state.currentStepId = initialState.currentStepId;
      state.previousStepId = initialState.previousStepId;
      state.buttonType = initialState.buttonType;
    },
    setStep(state, action: PayloadAction<any>) {
      state.stepsData = {
        ...state.stepsData,
        [action.payload.stepId]: { ...action.payload.data, isValid: action.payload.isValid },
      };
      state.validatingStepId = action.payload.stepId;
      if (action.payload.type === 'submit') {
        state.submitReady = true;
        state.buttonType = action.payload.type;
      } else {
        state.submitReady = false;
        state.buttonType = action.payload.type;
      }
    },
    setCurrentStepId(state, action: PayloadAction<any>) {
      state.currentStepId = action.payload;
    },
    setStepsIds(state, action: PayloadAction<any>) {
      state.stepsIds = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = WizardContainerSlice;
