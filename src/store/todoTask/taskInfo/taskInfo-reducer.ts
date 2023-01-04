import { ITaskInfo, TaskInfoAction } from "./task-info.interface";

interface ITaskInfoState {
  tasksInfo: ITaskInfo[];
  error: any;
  loading: boolean;
}

const TaskInfoState: ITaskInfoState = {
  tasksInfo: [],
  error: null,
  loading: false,
};

export const taskInfoReducer = (
  state = TaskInfoState,
  action: TaskInfoAction
): ITaskInfoState => {
  switch (action.type) {
    case "INITIAL_TASKS_INFO":
      return {
        ...state,
        tasksInfo: [...state.tasksInfo, ...action.payload],
      };
    case "REMOVE_TASK":
      return {
        ...state,
        tasksInfo: state.tasksInfo.filter(task => task.id !== action.payload),
      };
    case "UPDATE_TASK_NAME":
      return {
        ...state,
        tasksInfo: state.tasksInfo.map(task => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              name: action.payload.value,
            };
          }
          return task;
        }),
      };
    case "UPDATE_TASK_DESCRIPTION":
      return {
        ...state,
        tasksInfo: state.tasksInfo.map(task => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              description: action.payload.value,
            };
          }
          return task;
        }),
      };
    case "UPDATE_TASK_STATUS":
      return {
        ...state,
        tasksInfo: state.tasksInfo.map(task => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              status: action.payload.value,
            };
          }
          return task;
        }),
      };
    case "UPDATE_TASK_PRIORITY":
      return {
        ...state,
        tasksInfo: state.tasksInfo.map(task => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              priority: action.payload.value,
            };
          }
          return task;
        }),
      };
    default:
      return state;
  }
};
