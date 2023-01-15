//@ts-ignore
import { ITask } from "@types/task.interface";


export interface ITaskState {
  tasks: ITask[];
  error?: null;
  loading?: boolean;
}

export enum TodoActionTypes {
  ADD_TASK = 'ADD_TASK',
  DELETE_TASK = 'DELETE_TASK',
  DELETE_ALL_TASKS = 'DELETE_ALL_TASKS',
  UPDATE_TASK = 'UPDATE_TASK'
}
// interface FetchTodoAction {
//   type: TodoActionTypes.FETCH_TODOS;
// }
// interface FetchTodoSuccessAction {
//   type: TodoActionTypes.FETCH_TODOS_SUCCESS;
//   payload: any[];
// }
// interface FetchTodoErrorAction {
//   type: TodoActionTypes.FETCH_TODOS_ERROR;
//   payload: string;
// }

export interface TodoAction {
  id: number;
  type: any;
  task: ITask;
  project: any;

  payload?: any;
}
