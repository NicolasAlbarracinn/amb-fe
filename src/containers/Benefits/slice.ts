import { PayloadAction } from '@reduxjs/toolkit';

import { IPlan } from './types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { IBenefitsState } from './pageState';
import { IPartnerDetail } from '../Partners/types';

export const initialState: IBenefitsState = {
  loading: true,
  partnerInfo: null,
  benefitData: null,
  isBenefitDataFetched: false,
  benefitId: null,
  plans: [],
  plan: null,
};

const BenefitSlice = createSlice({
  name: 'benefits',
  initialState,
  reducers: {
    getPartnerInformationRequest(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    getPartnerInformationSuccess(state, action: PayloadAction<IPartnerDetail>) {
      state.loading = false;
      state.partnerInfo = action.payload;
      state.isBenefitDataFetched = true;
    },
    getPartnerInformationFailed(state) {
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
      state.plan = null;
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
