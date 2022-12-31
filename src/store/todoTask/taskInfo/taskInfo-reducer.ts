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
    case "INITIAL_TASKS_INFO": {
      try {
        state.tasksInfo = action.payload;
      } catch (e) {
        console.log(e);
      }
      return {
        ...state,
      };
    }

    case "UPDATE_DESCRIPTION": {
      try {
        const newList = state.tasksInfo[1].description;
      } catch (e) {
        console.log(e);
      }
      return {
        ...state,
      };
    }
    case "ADD_NEW_COMMENT": {
      try {
      } catch (e) {
        console.log(e);
      }
      return {
        ...state,
      };
    }
    case "UPDATE_TASK_TITLE": {
      try {
      } catch (e) {
        console.log(e);
      }
      return {
        ...state,
      };
    }
    case "ADD_NEW_SUB_TASK": {
      try {
      } catch (e) {
        console.log(e);
      }
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
