export const GET_USER_ASYNC = 'Get user';

export const SET_USER = 'Set new user';
export const UPDATE_USER = 'Update existing user';
export const REMOVE_USER = 'Remove user';
export const GET_TASKS_LIST = 'Get tasks list';

export const getUser = () => ({ type: GET_USER_ASYNC });

export const setUser = (data) => ({ type: SET_USER, data });
export const updateUser = (data) => ({ type: UPDATE_USER, data });
export const removeUser = () => ({ type: REMOVE_USER });
export const getTasks = (data) => ({ type: GET_TASKS_LIST, data });
