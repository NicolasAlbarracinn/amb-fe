import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put, takeLatest } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';

import { GET_RENAPER_DATA, GET_AFFILEATES_LIST, SAVE_PARTNER, UPADTE_PARTNER_STATUS } from 'utils/endpoints';
import { request } from 'utils/request';
import { QueryParameters } from 'types/types';
import { queryBuilder } from 'utils/queryBuilder';
import { actions } from '../store/slice';

const cookies = new Cookies();

export function* getRenaperDataRequest(action: PayloadAction<any>) {
  const token = cookies.get('token');
  const requestURL = `${GET_RENAPER_DATA}?documentNumber=${action.payload.documentNumber}&procedureNumber=${action.payload.procedureNumber}&gender=${action.payload.gender}`;

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
    yield put(actions.getPartnersListSuccess({ list: response.data, count: response.count }));
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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(action.payload),
    };
    const response = yield call(request, requestURL, requestOptions);
    yield put(actions.getSavePartnerSuccess(response.data));
    toast.success(`Se agrego el nuevo socio con id: ${response.data.partnerId}`, {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (err) {
    yield put(actions.getSavePartnerFailed());
    toast.error('Algo salio mal.', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

export function* getUpdatePartnerRequest(action: PayloadAction<any>) {
  const token = cookies.get('token');
  const requestURL = `${SAVE_PARTNER}`;
  try {
    const requestOptions: RequestInit = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(action.payload),
    };
    const response = yield call(request, requestURL, requestOptions);
    yield put(actions.getUpdatePartnerSuccess(response.data));
    toast.success(`Socio Modificado Existosamente`, {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (err) {
    yield put(actions.getUpdatePartnerFailed());
    toast.error('Algo salio mal.', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

export function* getUpdatePartnerStatusRequest(action: PayloadAction<any>) {
  const token = cookies.get('token');
  const requestURL = `${UPADTE_PARTNER_STATUS}`;
  try {
    const requestOptions: RequestInit = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        status: action.payload.value,
        partnerId: action.payload.partnerId,
      }),
    };
    const response = yield call(request, requestURL, requestOptions);
    yield put(actions.getUpdatePartnerStatusSuccess(response.data));
    toast.success(`Estado de socio modificado`, {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (err) {
    yield put(actions.getUpdatePartnerStatusFailed());
    toast.error('Algo salio mal.', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

export function* partnersSaga() {
  yield takeLatest(actions.getRenaperDataRequest.type, getRenaperDataRequest);
  yield takeLatest(actions.getPartnersListRequest.type, getPartnersListRequest);
  yield takeLatest(actions.getSavePartnerRequest.type, getSavePartnerRequest);
  yield takeLatest(actions.getUpdatePartnerRequest.type, getUpdatePartnerRequest);
  yield takeLatest(actions.getUpdatePartnerStatusRequest.type, getUpdatePartnerStatusRequest);
}
