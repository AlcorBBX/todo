import React, { useState } from "react";
import { Portal } from "../../../helpers/portal/Portal";
import { useOutside } from "../../../hooks";

import styles from "./modal.module.scss";

interface ModalChildProps {
  onClick: React.MouseEventHandler<HTMLElement>;
}

interface ModalProps {
  children: (props: ModalChildProps) => React.ReactElement;
}

export const Modal = ({ children }: ModalProps) => {
  const { ref, anchorEl, setAnchorEl } = useOutside();

  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

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
              {children({
                onClick: (e: React.MouseEvent<HTMLElement>) => {
                  setAnchorEl(null);
                },
              })}
            </div>
          </div>
        </Portal>
      )}
      <OpenModalButton onClick={handleClick} />
    </>
  );
};

interface IOpenModalButton {
  onClick: React.MouseEventHandler<HTMLElement>;
}

export const OpenModalButton = ({ onClick }: IOpenModalButton) => {
  return <button onClick={onClick}>Open Modal</button>;
};
