import {
  SET_USER,
  UPDATE_USER,
  REMOVE_USER,
  GET_TASKS_LIST,
  SET_ERROR,
  CREATE_NEW_USER,
  UPDATE_TASK,
  DELETE_TASK,
  GET_TASK_BY_ID,
  CREATE_TASK
} from './';

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

    case UPDATE_TASK: {
      const tasksInWeek = [...state];
      tasksInWeek[data.day].forEach(task => {
        if(task.id === data.id) {
          task = data
        }
      });
      return tasksInWeek;
    }

    case DELETE_TASK: {
      const tasksInWeek = [...state];
      const tasks = tasksInWeek[data.day].filter(task => task.id !== data.id);
      tasksInWeek[data.day] = tasks;
      return tasksInWeek;
    }

    case CREATE_TASK: {
      const tasksInWeek = [...state];
      tasksInWeek[data.day].push(data);
      console.log(tasksInWeek, tasksInWeek[data.day]);
      return tasksInWeek;
    }

  }

  return state;
};

export const currentTask = (state = {}, { type, data = {} }) => {
  switch (type) {
    case GET_TASK_BY_ID: {
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

export const registered = (state = false, { type, data = false }) => {
  switch (type) {
    case CREATE_NEW_USER: {
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
