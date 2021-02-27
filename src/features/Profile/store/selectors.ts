import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';
import { initialState } from './slice';

const selectLogin = (state: RootState) => state.login || initialState;
export const selectIsLoggedIn = createSelector([selectLogin], login => login.isLogged);
