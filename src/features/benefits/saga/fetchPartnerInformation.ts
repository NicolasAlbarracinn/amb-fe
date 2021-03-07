import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';

import { request } from 'utils/request';
import { BENEFITS_URL } from 'utils/endpoints';

import { actions } from '../store/slice';

const cookies = new Cookies();

export function* getPartnerInformation(action: PayloadAction<any>) {
  const token = cookies.get('token');
  const requestURL = `${BENEFITS_URL}/${action.payload}`;
  try {
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = yield call(request, requestURL, requestOptions);
    yield put(
      actions.getPartnerInformationSuccess({
        partnerObjectId: response.data._id,
        partnerDetail: {
          ...response.data.personalData,
          status: response.data.status,
          admissionDate: response.data.createdAt,
        },
        distributionDetail: {
          ...response.data.workInfo,
          paymentType: response.data.personalData.paymentType,
          recoveryPaymentType: response.data.personalData.recoveryPaymentType,
        },
      }),
    );
  } catch (err) {
    yield put(actions.getPartnerInformationFailed());
    toast.error(err.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
