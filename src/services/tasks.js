import { rest } from './rest';

export const getTasksList = () => rest.get('tasks');

export const getInfoAboutTasks = () => rest.get('info');