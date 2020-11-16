import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from 'utils/@reduxjs/toolkit';
import { QueryParameters } from 'types/RootState';

import { IAffiliatesState } from './pageState';
import { IAffiliate } from './types';

// The initial state of the GithubRepoForm container
export const initialState: IAffiliatesState = {
  loading: true,
  affiliatesList: [],
};

const AffiliatesSlice = createSlice({
  name: 'affiliates',
  initialState,
  reducers: {
    getAffiliatedInfoRequest(state, action: PayloadAction<QueryParameters>) {
      state.loading = true;
    },
    getAffiliatedInfoSuccess(state, action: PayloadAction<IAffiliate[]>) {
      state.loading = false;
      state.affiliatesList = action.payload;
    },
    getAffiliatedInfoFailed(state) {
      state.loading = false;
      state.affiliatesList = [];
    },
  },
});

export const { actions, reducer, name: sliceKey } = AffiliatesSlice;
