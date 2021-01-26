import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from 'utils/@reduxjs/toolkit';
import { IPortfolioState } from './pageState';
import { IPortfolio } from './types';

export const initialState: IPortfolioState = {
  loading: true,
  portfolioData: {} as IPortfolio,
  lendersNameList: [],
};

const PortfolioSlice = createSlice({
  name: 'portfolios',
  initialState,
  reducers: {
    getPortfolioRequest(state) {
      state.loading = true;
    },
    getPortfolioSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.portfolioData = action.payload;
    },
    getPortfolioFailed(state) {
      state.loading = false;
    },
    getLendersNameListRequest(state) {
      state.loading = true;
    },
    getLendersNameListSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.lendersNameList = action.payload;
    },
    getLendersNameListFailed(state) {
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = PortfolioSlice;
