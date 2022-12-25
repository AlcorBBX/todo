import styles from "./project-modal.module.scss";

interface IColorsProject {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

export const ColorsProject = ({ color, setColor }: IColorsProject) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#0079bf",
        }}
        className={styles.colorsCard}
        onClick={() => setColor(() => "#0079bf")}
      >{color === "#0079bf" && 'picked' }</div>
      <div
        style={{
          backgroundColor: "#d29034",
        }}
        className={styles.colorsCard}
        onClick={() => setColor(() => "#d29034")}
      >{color === "#d29034" && 'picked' }</div>
      <div
        style={{
          backgroundColor: "#519839",
        }}
        className={styles.colorsCard}
        onClick={() => setColor(() => "#519839")}
      >{color === "#519839" && 'picked' }</div>
      <div
        style={{
          backgroundColor: "#b04632",
        }}
        className={styles.colorsCard}
        onClick={() => setColor(() => "#b04632")}
      >{color === "#b04632" && 'picked' }</div>
      <div
        style={{
          backgroundColor: "#89609e",
        }}
        className={styles.colorsCard}
        onClick={() => setColor(() => "#89609e")}
      >{color === "#89609e" && 'picked' }</div>
    </>
  );
};
