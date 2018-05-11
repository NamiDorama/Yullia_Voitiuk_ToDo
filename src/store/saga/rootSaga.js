import { all } from 'redux-saga/effects';
import {
  watchUser,
  watchLoginUser,
  watchLogoutUser
} from './userSagas';

export function* rootSaga() {
  yield all([
    watchUser(),
    watchLoginUser(),
    watchLogoutUser()
  ]);
}