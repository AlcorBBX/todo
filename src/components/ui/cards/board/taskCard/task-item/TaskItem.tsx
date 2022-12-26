import React from "react";
import { OverlayingModal, MainModal } from "../../../..";
import { useOutside } from "../../../../../../hooks";
import { ITask } from "../../../../../../types/task.interface";
import styles from "./task.module.scss";

interface ITaskItemProps {
  task: ITask;
}

export const TaskItem = ({ task }: ITaskItemProps) => {
  const { ref, anchorEl, setAnchorEl } = useOutside();

  const OpenModal = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <div className={styles.card}>
      <p
        onClick={e => {
          OpenModal(e);
        }}
        key={task.id}
      >
        {task.title}
      </p>

      <MainModal
        refEl={ref}
        anchorEl={anchorEl}
        title='Task info'
        setAnchorEl={setAnchorEl}
      >
        <NameTaskModal task={task} />
        <DescriptionTaskModal />
      </MainModal>
    </div>
  );
};

interface INameTaskModalProps {
  task: ITask;
}

export const NameTaskModal = ({ task }: INameTaskModalProps) => {
  return (
    <div className={styles.nameBlock}>
      <div className={styles.nameBlockItem}>
        <p>img</p>
      </div>

      <div className={styles.nameBlockItem}>
        <p className={styles.name}>{task.title}</p>
        <p className={styles.positionInfo}>
          в колонке <span>{task.type}</span>
        </p>
      </div>
    </div>
  );
};

export const DescriptionTaskModal = () => {
  return <div></div>;
};

interface ICommentsTaskModalProps {}

export const CommentsTaskModal = ({}: ICommentsTaskModalProps) => {
  return <div></div>;
};

export const EnclosureTaskModal = () => {
  return <div></div>;
};
