import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put, takeLatest } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';

import { request } from 'utils/request';
import { queryBuilder } from 'utils/queryBuilder';
import { BENEFITS_URL, PLANS_URL } from 'utils/endpoints';
import { QueryParameters } from 'types/types';

import { actions } from './slice';

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
    yield put(actions.getPartnerInformationSuccess(response.data));
  } catch (err) {
    yield put(actions.getPartnerInformationFailed());
    toast.error(err.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

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

export function* getPlanById(action: PayloadAction<string>) {
  const token = cookies.get('token');
  const requestURL = `${PLANS_URL}/${action.payload}`;
  try {
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = yield call(request, requestURL, requestOptions);
    yield put(actions.getPlanSuccess(response.data));
  } catch (err) {
    yield put(actions.getPlanFailed());
    toast.error(err.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

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

export function* getBenefitDetail(action: PayloadAction<number>) {
  const token = cookies.get('token');

  const requestURL = `${BENEFITS_URL}/detail/${action.payload}`;
  try {
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = yield call(request, requestURL, requestOptions);
    yield put(actions.getBenefitDetailSuccess(response.data));
  } catch (err) {
    yield put(actions.getBenefitDetailFailed());
    toast.error(err.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

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
    toast.success(`Se a agregado el documento a la prestacion nro: ${action.payload.id}`, {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch (err) {
    yield put(actions.updateBenefitFailed());
    toast.error(err.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

export function* benefitsSaga() {
  yield takeLatest(actions.getPartnerInformationRequest.type, getPartnerInformation);
  yield takeLatest(actions.setBenefitRequest.type, setBenefitRequest);
  yield takeLatest(actions.getPlanListRequest.type, getPlanList);
  yield takeLatest(actions.getPlanRequest.type, getPlanById);
  yield takeLatest(actions.getBenefitListRequest.type, getBenefitList);
  yield takeLatest(actions.getBenefitDetailRequest.type, getBenefitDetail);
  yield takeLatest(actions.updateBenefitStatusRequest.type, updateBenefitStatus);
  yield takeLatest(actions.deleteBenefitRequest.type, deleteBenefit);
  yield takeLatest(actions.updateBenefitRequest.type, updateBenefit);
}
