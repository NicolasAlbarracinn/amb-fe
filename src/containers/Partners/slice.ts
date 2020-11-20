import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from 'utils/@reduxjs/toolkit';
import { QueryParameters } from 'types/types';

import { IPartnersState } from './pageState';
import { IPartner } from './types';

// The initial state of the GithubRepoForm container
export const initialState: IPartnersState = {
  loading: true,
  partnersList: [],
};

const PartnersSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {
    getPartnerdInfoRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    getPartnerdInfoSuccess(state) {
      state.loading = false;
    },
    getPartnerdInfoFailed(state) {
      state.loading = false;
    },
    getPartnersListRequest(state, action: PayloadAction<QueryParameters>) {
      state.loading = true;
    },
    getPartnersListSuccess(state, action: PayloadAction<IPartner[]>) {
      state.loading = false;
      state.partnersList = action.payload;
    },
    getPartnersListFailed(state) {
      state.loading = false;
      state.partnersList = [];
    },
  },
});

export const { actions, reducer, name: sliceKey } = PartnersSlice;
