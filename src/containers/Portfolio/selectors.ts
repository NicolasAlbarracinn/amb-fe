import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';
import { initialState } from './slice';

const selectBenefits = (state: RootState) => state.portfolios || initialState;

export const selectPortfolioData = createSelector([selectBenefits], ({ portfolioData }) => portfolioData);
