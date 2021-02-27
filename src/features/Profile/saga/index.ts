import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put, takeLatest } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';

import { UPDATE_ACCOUNT_DATA } from 'utils/endpoints';
import { request } from 'utils/request';

import { actions } from '../store/slice';

const cookies = new Cookies();

export function* getUpdateProfileRequest(action: PayloadAction<any>) {
  const token = cookies.get('token');
  const requestURL = `${UPDATE_ACCOUNT_DATA}`;
  try {
    const requestOptions: RequestInit = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(action.payload),
    };
    yield call(request, requestURL, requestOptions);
    yield put(actions.getUpdateProfileSuccess());
    toast.success('Perfil Actualizado Correctamente!', {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (err) {
    yield put(actions.getUpdateProfileFailed());
    toast.error('Algo salio mal.', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

export function* profileSaga() {
  yield takeLatest(actions.getUpdateProfileRequest.type, getUpdateProfileRequest);
}
