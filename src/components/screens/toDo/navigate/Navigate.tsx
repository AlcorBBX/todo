import { useNavigate } from "react-router-dom";

import styles from "./navigate.module.scss";
export interface NavigateProps {
  namePage: string;
}

export const Navigate = ({ namePage }: NavigateProps) => {
  const history = useNavigate();
  return (
    <>
      <article className={styles.container}>
        <button
          role='link'
          className={styles.link}
          onClick={() => history("/")}
        >
          Projects
        </button>
        <span className={styles.icon}>{">"}</span>
        <h3 className={styles.namePage}>{namePage}</h3>
      </article>
    </>
  );
};
