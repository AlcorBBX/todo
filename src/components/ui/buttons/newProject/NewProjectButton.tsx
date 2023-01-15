//@ts-ignore
import { IButton } from "@types/button.interface";
import { FC } from "react";

import styles from "./project-button.module.scss";

interface INewProjectButton extends IButton {
  text: string;
}

export const NewProjectButton: FC<INewProjectButton> = ({ text, ...rest }) => {
  return (
    <button {...rest} className={styles.button}>
      {text}
    </button>
  );
};
