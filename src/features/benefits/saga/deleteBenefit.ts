import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';

import { request } from 'utils/request';
import { BENEFITS_URL } from 'utils/endpoints';

import { actions } from '../store/slice';

const cookies = new Cookies();

export function* deleteBenefit(action: PayloadAction<string>) {
  const token = cookies.get('token');

  const requestURL = `${BENEFITS_URL}/${action.payload}`;
  try {
    const requestOptions: RequestInit = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    yield call(request, requestURL, requestOptions);
    yield put(actions.deleteBenefitSuccess(action.payload));
    toast.success(`Se a eliminado la prestacion`, {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (err) {
    yield put(actions.deleteBenefitFailed());

    toast.error(err.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
