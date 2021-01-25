import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from 'utils/@reduxjs/toolkit';
import { ILenderState } from './pageState';
import { ILender } from './types';

export const initialState: ILenderState = {
  loading: false,
  lenderData: {} as ILender,
  isLenderDataFetched: false,
};

const LenderSlice = createSlice({
  name: 'lenders',
  initialState,
  reducers: {
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
    setLenderRequest(state) {
      state.loading = true;
    },
    setLenderSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.lenderData = action.payload;
    },
    setLenderFalied(state) {
      state.loading = true;
    },
  },
});

export const { actions, reducer, name: sliceKey } = LenderSlice;
