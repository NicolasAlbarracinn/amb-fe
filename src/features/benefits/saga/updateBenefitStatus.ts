import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';

import { request } from 'utils/request';
import { BENEFITS_URL } from 'utils/endpoints';

import { actions } from '../store/slice';

const cookies = new Cookies();

export function* updateBenefitStatus(action: PayloadAction<{ id: number; status: string }>) {
  const token = cookies.get('token');

  const requestURL = `${BENEFITS_URL}/status/${action.payload.id}`;
  try {
    const requestOptions: RequestInit = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        status: action.payload.status,
      }),
    };

    const respoanse = yield call(request, requestURL, requestOptions);
    yield put(actions.updateBenefitStatusSuccess());
    toast.success(`Se a cambiado el estado de la prestacion nro ${respoanse.data.id} a ${respoanse.data.status}`, {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (err) {
    yield put(actions.updateBenefitStatusFailed());
    toast.error(err.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
