import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';
import { initialState } from './slice';

const selectBenefits = (state: RootState) => state.benefits || initialState;

export const selectBenefitsData = createSelector([selectBenefits], BenefitsState => BenefitsState.benefitData);
export const selectIsDataFetched = createSelector(
  [selectBenefits],
  BenefitsState => BenefitsState.isBenefitDataFetched,
);

export const selectFetchedBenefitId = createSelector([selectBenefits], BenefitsState => BenefitsState.benefitId);
export const selectPlanList = createSelector([selectBenefits], ({ plans }) => plans);
export const selectPlan = createSelector([selectBenefits], ({ plan }) => plan);
