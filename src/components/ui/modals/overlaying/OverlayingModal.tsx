import { Portal } from "../../../../helpers/portal/Portal";

import styles from "./overlaying-modal.module.scss";

interface IOverlayingModalProps {
  // children: (props: ModalChildProps) => React.ReactElement;
  children: React.ReactNode;
  refEl: React.RefObject<HTMLDivElement>;
  anchorEl: HTMLElement | null;
}

export const OverlayingModal = ({
  children,
  refEl,
  anchorEl,
}: IOverlayingModalProps) => {
  return (
    <>
      {anchorEl && (
        <Portal>
          <div className={styles.modal} role='button'>
            <div ref={refEl} className={styles.modalInner}  role='dialog'>
              {children}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};
