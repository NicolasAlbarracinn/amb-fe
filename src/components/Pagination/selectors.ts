import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';

import { initialState } from './slice';

const selectTablePagination = (state: RootState) => state.pagination || initialState;

export const selectOffset = createSelector([selectTablePagination], pagination => pagination.offset);
export const selectLimit = createSelector([selectTablePagination], pagination => pagination.limit);
