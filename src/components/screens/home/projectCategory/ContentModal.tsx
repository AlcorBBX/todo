import { memo, useCallback, useLayoutEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addNewProject } from "../../../../store/todoProject/project-actions";
import { Field, MainButton } from "../../../ui";
import { ColorsProject } from "./ColorsProject";

import styles from "./content-modal.module.scss";

const ColorsProjectMemo = memo(ColorsProject);
const MainButtonMemo = memo(MainButton);

export const ContentModaL = () => {
  const dispatch = useDispatch();

  const [color, setColor] = useState<string>("#0079bf");

  const [inputValue, setInputValue] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>();

  useLayoutEffect(() => {
    !inputValue ? setError("Укажите название доски") : setError("");
  }, [inputValue]);

  const textRef = useRef("");
  textRef.current = inputValue;
  const createNewProject = useCallback(() => {
    if (textRef.current && color.length > 1) {
      const id = Date.now() * 2;
      dispatch(
        addNewProject({
          id: id,
          name: textRef.current,
          backgroundColor: color,
        })
      );
      setInputValue("");
    }
  }, [color]);
  return (
    <>
      <div className={styles.content}>
        <div className={styles.themes}>
          <p>Фон</p>
          <div className={styles.picturesTheme}></div>
          <div className={styles.colorTheme}>
            <ColorsProjectMemo color={color} setColor={setColor} />
          </div>
        </div>
        <div className={styles.input}>
          <Field
            title='Заголовок доски'
            require={true}
            ref={inputRef}
            value={inputValue}
            setValue={setInputValue}
            error={error}
          />
        </div>
        <div className={styles.buttons}>
          <MainButtonMemo onClick={() => createNewProject()}>
            Создать
          </MainButtonMemo>
        </div>
      </div>
    </>
  );
};
