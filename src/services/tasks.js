import { rest } from './rest';

export const getTasksListFetch = () => rest.get('tasks');

export const getInfoAboutTasks = () => rest.get('info');

export const getTaskByIdFetch = id => rest.get(`tasks/${id}`);

export const updateTaskFetch = task => rest.put(`tasks/${task.id}`, task);

export const createTaskFetch = task => rest.post(`tasks`, task);

export const deleteTaskFetch = id => rest.delete(`tasks/${id}`);