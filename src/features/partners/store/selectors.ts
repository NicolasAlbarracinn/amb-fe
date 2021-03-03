import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';
import { initialState } from './slice';

const selectPartners = (state: RootState) => state.partners || initialState;
export const selectPartnersList = createSelector([selectPartners], partnersState => partnersState.partnersList);
export const selectPartnersListCount = createSelector(
  [selectPartners],
  partnersState => partnersState.totalPartnerAmount,
);
export const selectRenaperData = createSelector([selectPartners], partnersState => partnersState.renaperData);
export const selectPersonalData = createSelector(
  [selectPartners],
  partnersState => partnersState.renaperData.personalData,
);
export const selectAddress = createSelector([selectPartners], partnersState => partnersState.renaperData.adress);
export const selectWorkInfo = createSelector([selectPartners], partnersState => partnersState.renaperData.workInfo);
export const selectFetchedRenaperData = createSelector(
  [selectPartners],
  partnersState => partnersState.fetchedRenaperData,
);

export const selectNewPartnerId = createSelector([selectPartners], partnersState => partnersState.newPartnerId);
export const selectPartnerId = createSelector([selectPartners], partnersState => partnersState.renaperData.partnerId);
