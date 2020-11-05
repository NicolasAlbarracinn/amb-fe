import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from 'utils/@reduxjs/toolkit';

// The initial state of the GithubRepoForm container
export const initialState: any = {
  loading: true,
};

const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getUpdateProfileRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    getUpdateProfileSuccess(state) {
      state.loading = false;
    },
    getUpdateProfileFailed(state) {
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = ProfileSlice;
