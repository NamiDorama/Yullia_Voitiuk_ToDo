import { all } from 'redux-saga/effects';
import {
  watchUser,
  watchLoginUser,
  watchLogoutUser,
  watchCreateUser
} from './userSagas';

export function* rootSaga() {
  yield all([
    watchUser(),
    watchLoginUser(),
    watchLogoutUser(),
    watchCreateUser()
  ]);
}