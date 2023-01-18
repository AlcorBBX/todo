import { MainModal } from "@components/ui";
import { useOutside } from "@hooks/useOutside";
//@ts-ignore
import { ITask } from "@types/task.interface";
import { TaskCard } from "../../../../ui/cards/task-card/TaskCard";
import { TaskContentModal } from "../modal/TaskContentModal";

import styles from "./task-item.module.scss";
export interface TaskItemProps {
  task: ITask;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const { ref, anchorEl, setAnchorEl } = useOutside();
  const OpenModal = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const Modal = (
    <MainModal
      anchorEl={anchorEl}
      refEl={ref}
      setAnchorEl={setAnchorEl}
      title='Task Info'
    >
      <TaskContentModal task={task} />
    </MainModal>
  );

  return (
    <div>
      <TaskCard>
        {props => (
          <p {...props} className={styles.taskItem} onClick={e => OpenModal(e)}>
            {task.title}
          </p>
        )}
      </TaskCard>
      {Modal}
    </div>
  );
};
