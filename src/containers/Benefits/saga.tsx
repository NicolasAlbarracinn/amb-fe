import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put, takeLatest } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';

import { request } from 'utils/request';

import { mockedBenefitsData } from './mockedBenefitsData';

import { actions } from './slice';

export function* getUpdateBenefitRequest(action: PayloadAction<any>) {
  try {
    yield put(actions.getUpdateBenefitSuccess(mockedBenefitsData));
  } catch (err) {
    yield put(actions.getUpdateBenefitFailed());
    toast.error('Algo salio mal.', {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

export function* benefitsSaga() {
  yield takeLatest(actions.getUpdateBenefitRequest.type, getUpdateBenefitRequest);
}
