import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from 'utils/@reduxjs/toolkit';

import { ContainerState } from './pageState';
import { SearchBarParameter, SubmitParameter } from './types';

// The initial state of the GithubRepoForm container
export const initialState: ContainerState = {
  searchParameter: '',
  submited: false,
};

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    reset(state) {
      state.searchParameter = initialState.searchParameter;
    },
    updateSearchParameter(state, action: PayloadAction<SearchBarParameter>) {
      state.searchParameter = action.payload.searchParameter;
    },
    updateSubmitParameter(state, action: PayloadAction<SubmitParameter>) {
      state.submited = action.payload.submited;
    },
  },
});

export const { actions, reducer, name: sliceKey } = searchBarSlice;
