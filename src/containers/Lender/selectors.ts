import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';
import { initialState } from './slice';

const selectLenders = (state: RootState) => state.lenders || initialState;

export const selectLenderData = createSelector([selectLenders], ({ lenderData }) => lenderData);
export const selectIsLoading = createSelector([selectLenders], ({ loading }) => loading);
export const selectIsDataBeenFetched = createSelector(
  [selectLenders],
  ({ isLenderDataFetched }) => isLenderDataFetched,
);
