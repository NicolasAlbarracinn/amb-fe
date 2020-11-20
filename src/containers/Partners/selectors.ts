import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';
import { initialState } from './slice';

const selectPartners = (state: RootState) => state.partners || initialState;
export const selectPartnersList = createSelector(
  [selectPartners],
  partnersState => partnersState.partnersList,
);
