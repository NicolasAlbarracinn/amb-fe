import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';

import { GET_USER_LOGIN } from 'utils/endpoints';
import { request } from 'utils/request';

import { actions } from '../store/slice';
import { GetLoginRequest } from '../types';

export function* getLoginRequest(action: PayloadAction<GetLoginRequest>) {
  const cookies = new Cookies();
  const requestURL = `${GET_USER_LOGIN}`;
  try {
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: action.payload.email,
        password: action.payload.password,
      }),
    };
    const response = yield call(request, requestURL, requestOptions);
    if (window.location.host.match('localhost')) {
      cookies.set('token', response.token, {
        path: '/',
        domain: 'localhost',
      });
    }
    yield put(actions.getLoginSuccess());
  } catch (err) {
    yield put(actions.getLoginFailed());
    toast.warning('Algo salio mal', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
