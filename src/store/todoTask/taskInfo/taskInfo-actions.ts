import { ITaskInfo, Comment, SubTask } from "./task-info.interface";

export const initialTasksInfo = (payload: ITaskInfo[]) => {
  return {
    type: "INITIAL_TASKS_INFO",
    payload,
  };
};

export const UpdateDescription = (payload: string) => {
  return {
    type: "UPDATE_DESCRIPTION",
    payload,
  };
};

export const AddNewComment = (payload: Comment) => {
  return {
    type: "ADD_NEW_COMMENT",
    payload,
  };
};

export const UpdateTaskTitle = (payload: string) => {
  return {
    type: "UPDATE_TASK_TITLE",
    payload,
  };
};

export const addNewSubTask = (payload: SubTask) => {
  return {
    type: "ADD_NEW_SUB_TASK",
    payload,
  };
};
