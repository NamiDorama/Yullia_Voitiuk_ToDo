import { takeEvery, put } from 'redux-saga/effects';

import { GET_USER_ASYNC, setUser } from '../actions';
import { checkUser } from '../../services';

export function* getUser() {
  const user = yield checkUser();
  yield put(setUser(user));
}

export function* watchUser() {
  yield takeEvery(GET_USER_ASYNC, getUser)
}