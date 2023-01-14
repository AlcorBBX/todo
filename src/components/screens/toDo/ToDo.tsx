import { Boards } from "./boards/Boards";
// import { Navigate } from "./navigate/Navigate";

import styles from "./to-do.module.scss";

export const ToDo = () => {
  return (
    <>
      {/* //TODO <Navigate namePage='Test' /> */}
      <main className={styles.task}>
        <Boards />
      </main>
    </>
  );
};
