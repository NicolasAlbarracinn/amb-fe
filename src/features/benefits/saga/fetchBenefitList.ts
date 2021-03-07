import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';

import { request } from 'utils/request';
import { queryBuilder } from 'utils/queryBuilder';
import { BENEFITS_URL } from 'utils/endpoints';
import { QueryParameters } from 'types/types';

import { actions } from '../store/slice';

const cookies = new Cookies();

export function* getBenefitList(action: PayloadAction<QueryParameters>) {
  const token = cookies.get('token');
  const { sortBy, limit, offset, filter } = action.payload;
  const query = queryBuilder({ sortBy, limit, offset, filter });
  const requestURL = `${BENEFITS_URL}/list?${query}`;
  try {
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = yield call(request, requestURL, requestOptions);

    yield put(actions.getBenefitListSuccess({ list: response.data, count: response.count }));
  } catch (err) {
    yield put(actions.getBenefitListFailed());
    toast.error(err.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
