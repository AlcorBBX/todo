import { useLayoutEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { localStorageWrapper } from "../../../../helpers/storage";
import { useTypedSelector } from "../../../../hooks";
import { addNewProject } from "../../../../store/todoProject/project-actions";
import { Field, MainButton } from "../../../ui";
import { ColorsProject } from "./ColorsProject";

import styles from "./content-modal.module.scss";

export const ContentModaL = () => {
  const { projects } = useTypedSelector(state => state.projects);
  const dispatch = useDispatch();

  const [color, setColor] = useState("0079bf");

  const [inputValue, setInputValue] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>();

  useLayoutEffect(() => {
    !inputValue ? setError("Укажите название доски") : setError("");
  }, [inputValue]);

  const textRef = useRef("");
  textRef.current = inputValue;
  const createNewProject = () => {
    if (textRef.current) {
      // const newProject = [...projects];
      const id = Date.now() * 2;
      // newProject.push({
      //   id: id,
      //   name: textRef.current,
      //   backgroundColor: color,
      // });

      // localStorageWrapper.set("projects", newProject);
      dispatch(
        addNewProject({
          id: id,
          name: textRef.current,
          backgroundColor: color,
        })
      );
      setInputValue("");
      // setAnchorEl(null);
    }
  };
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
          <MainButton onClick={() => createNewProject()}>Создать</MainButton>
        </div>
      </div>
    </>
  );
};
