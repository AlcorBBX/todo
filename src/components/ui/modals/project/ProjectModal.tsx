import React, { useLayoutEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { CancelButton, Field, MainButton } from "../..";
import { Portal } from "../../../../helpers/portal/Portal";
import { localStorageWrapper } from "../../../../helpers/storage";
import { useOutside, useTypedSelector } from "../../../../hooks";
import { addNewProject } from "../../../../store/todoProject/project-actions";
import { ColorsProject } from "./ColorsProject";

import styles from "./project-modal.module.scss";

interface ModalChildProps {
  onClick: React.MouseEventHandler<HTMLElement>;
}

interface ModalProps {
  children: (props: ModalChildProps) => React.ReactElement;
}

export const ProjectModal = ({ children }: ModalProps) => {
  const { projects } = useTypedSelector(state => state.projects);
  const dispatch = useDispatch();

  const { ref, anchorEl, setAnchorEl } = useOutside();

  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [inputValue, setInputValue] = useState<string>("");
  const [color, setColor] = useState("0079bf");

  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>();

  useLayoutEffect(() => {
    !inputValue ? setError("Укажите название доски") : setError("");
  }, [inputValue]);

  const textRef = useRef("");
  textRef.current = inputValue;
  const createNewProject = () => {
    if (textRef.current) {
      const newProject = [...projects];
      const id = Date.now() * 2;
      newProject.push({
        id: id,
        name: textRef.current,
        backgroundColor: color,
      });

      localStorageWrapper.set("projects", newProject);
      dispatch(
        addNewProject({
          id: id,
          name: textRef.current,
          backgroundColor: color,
        })
      );
      setInputValue("");
      setAnchorEl(null);
    }
  };

  return (
    <>
      {anchorEl && (
        <Portal>
          <div
            ref={ref}
            className={styles.modal}
            style={{
              top: position.top,
              left: position.left,
            }}
          >
            <div className={styles.header}>
              <div></div>
              <p>Создать доску</p>
              <CancelButton onClick={() => setAnchorEl(null)} />
            </div>

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
                  ref={inputRef}
                  value={inputValue}
                  setValue={setInputValue}
                  error={error}
                />
              </div>
              {/* <div className={styles.tagsDropdown}>
                <select>
                  <option>Рабочее пространство</option>
                  <option>Избранное</option>
                </select>
              </div> */}
              <div className={styles.buttons}>
                <MainButton onClick={() => createNewProject()}>
                  Создать
                </MainButton>
              </div>
            </div>
          </div>
        </Portal>
      )}
      {children({
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          setAnchorEl(e.currentTarget);
        },
      })}
    </>
  );
};
