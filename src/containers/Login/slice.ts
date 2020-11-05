import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from 'utils/@reduxjs/toolkit';

import { ContainerState } from './pageState';
import { GetLoginRequest } from './types';

// The initial state of the GithubRepoForm container
export const initialState: ContainerState = {
  loading: true,
  isLogged: false,
};

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    getLoginRequest(state, action: PayloadAction<GetLoginRequest>) {
      state.loading = true;
    },
    getLoginSuccess(state) {
      state.loading = false;
      state.isLogged = true;
    },
    getLoginFailed(state) {
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = LoginSlice;
