import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';
import { initialState } from './slice';
import { IplanList } from './types';

const selectPortfolios = (state: RootState) => state.portfolios || initialState;

export const selectPortfolioData = createSelector([selectPortfolios], ({ portfolioData }) => portfolioData);
export const selectLenderNameList = createSelector([selectPortfolios], ({ lendersNameList }) => lendersNameList);
export const selectPlanList = createSelector([selectPortfolios], ({ planList }) => planList);
