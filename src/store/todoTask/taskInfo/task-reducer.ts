import { ITaskInfoInitialState, TodoAction } from './task.interface';

//@ts-ignore
const tasksInfoFromLocalStorage = JSON.parse(localStorage.getItem('tasks'));

const initialState: ITaskInfoInitialState = {
  tasksInfo: tasksInfoFromLocalStorage || [],
  error: null,
  loading: false
};

export const taskReducer = (
  state = initialState,
  action: TodoAction
): ITaskInfoInitialState => {
  switch (action.type) {
    
    default:
      return state;
  }
};
