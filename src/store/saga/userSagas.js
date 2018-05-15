import { takeEvery, put } from 'redux-saga/effects';

import {
  GET_USER_ASYNC,
  setUser,
  LOGIN_USER_ASYNC,
  LOGOUT_USER_ASYNC,
  removeUser,
  CREATE_USER_ASYNC,
  createUser,
  UPDATE_USER_ASYNC,
  updateUser
} from '../actionUser';

import {
  checkUser,
  login,
  logout,
  createNewUserFetch,
  updateUserFetch
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
    yield put(setUser(user));
    yield put(createUser(false));
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


export function* create({ data }) {
  try {
    yield createNewUserFetch(data);
    yield put(createUser(true));
  } catch(err) {}
}

export function* watchCreateUser() {
  yield takeEvery(CREATE_USER_ASYNC, create)
}


export function* update({ data }) {
  try {
    yield updateUserFetch(data);
    yield put(updateUser(data));
  } catch(err) {}
}

export function* watchUpdateUser() {
  yield takeEvery(UPDATE_USER_ASYNC, update)
}
