import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';
import { initialState } from './slice';

const selectLenders = (state: RootState) => state.lenders || initialState;

export const selectLenderData = createSelector([selectLenders], ({ lenderData }) => lenderData);
