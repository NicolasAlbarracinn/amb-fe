import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from 'utils/@reduxjs/toolkit';

import { GetAccountRequest } from './types';

export const initialState: any = {
  isAuthentificating: true,
  isAuthenticated: false,
  loading: false,
  accountData: {
    completed: false,
  },
};

const accountSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset(state) {
      state.isAuthentificating = initialState.isAuthentificating;
      state.isAuthenticated = initialState.isAuthenticated;
      state.account = initialState.account;
    },

    getAccountRequest(state, action: PayloadAction<GetAccountRequest>) {
      state.isAuthentificating = true;
      state.loading = true;
    },
    getAccountSuccess(state, action: PayloadAction<any>) {
      state.isAuthentificating = false;
      state.isAuthenticated = true;
      state.loading = false;
      state.accountData = action.payload;
    },
    getAccountFailed(state) {
      state.isAuthentificating = false;
      state.isAuthenticated = false;
      state.loading = false;
      state.account = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = accountSlice;
