import { takeEvery, put, all } from 'redux-saga/effects';

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

export function* getTask({ data }) {
  try {
    const task = yield getTaskByIdFetch(data);
    yield put(getTaskById(task));
  } catch(err) {}
}

// Create task

export function* createNewTask({ data }) {
  try {
    const task =yield createTaskFetch(data);
    task.updated = true;
    yield put(createTask(task));
  } catch(err) {}
}

// Updating task

export function* update({ data }) {
  try {
    yield updateTaskFetch(data);
    yield put(updateTask(data));
  } catch(err) {}
}

export function* updateCurrent({ data }) {
  try {
    const task = yield updateTaskFetch(data);
    task.updated = true;
    yield put(updateCurrentTask(task));
  } catch(err) {}
}

// Deleting task

export function* delTask({ data }) {
  try {
    yield deleteTaskFetch(data.id);
    yield put(deleteTask(data));
  } catch(err) {}
}


export function* watchAllTask() {
  yield all([
    takeEvery(GET_TASKS_LIST_ASYNC, getTasksList),
    takeEvery(GET_TASK_BY_ID_ASYNC, getTask),
    takeEvery(CREATE_TASK_ASYNC, createNewTask),
    takeEvery(UPDATE_TASK_ASYNC, update),
    takeEvery(UPDATE_CURRENT_TASK_ASYNC, updateCurrent),
    takeEvery(DELETE_TASK_ASYNC, delTask)
  ]);
}
