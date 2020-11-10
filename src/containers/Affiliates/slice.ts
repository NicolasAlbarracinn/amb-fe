import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from 'utils/@reduxjs/toolkit';

// The initial state of the GithubRepoForm container
export const initialState: any = {
  loading: true,
};

const AffiliatesSlice = createSlice({
  name: 'affiliates',
  initialState,
  reducers: {
    getAffiliatedInfoRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    getAffiliatedInfoSuccess(state) {
      state.loading = false;
    },
    getAffiliatedInfoFailed(state) {
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = AffiliatesSlice;
