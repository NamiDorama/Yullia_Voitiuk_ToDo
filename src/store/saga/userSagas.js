import { takeEvery, put } from 'redux-saga/effects';

import {
  GET_USER_ASYNC,
  setUser,
  LOGIN_USER_ASYNC,
  LOGOUT_USER_ASYNC,
  removeUser
} from '../actions';
import {
  checkUser,
  login,
  logout
} from '../../services';

export function* getUser() {
  try {
    const user = yield checkUser();
    yield put(setUser(user));
  } catch (err) {
    yield put(removeUser());
  }
}

export function* watchUser() {
  yield takeEvery(GET_USER_ASYNC, getUser)
}

export function* loginUser({ data }) {
  try {
    const user = yield login(data);
    yield put(setUser(user))
  } catch(err) {}
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER_ASYNC, loginUser)
}


export function* logoutUser({ data }) {
  try {
    yield logout(data);
    yield put(removeUser())
  } catch(err) {}
}

export function* watchLogoutUser() {
  yield takeEvery(LOGOUT_USER_ASYNC, logoutUser)
}
