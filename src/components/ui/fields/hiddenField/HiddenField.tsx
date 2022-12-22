import { forwardRef } from "react";
import { IField } from "../../../../types/field.interface";
import styles from "./hidden-field.module.scss";

export const HiddenField = forwardRef<HTMLInputElement, IField>(
  ({ type = "text", ...rest }, ref) => {
    return <input className={styles.field} {...rest} ref={ref} type={type} />;
  }
);
