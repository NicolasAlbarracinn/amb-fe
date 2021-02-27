import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';

import { GET_ACCOUNT_DATA } from 'utils/endpoints';
import { request } from 'utils/request';

import { actions } from './slice';
import { GetAccountRequest, GetAccountResponse } from './types';

const cookies = new Cookies();

export function* getAccountRequest(action: PayloadAction<GetAccountRequest>) {
  const token = action.payload.token || cookies.get('token');
  const requestURL = `${GET_ACCOUNT_DATA}`;
  const requestOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
    body: JSON.stringify({
      token,
    }),
  };

  try {
    const response: GetAccountResponse = yield call(request, requestURL, requestOptions);
    yield put(actions.getAccountSuccess(response));
  } catch (err) {
    yield put(actions.getAccountFailed());
  }
}

export function* authSaga() {
  yield takeLatest(actions.getAccountRequest.type, getAccountRequest);
}
