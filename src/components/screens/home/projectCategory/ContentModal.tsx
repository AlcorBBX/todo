import { useState } from "react";
import { ColorsProject } from "../../../ui/modals/project/ColorsProject";

import styles from "./content-modal.module.scss";

export const ContentModaL = () => {
  const [color, setColor] = useState("0079bf");

  return (
    <>
      <div className={styles.content}>
        <div className={styles.themes}>
          <p>Фон</p>
          <div className={styles.picturesTheme}></div>
          <div className={styles.colorTheme}>
            <ColorsProject color={color} setColor={setColor} />
          </div>
        </div>
        <div className={styles.input}>
          {/* <Field
            ref={inputRef}
            value={inputValue}
            setValue={setInputValue}
            error={error}
          /> */}
        </div>
        {/* <div className={styles.tagsDropdown}>
                <select>
                  <option>Рабочее пространство</option>
                  <option>Избранное</option>
                </select>
              </div> */}
        <div className={styles.buttons}>
          {/* <MainButton onClick={() => createNewProject()}>Создать</MainButton> */}
        </div>
      </div>
    </>
  );
};