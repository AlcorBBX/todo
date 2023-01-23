import { useNavigate, useLocation } from "react-router-dom";

import styles from "./navigate.module.scss";
export interface NavigateProps {
  namePage: string;
}

export const Navigate = ({ namePage }: NavigateProps) => {
  const history = useNavigate();

  const goBack = () => { history(-1) }
  //const getNameProject = () => { return useLocation().state }
  return (
    <>
      <article className={styles.container}>
        <button
          role='link'
          className={styles.link}
          onClick={() => goBack}
        >
          Projects
        </button>
        <span className={styles.icon}>{">"}</span>
        <h3 className={styles.namePage}>{namePage}</h3>
      </article>
    </>
  );
};
