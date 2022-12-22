import { Field, MainButton } from "../../..";
import styles from "./content-modal.module.scss";

export const ContentModal = () => {
  return (
    <div className={styles.content}>
      <div className={styles.themes}>
        <p>Фон</p>
        <div className={styles.picturesTheme}></div>
        <div className={styles.colorTheme}>
          <div
            style={{
              width: "50px",
              height: "40px",
              backgroundColor: "#0079bf",
            }}
          ></div>
          <div
            style={{
              width: "50px",
              height: "40px",
              backgroundColor: "#d29034",
            }}
          ></div>
          <div
            style={{
              width: "50px",
              height: "40px",
              backgroundColor: "#519839",
            }}
          ></div>
          <div
            style={{
              width: "50px",
              height: "40px",
              backgroundColor: "#b04632",
            }}
          ></div>
          <div
            style={{
              width: "50px",
              height: "40px",
              backgroundColor: "#89609e",
            }}
          ></div>
        </div>
      </div>
      <div className={styles.input}>
        {/* <Field error='Укажите название доски.' /> */}
      </div>
      <div className={styles.tagsDropdown}>
        <select>
          <option>Рабочее пространство</option>
          <option>Избранное</option>
        </select>
      </div>
      <div className={styles.buttons}>
        <MainButton>Создать</MainButton>
      </div>
    </div>
  );
};
