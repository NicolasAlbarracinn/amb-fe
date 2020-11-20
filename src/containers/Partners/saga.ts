import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put, takeLatest, all } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';

import { GET_PARTNERD_INFO, GET_AFFILEATES_LIST } from 'utils/endpoints';
import { request } from 'utils/request';
import { QueryParameters } from 'types/types';
import { queryBuilder } from 'utils/queryBuilder';
import { actions } from './slice';

const cookies = new Cookies();

export function* getPartnerdInfoRequest(action: PayloadAction<QueryParameters>) {
  const token = cookies.get('token');
  const requestURL = `${GET_PARTNERD_INFO}?id=${action.payload}`;

  try {
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = yield call(request, requestURL, requestOptions);
    yield put(actions.getPartnerdInfoSuccess());
  } catch (err) {
    yield put(actions.getPartnerdInfoFailed());
    toast.error('Algo salio mal.', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

export function* getPartnersListRequest(action: PayloadAction<QueryParameters>) {
  const token = cookies.get('token');
  const { sortBy, limit, offset, filter } = action.payload;
  const query = queryBuilder({ sortBy, limit, offset, filter });
  const requestURL = `${GET_AFFILEATES_LIST}?${query}`;
  try {
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = yield call(request, requestURL, requestOptions);
    yield put(actions.getPartnersListSuccess(response.data));
  } catch (err) {
    yield put(actions.getPartnersListFailed());
    toast.error('Algo salio mal.', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

export function* partnersSaga() {
  yield takeLatest(actions.getPartnerdInfoRequest.type, getPartnerdInfoRequest);
  yield takeLatest(actions.getPartnersListRequest.type, getPartnersListRequest);
}