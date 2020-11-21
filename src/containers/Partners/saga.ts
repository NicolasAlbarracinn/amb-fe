import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put, takeLatest } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';

import { GET_RENAPER_DATA, GET_AFFILEATES_LIST, SAVE_PARTNER } from 'utils/endpoints';
import { request } from 'utils/request';
import { QueryParameters } from 'types/types';
import { queryBuilder } from 'utils/queryBuilder';
import { actions } from './slice';

const cookies = new Cookies();

export function* getRenaperDataRequest(action: PayloadAction<any>) {
  const token = cookies.get('token');
  const requestURL = `${GET_RENAPER_DATA}?documentNumber=${action.payload.documentNumber}&procedureNumber=${action.payload.procedureNumber}&procedureNumber=${action.payload.gender}`;

  try {
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = yield call(request, requestURL, requestOptions);
    yield put(actions.getRenaperDataSuccess(response.data));
  } catch (err) {
    yield put(actions.getRenaperDataFailed());
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

export function* getSavePartnerRequest(action: PayloadAction<any>) {
  const token = cookies.get('token');
  const requestURL = `${SAVE_PARTNER}`;
  try {
    const requestOptions: RequestInit = {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(action.payload),
    };
    const response = yield call(request, requestURL, requestOptions);
    yield put(actions.getSavePartnerSuccess(response.data));
    toast.success(`${response.data.partnerId}`, {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (err) {
    yield put(actions.getSavePartnerFailed());
    toast.error('Algo salio mal.', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

export function* partnersSaga() {
  yield takeLatest(actions.getRenaperDataRequest.type, getRenaperDataRequest);
  yield takeLatest(actions.getPartnersListRequest.type, getPartnersListRequest);
  yield takeLatest(actions.getSavePartnerRequest.type, getSavePartnerRequest);
}
