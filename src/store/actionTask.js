/* --== ASYNC ACTIONS ==-- */

// создать экшены для асинхронных запросов - для получения тасков, для апдейта и удаления тасков
// создать отдельный редьюсер для тасков


/* --== ACTIONS FOR REDUCER ==-- */

export const GET_TASKS_LIST = 'Get tasks list';

export const getTasks = data => ({ type: GET_TASKS_LIST, data });
