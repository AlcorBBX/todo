import { ITask } from "../../../../../types/task.interface";
import { TaskDescription } from "./TaskDescription";
import { TaskName } from "./TaskName";

export interface TaskContentModalProps {
  task?: ITask;
  // taskInfo:
  taskTitle: string;
  taskType: string;
}

export const TaskContentModal = ({
  task,
  // taskInfo,
  taskTitle,
  taskType,
}: TaskContentModalProps) => {
  return (
    <>
      <TaskName taskTitle={taskTitle} taskType={taskType} />
      <TaskDescription />
    </>
  );
};
