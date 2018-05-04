import { rest } from './rest';

export const getTasksList = () => rest.get('tasks');

export const getInfoAboutTasks = () => rest.get('info');

export const getTask = (id) => rest.get(`tasks/${id}`);

export const updateTask = (task) => rest.put(`tasks/${task.id}`, task);