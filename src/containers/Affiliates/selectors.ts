import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';
import { initialState } from './slice';

const selectAffiliates = (state: RootState) => state.affiliates || initialState;
export const selectAffiliatesList = createSelector(
  [selectAffiliates],
  affiliatesState => affiliatesState.affiliatesList,
);
