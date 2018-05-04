import { rest } from './rest';

export const login = (data = {}) => rest.post('public/login', data);

export const checkUser = () => rest.get('public/checkUser');

export const createNewUser = (user) => rest.post('public/user', user);

export const logout = () => rest.get('logout');
