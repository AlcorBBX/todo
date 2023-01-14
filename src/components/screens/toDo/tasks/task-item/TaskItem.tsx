import { useOutside } from "../../../../../hooks";
import { ITask } from "../../../../../types/task.interface";
import { MainModal } from "../../../../ui";
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
      <TaskContentModal taskTitle={task.title} taskType={task.type} />
    </MainModal>
  );

  return (
    <div>
      <TaskCard>
        {props => (
          <p {...props} onDragEnd={(e) => console.log(e)}  className={styles.taskItem} onClick={e => OpenModal(e)}>
            {task.title}
          </p>
        )}
      </TaskCard>
      {Modal}
    </div>
  );
};
