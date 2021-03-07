import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';

import { request } from 'utils/request';

import { BENEFITS_URL } from 'utils/endpoints';

import { actions } from '../store/slice';

const cookies = new Cookies();

export function* setBenefitRequest(action: PayloadAction<any>) {
  const token = cookies.get('token');
  try {
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(action.payload),
    };

    const response = yield call(request, BENEFITS_URL, requestOptions);

    yield put(actions.setBenefitData(response.data.benefitId));
    toast.success(`Se agrego la prestacion con numero: ${response.data.benefitId}`, {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (err) {
    yield put(actions.setBenefitFailed());
    toast.error('Algo salio mal.', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
