import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from 'utils/@reduxjs/toolkit';
import { QueryParameters } from 'types/RootState';

// The initial state of the GithubRepoForm container
export const initialState: any = {
  loading: true,
  affiliates: [],
};

const AffiliatesSlice = createSlice({
  name: 'affiliates',
  initialState,
  reducers: {
    getAffiliatedInfoRequest(state, action: PayloadAction<QueryParameters>) {
      state.loading = true;
    },
    getAffiliatedInfoSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.affiliates = action.payload;
    },
    getAffiliatedInfoFailed(state) {
      state.loading = false;
      state.affiliates = [];
    },
  },
});

export const { actions, reducer, name: sliceKey } = AffiliatesSlice;
