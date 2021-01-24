import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from 'utils/@reduxjs/toolkit';
import { ILenderState } from './pageState';
import { ILender } from './types';

export const initialState: ILenderState = {
  loading: true,
  lenderData: {} as ILender,
};

const LenderSlice = createSlice({
  name: 'lenders',
  initialState,
  reducers: {
    getLenderRequest(state) {
      state.loading = true;
    },
    getLenderSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.lenderData = action.payload;
    },
    getLenderFailed(state) {
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = LenderSlice;
