import { ITask } from "../../types/task.interface";

interface ITaskState {
  tasks: ITask[];
  error?: null;
  loading?: boolean;
}

type TypeAction = {
  type: string;
  payload: any;
};

const taskState: ITaskState = {
  tasks: [],
  error: null,
  loading: false,
};

export const taskReducer = (
  state = taskState,
  action: TypeAction
): ITaskState => {
  switch (action.type) {
    case "INITIAL_TASKS": {
      state.tasks = action.payload;
      return {
        ...state,
      };
    }

    case "ADD_NEW_TASK": {
      try {
        const newList = state.tasks;
        newList.push(action.payload);
        state.tasks = newList;
      } catch (e) {
        console.log(e);
      }

      return {
        ...state,
      };
    }

    case "DRAG_TASK": {
      const newList = [...state.tasks];
      newList.find(
        (item: { id: number }) => item.id === action.payload,
        action.payload
      );
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
