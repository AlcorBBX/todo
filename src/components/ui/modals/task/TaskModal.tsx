import { CancelButton } from "../..";
import { Portal } from "../../../../helpers/portal/Portal";
import { useOutside } from "../../../../hooks";
import { ITask } from "../../../../types/task.interface";

import styles from "./task-modal.module.scss";

interface TaskModalChildProps {
  onClick: React.MouseEventHandler<HTMLElement>;
}

interface TaskModalProps {
  task: ITask;
  children: (props: TaskModalChildProps) => React.ReactElement;
}

export const TaskModal = ({ children, task }: TaskModalProps) => {
  const { ref, anchorEl, setAnchorEl } = useOutside();

  const CLick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
    console.log(e.target);
  };

  console.log(task);
  return (
    <>
      {anchorEl && (
        <Portal>
          <div className={styles.modal} style={{ top: "0", left: "0" }}>
            <div ref={ref} className={styles.modalInner}>
              <div>
                <CancelButton />
              </div>
              <NameTaskModal task={task} />

              <DescriptionTaskModal />
            </div>
          </div>
        </Portal>
      )}
      {children({
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          CLick(e);
        },
      })}
    </>
  );
};

interface INameTaskModalProps {
  task: ITask;
}

export const NameTaskModal = ({ task }: INameTaskModalProps) => {
  return (
    <div>
      <div>
        <p>{task.title}</p>
        <p>
          В колонке <span>{task.type}</span>
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
