import { takeLatest } from 'redux-saga/effects';
import { actions } from '../store/slice';

import { getLoginRequest } from './getLoginRequest';

export function* loginSaga() {
  yield takeLatest(actions.getLoginRequest.type, getLoginRequest);
}
