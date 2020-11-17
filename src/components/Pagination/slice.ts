import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from 'utils/@reduxjs/toolkit';

import { ContainerState } from './pageState';

// The initial state of the GithubRepoForm container
export const initialState: ContainerState = {
  limit: 10,
  offset: 0,
};

const tablePaginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    reset(state) {
      state.limit = initialState.limit;
      state.offset = initialState.offset;
    },
    updateOffset(state, action: PayloadAction<{ offset: number }>) {
      state.offset = action.payload.offset;
    },
    updateLimit(state, action: PayloadAction<{ limit: number }>) {
      state.limit = action.payload.limit;
    },
  },
});

export const { actions, reducer, name: sliceKey } = tablePaginationSlice;
