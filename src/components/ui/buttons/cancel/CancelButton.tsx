import { FC } from "react";
import { IButton } from "../../../../types/button.interface";

import styles from "./cancel-button.module.scss";

export const CancelButton: FC<IButton> = ({ ...rest }) => {
  return (
    <button {...rest} className={styles.button}>
      X
    </button>
  );
};
