// export interface ITask {
//   id: number;
//   types?: TypeTaskBoard
//   queue?: TypeTask[];
//   develop?: TypeTask[];
//   done?: TypeTask[];
//   projectId: number;
//   length?: number;
// }
export interface ITask {
  id: number;
  title: string;
  description?: string;
  createAt?: number;
  updateAt?: number;
  priority?: string;
  subTasks?: TypeSubTask[];

  type: string;
  projectId: number;
  length?: number;
  taskInfo?: ITaskInfo;
}

export interface ITaskInfo {
  id: number;
  description: string;
  createAt: number;
  updateAt?: number;
  priority?: string;
  subTasks?: TypeSubTask[];

  taskId: number;
}

export interface TypeSubTask {
  title: string;
  description: string;
}
