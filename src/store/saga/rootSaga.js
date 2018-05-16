import { all } from 'redux-saga/effects';
import {
  watchUser,
  watchLoginUser,
  watchLogoutUser,
  watchCreateUser,
  watchUpdateUser
} from './userSagas';
import {
  watchGetTasksList,
  watchUpdateTask,
  watchDeleteTask,
  watchGetOneTask,
  watchCreateTask
} from './tasksSagas';

export function* rootSaga() {
  yield all([
    watchUser(),
    watchLoginUser(),
    watchLogoutUser(),
    watchCreateUser(),
    watchUpdateUser(),
    watchGetTasksList(),
    watchUpdateTask(),
    watchDeleteTask(),
    watchGetOneTask(),
    watchCreateTask()
  ]);
}