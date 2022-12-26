import React, { useState } from "react";
import { Portal } from "../../../helpers/portal/Portal";
import { useOutside } from "../../../hooks";

import styles from "./modal.module.scss";

interface ModalChildProps {
  // onClick: React.MouseEventHandler<HTMLElement>;
}

interface ModalProps {
  // children: (props: ModalChildProps) => React.ReactElement;
  children: React.ReactNode
  ref: React.RefObject<HTMLDivElement>
  anchorEl: HTMLElement | null
}

export const Modal = ({ children, ref, anchorEl }: ModalProps) => {
  // const { ref, anchorEl, setAnchorEl } = useOutside();

  const [position, setPosition] = useState({ top: 0, left: 0 });

  return (
    <>
      {anchorEl && (
        <Portal>
          <div
            className={styles.modal}
            style={{
              top: position.top,
              left: position.left,
            }}
          >
            <div ref={ref} className={styles.modalInner}>
              {children}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};
