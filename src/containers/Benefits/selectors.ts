import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';
import { initialState } from './slice';

const selectBenefits = (state: RootState) => state.benefits || initialState;

export const selectBenefitCount = createSelector([selectBenefits], ({ benefitRecordCount }) => benefitRecordCount);
export const selectFetchedBenefitId = createSelector([selectBenefits], ({ benefitId }) => benefitId);
export const selectBenefitsData = createSelector([selectBenefits], ({ benefitData }) => benefitData);
export const selectBenefitList = createSelector([selectBenefits], ({ benefitList }) => benefitList);

export const selectPartnerData = createSelector([selectBenefits], ({ partnerInfo }) => partnerInfo);
export const selectIsDataFetched = createSelector([selectBenefits], ({ isBenefitDataFetched }) => isBenefitDataFetched);

export const selectPlanList = createSelector([selectBenefits], ({ plans }) => plans);
export const selectPlan = createSelector([selectBenefits], ({ plan }) => plan);
