import { ITask } from "../../types/task.interface";

export const initialTasks = (payload: ITask[]) => {
  return {
    type: "INITIAL_TASKS",
    payload,
  };
};

export const addNewTask = (payload: ITask) => {
  return {
    type: "ADD_NEW_TASK",
    payload,
  };
};

export const dragEnterTask = (payload: number) => {
  return {
    type: "DRAG_TASK",
    payload,
  };
};

// ----------------------------------------------------