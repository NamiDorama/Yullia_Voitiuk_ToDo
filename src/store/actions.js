export const SET_USER = 'Set new user';
export const UPDATE_USER = 'Update existing user';
export const REMOVE_USER = 'Remove user';

export const setUser = (data) => ({ type: SET_USER, data });
export const updateUser = (data) => ({ type: UPDATE_USER, data });
export const removeUser = () => ({ type: REMOVE_USER });
