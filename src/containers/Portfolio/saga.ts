import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put, takeLatest } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';

import { request } from 'utils/request';
import { actions } from './slice';
import { PORTFOLIOS_URL } from 'utils/endpoints';

const cookies = new Cookies();

export function* getPorfolioDataRequest(action: PayloadAction<any>) {
  //TODO: add request
}
export function* getLendersNameListRequest(action: PayloadAction<any>) {
  const token = cookies.get('token');
  const requestURL = `${PORTFOLIOS_URL}/lenders`;
  try {
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = yield call(request, requestURL, requestOptions);
    yield put(actions.getLendersNameListSuccess(response.data));
  } catch (err) {
    yield put(actions.getLendersNameListFailed());
    toast.error('Algo salio mal.', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

export function* setPortfolioRequest(action: PayloadAction<any>) {
  const token = cookies.get('token');
  try {
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(action.payload),
    };

    yield call(request, PORTFOLIOS_URL, requestOptions);
    yield put(actions.setPortfolioSuccess());
  } catch (err) {
    yield put(actions.setPortfolioFailed());
    toast.error('Algo salio mal.', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

export function* portfolioSaga() {
  yield takeLatest(actions.getPortfolioRequest.type, getPorfolioDataRequest);
  yield takeLatest(actions.getLendersNameListRequest.type, getLendersNameListRequest);
  yield takeLatest(actions.setPortfolioRequest.type, setPortfolioRequest);
}
