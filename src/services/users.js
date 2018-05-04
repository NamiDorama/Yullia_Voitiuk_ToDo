import { rest } from './rest';

export const login = (data = {}) => rest.post('public/login', data);

export const checkUser = () => rest.get('public/checkUser');

export const createNewUser = ({ firstName, lastName, email, password }) => rest.post('public/user', { firstName, lastName, email, password });

export const logout = () => rest.get('logout');
