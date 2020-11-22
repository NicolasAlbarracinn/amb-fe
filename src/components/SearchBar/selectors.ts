import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types/RootState';

import { initialState } from './slice';

const selectSearchBar = (state: RootState) => state.searchBar || initialState;

export const selectSearchParameter = createSelector([selectSearchBar], searchBar => searchBar.searchParameter);
export const selectParameterWasSubmited = createSelector([selectSearchBar], searchBar => searchBar.submited);
