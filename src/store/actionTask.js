
/* --== ASYNC ACTIONS ==-- */

export const GET_TASKS_LIST_ASYNC       = 'Get tasks list (async)';
export const GET_TASK_BY_ID_ASYNC       = 'Get task by id (async)';
export const UPDATE_TASK_ASYNC          = 'Update task (async)';
export const UPDATE_CURRENT_TASK_ASYNC  = 'Update current task (async)';
export const DELETE_TASK_ASYNC          = 'Delete task (async)';
export const CREATE_TASK_ASYNC          = 'Create task (async)';

export const getTasksAsync              = () => ({ type: GET_TASKS_LIST_ASYNC });
export const getTaskByIdAsync           = data => ({ type: GET_TASK_BY_ID_ASYNC, data });
export const updateTaskAsync            = data => ({ type: UPDATE_TASK_ASYNC, data });
export const updateCurrentTaskAsync     = data => ({ type: UPDATE_CURRENT_TASK_ASYNC, data });
export const deleteTaskAsync            = data => ({ type: DELETE_TASK_ASYNC, data });
export const createTaskAsync            = data => ({ type: CREATE_TASK_ASYNC, data });

/* --== ACTIONS FOR REDUCER ==-- */

export const GET_TASKS_LIST       = 'Get tasks list';
export const GET_TASK_BY_ID       = 'Get task by id';
export const UPDATE_TASK          = 'Update task';
export const UPDATE_CURRENT_TASK  = 'Update current task';
export const DELETE_TASK          = 'Delete task';
export const CREATE_TASK          = 'Create new task';

export const getTasks             = data => ({ type: GET_TASKS_LIST, data });
export const getTaskById          = data => ({ type: GET_TASK_BY_ID, data });
export const updateTask           = data => ({ type: UPDATE_TASK, data });
export const updateCurrentTask    = data => ({ type: UPDATE_CURRENT_TASK, data });
export const deleteTask           = data => ({ type: DELETE_TASK, data });
export const createTask           = data => ({ type: CREATE_TASK, data });
