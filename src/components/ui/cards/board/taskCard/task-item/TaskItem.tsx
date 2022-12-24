import { TaskModal } from "../../../..";
import { ITask } from "../../../../../../types/task.interface";
import styles from "./task.module.scss";

interface ITaskItemProps {
  task: ITask;
}

export const TaskItem = ({ task }: ITaskItemProps) => {
  return (
    <div className={styles.card}>
      <TaskModal>{props => <p {...props}>{task.title}</p>}</TaskModal>
    </div>
  );
};
