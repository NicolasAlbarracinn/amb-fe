import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from 'utils/@reduxjs/toolkit';
import { IBenefitsState } from './pageState';

export const initialState: IBenefitsState = {
  loading: true,
  benefitData: {},
  isBenefitDataFetched: false,
  benefitId: null,
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
  },
});

export const { actions, reducer, name: sliceKey } = BenefitSlice;
