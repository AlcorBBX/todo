import { IButton } from "../../../../types/button.interface";

import styles from "./main-button.module.scss";

interface MainButtonProps extends IButton {
  children: React.ReactNode;
}

export const MainButton = ({ children, ...rest }: MainButtonProps) => {
  return (
    <button {...rest} className={styles.button}>
      {children}
    </button>
  );
};
