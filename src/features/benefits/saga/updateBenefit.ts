import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';

import { request } from 'utils/request';
import { BENEFITS_URL } from 'utils/endpoints';

import { actions } from '../store/slice';

const cookies = new Cookies();

//TODO: move each function to it owns file

export function* updateBenefit(action: PayloadAction<{ id: number; updatedInfo: object }>) {
  const token = cookies.get('token');

  const requestURL = `${BENEFITS_URL}/${action.payload.id}`;

  try {
    const requestOptions: RequestInit = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(action.payload.updatedInfo),
    };

    yield call(request, requestURL, requestOptions);
    yield put(actions.updateBenefitSuccess());
    toast.success(`Se a modificado la prestacion nro: ${action.payload.id}`, {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (err) {
    yield put(actions.updateBenefitFailed());
    toast.error(err.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
