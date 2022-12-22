import React, { useLayoutEffect, useRef, useState } from "react";
import { Portal } from "..";
import styles from "./modal.module.scss";
// eslint-disable-next-line no-lone-blocks
{
  /* <Modal title='qw'>{props => <button {...props}>Open Modal</button>}</Modal> */
}

interface ModalChildProps {
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;

  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

interface ModalProps {
  title: string;
  children: (props: ModalChildProps) => React.ReactElement;
}

export const Modal = ({ children, title }: ModalProps) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const ModalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (ModalRef.current && !ModalRef.current.contains(event.target)) {
      setAnchorEl(null);
    }
  };

  useLayoutEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [anchorEl]);

  useLayoutEffect(() => {
    const ModalEl = ModalRef.current;

    if (!anchorEl || !ModalEl) {
      return;
    }

    const anchorRect = anchorEl.getBoundingClientRect();
    const ModalRect = ModalEl.getBoundingClientRect();

    const TOP_SPACE = 5;

    setPosition({
      top: 0,
      left: 0,
    });
  }, [anchorEl]);

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
            <div ref={ModalRef}>
              <div>
                <span className={styles.icon}></span>
                <div>
                  <textarea className={styles.titleTextArea} />
                  <p>
                    в колонке <span>Список дел</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Portal>
      )}
      {children({
        // onMouseLeave: () => setAnchorEl(null),
        // onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
        //   setAnchorEl(e.currentTarget);
        // },
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          setAnchorEl(e.currentTarget);
        },
      })}
    </>
  );
};
