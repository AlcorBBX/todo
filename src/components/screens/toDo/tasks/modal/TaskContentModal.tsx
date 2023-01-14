import { ITask } from "../../../../../types/task.interface";
import { TaskDescription } from "./TaskDescription";
import { TaskName } from "./TaskName";

import styles from './modal-content.module.scss'
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
    <div className={styles.modalContainer}>
      <TaskName taskTitle={taskTitle} taskType={taskType} />
      <TaskDescription />
    </div>
  );
};
