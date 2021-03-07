import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';

import { request } from 'utils/request';
import { UTILITIES_URL } from 'utils/endpoints';

import { actions } from '../store/slice';

const cookies = new Cookies();

export function* getPDFFileRequest(action: PayloadAction<any>) {
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

    const response = yield call(request, UTILITIES_URL, requestOptions, true);

    const blob = yield response.blob();
    const fileURL = URL.createObjectURL(blob);
    window.open(fileURL);

    yield put(actions.getPDFFileSuccess());
    toast.success(`Por favor firme el documento y vuelvalo a subirlo: ${action.payload.id}`, {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (err) {
    yield put(actions.getPDFFileFailed());
    toast.error(err.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
