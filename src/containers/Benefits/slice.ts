import { PayloadAction } from '@reduxjs/toolkit';

import { IPlan } from './pageState';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { IBenefitsState } from './pageState';

export const initialState: IBenefitsState = {
  loading: true,
  benefitData: {},
  isBenefitDataFetched: false,
  benefitId: null,
  plans: [],
  plan: null,
};

const BenefitSlice = createSlice({
  name: 'benefits',
  initialState,
  reducers: {
    getUpdateBenefitRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    getUpdateBenefitSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.benefitData = action.payload;
      state.isBenefitDataFetched = true;
    },
    getUpdateBenefitFailed(state) {
      state.loading = false;
    },
    setBenefitRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    setBenefitData(state, action: PayloadAction<any>) {
      state.loading = false;
      state.benefitId = action.payload;
    },
    setBenefitFailed(state) {
      state.loading = false;
    },
    getPlanListRequest(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    getPlanListSuccess(state, action: PayloadAction<IPlan[]>) {
      state.loading = false;
      state.plans = action.payload;
    },
    getPlanListFailed(state) {
      state.loading = false;
    },
    getPlanRequest(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    getPlanSuccess(state, action: PayloadAction<IPlan>) {
      state.loading = false;
      state.plan = action.payload;
    },
    getPlanFailed(state) {
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = BenefitSlice;
