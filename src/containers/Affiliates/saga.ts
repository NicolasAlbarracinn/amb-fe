import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put, takeLatest } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';

import { GET_AFFILIATED_INFO } from 'utils/endpoints';
import { request } from 'utils/request';
import { QueryParameters } from 'types/types';
import { queryBuilder } from 'utils/queryBuilder';
import { actions } from './slice';

const cookies = new Cookies();

export function* getAffiliatedInfoRequest(action: PayloadAction<QueryParameters>) {
  const token = cookies.get('token');
  const { sortBy, limit, offset, filter } = action.payload;
  const query = queryBuilder({ sortBy, limit, offset, filter });
  const requestURL = `${GET_AFFILIATED_INFO}?${query}`;

  try {
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = yield call(request, requestURL, requestOptions);
    yield put(actions.getAffiliatedInfoSuccess(response.data));
  } catch (err) {
    yield put(actions.getAffiliatedInfoFailed());
    toast.error('Algo salio mal.', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

export function* affiliatesSaga() {
  yield takeLatest(actions.getAffiliatedInfoRequest.type, getAffiliatedInfoRequest);
}
