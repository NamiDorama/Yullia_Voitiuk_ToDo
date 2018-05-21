import { takeEvery, put, all } from 'redux-saga/effects';

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

export function* loginUser({ data }) {
  try {
    const user = yield login(data);
    yield put(setUser(user));
    yield put(createUser(false));
  } catch(err) {}
}

export function* logoutUser({ data }) {
  try {
    yield logout(data);
    yield put(removeUser())
  } catch(err) {}
}

export function* create({ data }) {
  try {
    yield createNewUserFetch(data);
    yield put(createUser(true));
  } catch(err) {}
}

export function* update({ data }) {
  try {
    yield updateUserFetch(data);
    yield put(updateUser(data));
  } catch(err) {}
}


export function* watchAllUser() {
  yield all([
    takeEvery(GET_USER_ASYNC, getUser),
    takeEvery(LOGIN_USER_ASYNC, loginUser),
    takeEvery(LOGOUT_USER_ASYNC, logoutUser),
    takeEvery(CREATE_USER_ASYNC, create),
    takeEvery(UPDATE_USER_ASYNC, update)
  ]);
}
