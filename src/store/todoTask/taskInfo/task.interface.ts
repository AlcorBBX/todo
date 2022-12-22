import { ITask } from '../../../types/task.interface';

export interface ITaskInfoInitialState {
  tasksInfo?: any[];
  error?: null;
  loading?: boolean;
}

export enum TodoActionTypes {
  ADD_TASK = 'ADD_TASK',
  DELETE_TASK = 'DELETE_TASK',
  DELETE_ALL_TASKS = 'DELETE_ALL_TASKS',
  UPDATE_TASK = 'UPDATE_TASK'
}

export interface TodoAction {
  id: number;
  type: any;
  task: ITask;
  project: any;

  payload?: any;
}
