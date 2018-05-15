/* --== ASYNC ACTIONS ==-- */

export const GET_USER_ASYNC = 'Get user';
export const LOGIN_USER_ASYNC = 'Login user';
export const LOGOUT_USER_ASYNC = 'Logout user';
export const CREATE_USER_ASYNC = 'Create user';
export const UPDATE_USER_ASYNC = 'Update user';

export const getUser = () => ({ type: GET_USER_ASYNC });
export const loginUser = data => ({ type: LOGIN_USER_ASYNC, data });
export const logoutUser = () => ({ type: LOGOUT_USER_ASYNC });
export const createUserAsync = data => ({ type: CREATE_USER_ASYNC, data });
export const updateUserAsync = data => ({ type: UPDATE_USER_ASYNC, data });


/* --== ACTIONS FOR REDUCER ==-- */

export const SET_USER = 'Set new user';
export const UPDATE_USER = 'Update existing user';
export const REMOVE_USER = 'Remove user';
export const CREATE_NEW_USER = 'Create new user';

export const setUser = data => ({ type: SET_USER, data });
export const updateUser = data => ({ type: UPDATE_USER, data });
export const removeUser = () => ({ type: REMOVE_USER });
export const createUser = data => ({ type: CREATE_NEW_USER, data });
