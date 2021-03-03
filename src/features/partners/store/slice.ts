import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from 'utils/@reduxjs/toolkit';
import { QueryParameters } from 'types/types';

import { IPartnerList } from '../types';

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
    getPartnersListSuccess(state, action: PayloadAction<{ list: IPartnerList[]; count: number }>) {
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
    getSavePartnerSuccess(state, action: PayloadAction<IPartnerList[]>) {
      state.loading = false;
      state.newPartnerId = action.payload;
    },
    getSavePartnerFailed(state) {
      state.loading = false;
    },
    getUpdatePartnerRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    getUpdatePartnerSuccess(state, action: PayloadAction<IPartnerList[]>) {
      state.loading = false;
    },
    getUpdatePartnerFailed(state) {
      state.loading = false;
    },
    getUpdatePartnerStatusRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    getUpdatePartnerStatusSuccess(state, action: PayloadAction<IPartnerList[]>) {
      state.loading = false;
    },
    getUpdatePartnerStatusFailed(state) {
      state.loading = false;
    },
    setPartnerData(state, action: PayloadAction<IPartnerList[]>) {
      state.renaperData = action.payload;
      state.fetchedRenaperData = true;
    },
  },
});

export const { actions, reducer, name: sliceKey } = PartnersSlice;
