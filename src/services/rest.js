import { errObserver } from './observer';
import { store, setError } from '../store';
import {checkUser} from './users';

const BASE_URL = 'http://localhost:8081/';

export const request = (url, method = 'GET', body, options) => {
  const userChecking = url.includes('checkUser');
  const fetchOpts = {
    method: method,
    credentials: 'include',
    body: JSON.stringify(body)
  };

  Object.assign(fetchOpts, options);

  const promise = fetch(`${BASE_URL}${url}`, fetchOpts)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        return Promise.reject(data.error);
      }

      return Promise.resolve(data);
    });

  promise.catch(error => !userChecking && store.dispatch(
    setError(String(error))
  ));

  return promise;
};

export const rest = {
  get(url) {
    return request(url);
  },

  post(url, body) {
    const options = {
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      }
    };
    return request(url, 'POST', body, options);
  },

  put(url, body) {
    const options = {
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      }
    };
    return request(url, 'PUT', body, options);
  },

  delete(url) {
    return request(url, 'DELETE');
  }
};