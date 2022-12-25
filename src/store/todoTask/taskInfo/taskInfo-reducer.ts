import { ITaskInfo } from "../../../types/task.interface";

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

type TypeAction = {
  type: string;
  payload: any;
};

export const taskInfoReducer = (
  state = TaskInfoState,
  action: TypeAction
): ITaskInfoState => {
  switch (action.type) {
    case "INITIAL_TASKS": {
      state.tasksInfo = action.payload;
      return {
        ...state,
      };
    }

    case "ADD_TASK": {
      try {
        const newList = state.tasksInfo;
        newList.push(action.payload);
        state.tasksInfo = newList;
      } catch (e) {
        console.log(e);
      }
      return {
        ...state,
      };
    }
    case "DELETE_TASK": {
      const newList = state.tasksInfo;
      const result = newList.filter(
        taskInfo => taskInfo.id !== action.payload
      );
      state.tasksInfo = result;
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
