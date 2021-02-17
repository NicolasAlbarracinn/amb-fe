import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from 'utils/@reduxjs/toolkit';
import { IPortfolioState } from './pageState';
import { IPortfolio, IplanList } from './types';

export const initialState: IPortfolioState = {
  loading: true,
  portfolioData: {} as IPortfolio,
  lendersNameList: [],
  planList: [],
  isSuccessfullyCreated: false,
};

const PortfolioSlice = createSlice({
  name: 'portfolios',
  initialState,
  reducers: {
    reset(state) {
      state.loading = initialState.loading;
      state.portfolioData = initialState.portfolioData;
      state.lendersNameList = initialState.lendersNameList;
      state.planList = initialState.planList;
      state.isSuccessfullyCreated = initialState.isSuccessfullyCreated;
    },
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
    setPortfolioRequest(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    setPortfolioSuccess(state) {
      state.loading = false;
      state.isSuccessfullyCreated = true;
    },
    setPortfolioFailed(state) {
      state.loading = false;
    },
    setPlanToList(state, action: PayloadAction<IplanList>) {
      state.planList.push(action.payload);
    },
    removePlanFromList(state, action: PayloadAction<string>) {
      state.planList = state.planList.filter(i => i.plan !== action.payload);
    },
  },
});

export const { actions, reducer, name: sliceKey } = PortfolioSlice;
