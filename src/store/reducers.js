import {
  SET_USER,
  UPDATE_USER,
  REMOVE_USER,
  GET_TASKS_LIST,
  SET_ERROR
} from './actions';

export const user = (state = false, { type, data = [] }) => {
  switch (type) {
    case SET_USER:
    case UPDATE_USER: {
      return data;
    }

    case REMOVE_USER:
      return null;
  }

  return state;
};

export const tasksInWeek = (state = [], { type, data = [] }) => {
  switch (type) {
    case GET_TASKS_LIST: {
      return data;
    }
  }

  return state;
};

export const error = (state = '', { type, data = '' }) => {
  switch (type) {
    case SET_ERROR: {
      return data;
    }
  }

  return state;
};

// export const todo = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TASK: {
//       const newState = [...state, action.task];
//       return newState;
//     }
//   }
//
//   return state;
// };
