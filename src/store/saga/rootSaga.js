import { all } from 'redux-saga/effects';
import {
  watchAllUser
} from './userSagas';
import {
  watchAllTask
} from './tasksSagas';

export function* rootSaga() {
  yield all([
    watchAllUser(),
    watchAllTask()
  ]);
}