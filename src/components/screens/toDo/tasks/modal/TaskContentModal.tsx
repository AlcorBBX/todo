import { TaskDescription } from "./TaskDescription";
import { TaskName } from "./TaskName";
//@ts-ignore
import { ITask } from "@types/task.interface";

import styles from "./modal-content.module.scss";

export interface TaskContentModalProps {
  task: ITask;
}

export const TaskContentModal = ({ task }: TaskContentModalProps) => {
  return (
    <div className={styles.modalContainer}>
      <TaskName task={task} />
      <TaskDescription />
    </div>
  );
};
