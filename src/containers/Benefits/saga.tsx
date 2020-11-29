import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put, takeLatest } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';

import { request } from 'utils/request';
import { SAVE_PARTNER } from 'utils/endpoints';

import { actions } from './slice';

const cookies = new Cookies();

export function* getUpdateBenefitRequest(action: PayloadAction<any>) {
  const token = cookies.get('token');
  const requestURL = `${SAVE_PARTNER}/${action.payload}`;
  try {
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = yield call(request, requestURL, requestOptions);
    yield put(actions.getUpdateBenefitSuccess(response.data));
  } catch (err) {
    yield put(actions.getUpdateBenefitFailed());
    toast.error('Algo salio mal.', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

export function* benefitsSaga() {
  yield takeLatest(actions.getUpdateBenefitRequest.type, getUpdateBenefitRequest);
}
