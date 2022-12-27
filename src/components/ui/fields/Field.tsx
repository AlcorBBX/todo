import { forwardRef } from "react";
import { IField } from "../../../types/field.interface";

import styles from "./field.module.scss";

interface IFieldProps extends IField {
  error?: string;
  type?: string;
  value?: string;
  title: string;
  require?: boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Field = forwardRef<HTMLInputElement, IFieldProps>(
  ({ error, type = "text", value, title, require = false, setValue }, ref) => {
    return (
      <div className={styles.field}>
        <p className={styles.fieldName}>
          {title} {require && <span style={{ color: "red" }}>*</span>}
        </p>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        {error && <div className={styles.error}>{error}</div>}
      </div>
    );
  }
);
