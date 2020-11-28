import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from 'utils/@reduxjs/toolkit';
import { QueryParameters } from 'types/types';

import { IPartnersState } from './pageState';
import { IPartner } from './types';

// The initial state of the GithubRepoForm container
export const initialState: any = {
  loading: true,
  partnersList: [],
  renaperData: {},
  fetchedRenaperData: false,
  newPartnerId: '',
  totalPartnerAmount: 0,
};

const PartnersSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {
    reset(state) {
      state.loading = initialState.loading;
      state.partnersList = initialState.partnersList;
      state.renaperData = initialState.renaperData;
      state.fetchedRenaperData = initialState.fetchedRenaperData;
      state.newPartnerId = initialState.newPartnerId;
      state.totalPartnerAmount = initialState.totalPartnerAmount;
    },
    getRenaperDataRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    getRenaperDataSuccess(state, action: PayloadAction<any>) {
      state.renaperData = action.payload;
      state.fetchedRenaperData = true;
      state.loading = false;
    },
    getRenaperDataFailed(state) {
      state.loading = false;
    },
    getPartnersListRequest(state, action: PayloadAction<QueryParameters>) {
      state.loading = true;
    },
    getPartnersListSuccess(state, action: PayloadAction<{ list: IPartner[]; count: number }>) {
      state.loading = false;
      state.partnersList = action.payload.list;
      state.totalPartnerAmount = action.payload.count;
    },
    getPartnersListFailed(state) {
      state.loading = false;
      state.partnersList = [];
    },
    getSavePartnerRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    getSavePartnerSuccess(state, action: PayloadAction<IPartner[]>) {
      state.loading = false;
      state.newPartnerId = action.payload;
    },
    getSavePartnerFailed(state) {
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = PartnersSlice;
