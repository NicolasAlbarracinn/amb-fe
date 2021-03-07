import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';

import { request } from 'utils/request';
import { PLANS_URL } from 'utils/endpoints';

import { actions } from '../store/slice';

const cookies = new Cookies();

export function* getPlanList(action: PayloadAction<string>) {
  const token = cookies.get('token');
  const requestURL = `${PLANS_URL}/list/${action.payload}`;
  try {
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = yield call(request, requestURL, requestOptions);
    yield put(actions.getPlanListSuccess(response.data));
  } catch (err) {
    yield put(actions.getPlanListFailed());
    toast.error(err.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
