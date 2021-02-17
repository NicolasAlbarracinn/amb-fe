import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from 'utils/@reduxjs/toolkit';
import { ILenderState } from './pageState';
import { ILender } from './types';

export const initialState: ILenderState = {
  loading: false,
  lenderData: {} as ILender,
  isLenderDataFetched: false,
  isSuccessfullyCreated: false,
};

const LenderSlice = createSlice({
  name: 'lenders',
  initialState,
  reducers: {
    reset(state) {
      state.loading = initialState.loading;
      state.lenderData = initialState.lenderData;
      state.isLenderDataFetched = initialState.isLenderDataFetched;
      state.isSuccessfullyCreated = initialState.isSuccessfullyCreated;
    },
    getLenderRequest(state, action: PayloadAction<string>) {
      state.loading = true;
      state.isLenderDataFetched = false;
    },
    getLenderSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.isLenderDataFetched = true;
      state.lenderData = action.payload;
    },
    getLenderFailed(state) {
      state.loading = false;
    },
    setLenderRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    setLenderSuccess(state) {
      state.loading = false;
    },
    setLenderFalied(state) {
      state.loading = true;
    },
    setLenderSuccessfullyCreated(state) {
      state.isSuccessfullyCreated = true;
    },
  },
});

export const { actions, reducer, name: sliceKey } = LenderSlice;
