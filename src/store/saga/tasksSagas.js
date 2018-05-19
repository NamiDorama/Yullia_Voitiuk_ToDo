import { takeEvery, put } from 'redux-saga/effects';
import {
  GET_TASKS_LIST_ASYNC,
  getTasks,
  UPDATE_TASK_ASYNC,
  updateTask,
  DELETE_TASK_ASYNC,
  deleteTask,
  GET_TASK_BY_ID_ASYNC,
  getTaskById,
  CREATE_TASK_ASYNC,
  createTask,
  UPDATE_CURRENT_TASK_ASYNC,
  updateCurrentTask
} from '../actionTask';
import {
  getTasksListFetch,
  updateTaskFetch,
  deleteTaskFetch,
  getTaskByIdFetch,
  createTaskFetch
} from '../../services';


// Getting tasks

export function* getTasksList() {
  try {
    const list = yield getTasksListFetch();
    yield put(getTasks(list));
  } catch(err) {}
}

export function* watchGetTasksList() {
  yield takeEvery(GET_TASKS_LIST_ASYNC, getTasksList)
}

export function* getTask({ data }) {
  try {
    const task = yield getTaskByIdFetch(data);
    yield put(getTaskById(task));
  } catch(err) {}
}

export function* watchGetOneTask() {
  yield takeEvery(GET_TASK_BY_ID_ASYNC, getTask)
}

// Create task

export function* createNewTask({ data }) {
  try {
    const task =yield createTaskFetch(data);
    yield put(createTask(task));
  } catch(err) {}
}

export function* watchCreateTask() {
  yield takeEvery(CREATE_TASK_ASYNC, createNewTask)
}

// Updating task

export function* update({ data }) {
  try {
    yield updateTaskFetch(data);
    yield put(updateTask(data));
  } catch(err) {}
}

export function* watchUpdateTask() {
  yield takeEvery(UPDATE_TASK_ASYNC, update)
}

export function* updateCurrent({ data }) {
  try {
    const task = yield updateTaskFetch(data);
    task.updated = true;
    yield put(updateCurrentTask(task));
  } catch(err) {}
}

export function* watchUpdateCurrentTask() {
  yield takeEvery(UPDATE_CURRENT_TASK_ASYNC, updateCurrent)
}

// Deleting task

export function* delTask({ data }) {
  try {
    yield deleteTaskFetch(data.id);
    yield put(deleteTask(data));
  } catch(err) {}
}

export function* watchDeleteTask() {
  yield takeEvery(DELETE_TASK_ASYNC, delTask)
}
