import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put, takeLatest } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';

import { actions } from './slice';

import { request } from 'utils/request';
import { LENDERS_URL } from 'utils/endpoints';

const cookies = new Cookies();

export function* createLenderRequest(action: PayloadAction<any>) {
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

    const response = yield call(request, LENDERS_URL, requestOptions);
    yield put(actions.setLenderSuccess());
    toast.success(`Se agrego el nuevo fondista ${response.data.name}`, {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (err) {
    yield put(actions.setLenderFalied());
    toast.error('Algo salio mal.', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

export function* getLenderDataRequest(action: PayloadAction<any>) {
  const token = cookies.get('token');
  const requestURL = `${LENDERS_URL}/${action.payload}`;
  try {
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = yield call(request, requestURL, requestOptions);
    yield put(actions.getLenderSuccess(response.data));
  } catch (err) {
    yield put(actions.setLenderFalied());
    toast.error('Algo salio mal.', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

export function* lenderSaga() {
  yield takeLatest(actions.getLenderRequest.type, getLenderDataRequest);
  yield takeLatest(actions.setLenderRequest.type, createLenderRequest);
}
