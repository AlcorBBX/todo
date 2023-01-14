import { Boards } from "./boards/Boards";

import styles from "./to-do.module.scss";

export const ToDo = () => {
  return (
    <>
      <div className={styles.task}>
        <Boards />
      </div>
    </>
  );
};
