export interface ITaskInfo {
  id: number;
  description: string;
  comments: Comment[];
  subTasks: SubTask[];
  workingTime: number;
  priority: Priority;
  status: Status;
  // files:

  createAt: Date;
  updateAt: Date;
  completeAt: Date;

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
  initialTasksInfo = "INITIAL_TASKS_INFO",
  updateDescription = "UPDATE_DESCRIPTION",
  addNewComment = "ADD_NEW_COMMENT",
  updateTaskTitle = "UPDATE_TASK_TITLE",
  addNewSubTask = "ADD_NEW_SUB_TASK",
}

export interface InitialTasksInfo {
  type: taskInfoActions.initialTasksInfo;
  payload: ITaskInfo[];
}
export interface IUpdateDescription {
  type: taskInfoActions.updateDescription;
  payload: Description;
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
  | IUpdateTaskTitle;
