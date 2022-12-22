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
}

type TypeSubTask = {};

type TypeTask = {
  queu?: string;
  develop?: string;
  done?: string;
};

type TypeTaskBoard = {
  queu?: TypeQueue;
  develop?: TypeDevelop;
  done?: TypeDone;
};

type TypeQueue = TypeTask[];
type TypeDevelop = TypeTask[];
type TypeDone = TypeTask[];
