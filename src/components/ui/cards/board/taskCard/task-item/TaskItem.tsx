import React, { useState } from "react";
import { FaChromecast } from "react-icons/fa";
import { MainModal } from "../../../..";
import { useOutside } from "../../../../../../hooks";
import { ITask } from "../../../../../../types/task.interface";
import styles from "./task.module.scss";

interface ITaskItemProps {
  task: ITask;
}

//To Do: destructure components in other files

export const TaskItem = ({ task }: ITaskItemProps) => {
  const { ref, anchorEl, setAnchorEl } = useOutside();
  const OpenModal = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const Modal: JSX.Element = (
    <MainModal
      refEl={ref}
      anchorEl={anchorEl}
      title='Task info'
      setAnchorEl={setAnchorEl}
    >
      <div className={styles.contentModal}>
        <NameTaskModal task={task} />
        <DescriptionTaskModal />
      </div>
    </MainModal>
  );

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
      {Modal}
    </div>
  );
};

interface INameTaskModalProps {
  task: ITask;
}

export const NameTaskModal = ({ task }: INameTaskModalProps) => {
  return (
    <Card>
      <div className={styles.nameBlock}>
        <p className={styles.name}>{task.title}</p>
        <p className={styles.positionInfo}>
          в колонке <span>{task.type}</span>
        </p>
      </div>
    </Card>
  );
};

export const DescriptionTaskModal = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [description, setDescription] = useState<string>(
    "Attach designs conveniently using Power-ups"
  );

  return (
    <Card title='Описание'>
      {!isEdit ? (
        <div>
          <p onClick={() => setIsEdit(true)}>{description}</p>
        </div>
      ) : (
        <div>
          <input
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <div className={styles.actions}>
            <button>Save</button>
            <button onClick={() => setIsEdit(false)}>Cancel</button>
          </div>
        </div>
      )}
    </Card>
  );
};

interface ICommentsTaskModalProps {}

export const CommentsTaskModal = ({}: ICommentsTaskModalProps) => {
  return <div></div>;
};

export const EnclosureTaskModal = () => {
  return <div></div>;
};

interface ICardModalItem {
  children: React.ReactNode;
  title?: string;
}

export const Card = ({ children, title }: ICardModalItem) => {
  return (
    <div className={styles.cardModalItem}>
      <div>
        <FaChromecast className={styles.icon} />
      </div>
      <div>
        {title && <p className={styles.cardModalTitle}>{title}</p>}
        <div>{children}</div>
      </div>
    </div>
  );
};
