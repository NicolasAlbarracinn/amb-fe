import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';
import { initialState } from './slice';

const selectAuth = (state: RootState) => state.auth || initialState;
export const selectAccount = createSelector([selectAuth], auth => auth.accountData);
export const selectIsAuthenticated = createSelector([selectAuth], auth => auth.isAuthenticated);
export const selectIsAuthentificating = createSelector([selectAuth], auth => auth.isAuthentificating);
