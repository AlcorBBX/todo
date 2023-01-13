export interface ITaskInfo {
  id: number;
  description?: string;
  comments?: Comment[];
  subTasks?: SubTask[];
  workingTime?: number;
  priority?: string;
  status?: string;
  // files:

  createAt?: Date;
  updateAt?: Date;
  completeAt?: Date;

  taskId: number;
}

export enum Priority {
  low = "low",
  medium = "medium",
  high = "high",
}

export enum Status {
  atWork = "atWork",
  postponed = "postponed",
}

export type Description = {
  id: number;
  text: string;
  taskInfoId: number;
};

export type Comment = {
  id: number;
  text: string;
  userId?: number;
  taskInfoId: number;
};

export type SubTask = {
  id: number;
  title: string;
  taskInfoId: number;
};

export enum taskInfoActions {
  initialTaskInfo = "INITIAL_TASK_INFO",
  updateDescription = "UPDATE_TASK_DESCRIPTION",
  addNewComment = "ADD_NEW_COMMENT",
  updateTaskTitle = "UPDATE_TASK_TITLE",
  addNewSubTask = "ADD_NEW_SUB_TASK",
  removeTask = "REMOVE_TASK",

  updateName = "UPDATE_TASK_NAME",
  updateStatus = "UPDATE_TASK_STATUS",
  updatePriority = "UPDATE_TASK_PRIORITY",
}

type updatePayload = {
  id: number;
  value: string;
  taskId: number;
};
export interface IUpdateName {
  type: taskInfoActions.updateName;
  payload: updatePayload;
}

export interface IUpdateStatus {
  type: taskInfoActions.updateStatus;
  payload: updatePayload;
}

export interface IUpdatePriority {
  type: taskInfoActions.updatePriority;
  payload: updatePayload;
}

export interface IRemoveTask {
  type: taskInfoActions.removeTask;
  payload: number;
}

export interface InitialTasksInfo {
  type: taskInfoActions.initialTaskInfo;
  payload: ITaskInfo[];
}
export interface IUpdateDescription {
  type: taskInfoActions.updateDescription;
  payload: updatePayload;
}
export interface IAddNewComment {
  type: taskInfoActions.addNewComment;
  payload: Comment;
}
export interface IUpdateTaskTitle {
  type: taskInfoActions.updateTaskTitle;
  payload: ITaskInfo;
}
export interface IAddNewSubTask {
  type: taskInfoActions.addNewSubTask;
  payload: SubTask;
}

export type TaskInfoAction =
  | InitialTasksInfo
  | IUpdateDescription
  | IAddNewSubTask
  | IAddNewComment
  | IUpdateTaskTitle
  | IRemoveTask
  | IUpdatePriority
  | IUpdateStatus
  | IUpdateName;
