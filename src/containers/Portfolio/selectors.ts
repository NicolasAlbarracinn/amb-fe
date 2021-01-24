import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';
import { initialState } from './slice';

const selectPortfolios = (state: RootState) => state.portfolios || initialState;

export const selectPortfolioData = createSelector([selectPortfolios], ({ portfolioData }) => portfolioData);
