import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./overlaying-modal.module.scss";

export interface ModalLayoutProps {
  children: React.ReactNode;
  refEl: React.RefObject<HTMLDivElement>;
  anchorEl: HTMLElement | null;
}
export const ModalLayout = ({
  children,
  refEl,
  anchorEl,
}: ModalLayoutProps) => {
  const [scale, setScale] = useState(false);
  useEffect(() => {
    if (!anchorEl) {
      setScale(() => true);
    } else {
      setScale(() => false);
    }
  }, [anchorEl]);

  return (
    <>
      <div className={styles.overlay} role='button'></div>
      <motion.div
        initial={{rotate: 70, scale: Number(scale) }}
        animate={{ rotate: 0, scale: Number(!scale) }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className={styles.modal}
        // role='button'
      >
        <div ref={refEl} className={styles.modalInner} role='dialog'>
          {children}
        </div>
      </motion.div>
    </>
  );
};
