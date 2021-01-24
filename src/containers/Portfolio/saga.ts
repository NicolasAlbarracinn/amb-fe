import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put, takeLatest } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';

import { actions } from './slice';

const cookies = new Cookies();

export function* getPorfolioDataRequest(action: PayloadAction<any>) {
  //TODO: add request
}

export function* benefitsSaga() {
  yield takeLatest(actions.getPortfolioRequest.type, getPorfolioDataRequest);
}
