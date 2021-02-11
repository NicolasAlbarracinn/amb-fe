import { PayloadAction } from '@reduxjs/toolkit';

import { IplanList } from '../Portfolio/types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { IBenefitsState } from './pageState';

export const initialState: IBenefitsState = {
  loading: true,
  benefitData: {},
  isBenefitDataFetched: false,
  benefitId: null,
  plan: [],
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
    getPlanListSuccess(state, action: PayloadAction<IplanList[]>) {
      state.loading = false;
      state.plan = action.payload;
    },
    getPlanListFailed(state) {
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = BenefitSlice;
