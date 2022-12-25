import { ITaskInfo } from "../../../types/task.interface";

export const initialTasksInfo = (payload: ITaskInfo[]) => {
  return {
    type: "INITIAL_TASKS",
    payload,
  };
};

export const UpdateDescription = (payload: any) => {
  return {
    type: "",
    payload
  }
}

export const AddComment = (payload: any) => {
  return {
    type: "",
    payload
  }
}

export const UpdateTaskTitle = (payload: any) => {
  return {
    type: "",
    payload
  }
}