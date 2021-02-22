import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from 'utils/@reduxjs/toolkit';
import { QueryParameters } from 'types/types';

import { IPlan, IBenefitList, IBenefit, IPartner } from './types';
import { IBenefitsState } from './pageState';

export const initialState: IBenefitsState = {
  loading: true,
  partnerInfo: null,
  benefitData: null,
  benefitList: [],
  benefitRecordCount: 0,
  isBenefitDataFetched: false,
  benefitId: null,
  plans: [],
  plan: null,
  isSuccessfullyCreated: false,
};

const BenefitSlice = createSlice({
  name: 'benefits',
  initialState,
  reducers: {
    reset(state) {
      state.loading = initialState.loading;
      state.partnerInfo = initialState.partnerInfo;
      state.benefitData = initialState.benefitData;
      state.benefitList = initialState.benefitList;
      state.benefitRecordCount = initialState.benefitRecordCount;
      state.isBenefitDataFetched = initialState.isBenefitDataFetched;
      state.benefitId = initialState.benefitId;
      state.plans = initialState.plans;
      state.plan = initialState.plan;
      state.isSuccessfullyCreated = initialState.isSuccessfullyCreated;
    },
    getPartnerInformationRequest(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    getPartnerInformationSuccess(state, action: PayloadAction<IPartner | IBenefit>) {
      state.loading = false;
      state.partnerInfo = action.payload;
      state.isBenefitDataFetched = true;
    },
    getPartnerInformationFailed(state) {
      state.loading = false;
    },
    setBenefitRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    setBenefitData(state, action: PayloadAction<any>) {
      state.loading = false;
      state.isSuccessfullyCreated = true;
    },
    setBenefitFailed(state) {
      state.loading = false;
    },
    getPlanListRequest(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    getPlanListSuccess(state, action: PayloadAction<IPlan[]>) {
      state.loading = false;
      state.plans = action.payload;
      state.plan = null;
    },
    getPlanListFailed(state) {
      state.loading = false;
    },
    getPlanRequest(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    getPlanSuccess(state, action: PayloadAction<IPlan>) {
      state.loading = false;
      state.plan = action.payload;
    },
    getPlanFailed(state) {
      state.loading = false;
    },
    getBenefitDetailRequest(state, action: PayloadAction<number>) {
      state.loading = true;
    },
    getBenefitDetailSuccess(state, action: PayloadAction<IBenefit>) {
      state.loading = false;
      state.benefitData = action.payload;
    },
    getBenefitDetailFailed(state) {
      state.loading = false;
    },
    getBenefitListRequest(state, action: PayloadAction<QueryParameters>) {
      state.loading = true;
    },
    getBenefitListSuccess(state, action: PayloadAction<{ list: IBenefitList[]; count: number }>) {
      state.loading = false;
      state.benefitList = action.payload.list;
      state.benefitRecordCount = action.payload.count;
    },
    getBenefitListFailed(state) {
      state.loading = false;
    },
    deleteBenefitRequest(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    deleteBenefitSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.benefitList = state.benefitList.filter(bl => bl._id !== action.payload);
    },
    deleteBenefitFailed(state) {
      state.loading = false;
    },
    updateBenefitStatusRequest(state, action: PayloadAction<{ id: number; status: string }>) {
      state.loading = true;
    },
    updateBenefitStatusSuccess(state) {
      state.loading = false;
    },
    updateBenefitStatusFailed(state) {
      state.loading = false;
    },
    updateBenefitRequest(state, action: PayloadAction<{ id: number; updatedInfo: object }>) {
      state.loading = true;
    },
    updateBenefitSuccess(state) {
      state.loading = false;
      state.isSuccessfullyCreated = true;
    },
    updateBenefitFailed(state) {
      state.loading = false;
    },
    setBenefitDetailsToNull(state) {
      state.benefitData = null;
    },
    setBenefitId(state, action: PayloadAction<number>) {
      state.benefitId = action.payload;
    },
    setBenefitIdDefault(state) {
      state.benefitId = null;
    },
    getPDFFileRequest(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    getPDFFileSuccess(state) {
      state.loading = false;
    },
    getPDFFileFailed(state) {
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = BenefitSlice;
