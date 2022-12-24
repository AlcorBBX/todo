import { Portal } from "../../../../helpers/portal/Portal";
import { useOutside } from "../../../../hooks";

import styles from "./task-modal.module.scss";

interface TaskModalChildProps {
  onClick: React.MouseEventHandler<HTMLElement>;
}

interface TaskModalProps {
  children: (props: TaskModalChildProps) => React.ReactElement;
}

export const TaskModal = ({ children }: TaskModalProps) => {
  const { ref, anchorEl, setAnchorEl } = useOutside();

  return (
    <>
      {anchorEl && (
        <Portal>
          <div className={styles.modal} style={{ top: "0", left: "0" }}>
            <div ref={ref} className={styles.modalInner}>
              <p>Task Modal Info</p>
            </div>
          </div>
        </Portal>
      )}
      {children({
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          setAnchorEl(e.currentTarget);
        },
      })}
    </>
  );
};
