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

export const addNewTaskItem = (payload: any) => {
  return {
    type: "ADD_NEW_TASK_ITEM",
    payload,
  };
};

export const deleteTaskItem = (payload: any) => {
  return {
    type: "DELETE_TASK_ITEM",
    payload,
  };
};

export const updateSubTaskItem = (payload: any) => {
  return {
    type: "UPDATE_SUB_TASK_ITEM",
    payload,
  };
};

export const updateStatusSubTaskItem = (payload: any) => {
  return {
    type: "UPDATE_STATUS_SUB_TASK_ITEM",
    payload,
  };
};

export const deleteSubTaskItem = (payload: any) => {
  return {
    type: "DELETE_SUB_TASK_ITEM",
    payload,
  };
};

export const addSubTaskItem = (payload: any) => {
  return {
    type: "ADD_SUB_TASK_ITEM",
    payload,
  };
};

export const addComment = (payload: any) => {
  return {
    type: "ADD_COMMENT",
    payload,
  };
};

export const addReplyComment = (payload: any) => {
  return {
    type: "ADD_REPLY_COMMENT",
    payload,
  };
};

export const deleteComment = (payload: any) => {
  return {
    type: "DELETE_COMMENT",
    payload,
  };
};

export const deleteReplyComment = (payload: any) => {
  return {
    type: "DELETE_REPLY_COMMENT",
    payload,
  };
};
