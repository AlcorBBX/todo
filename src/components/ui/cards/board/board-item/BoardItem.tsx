import { memo, useCallback, useRef, useState } from "react";
import { HiddenField } from "../../..";
import { FooterActions } from "./board-actions/FooterActions";

import styles from "../board-card.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewTask } from "../../../../../store/todoTask/task-actions";
import { useTypedSelector } from "../../../../../hooks";
import { localStorageWrapper } from "../../../../../helpers/storage";

export interface BoardItemChildProps {}

interface BoardItemProps {
  title: string;
  children: (props: BoardItemChildProps) => React.ReactElement;
}

export const BoardItem = ({ children, title }: BoardItemProps) => {
  const { id } = useParams();

  const { tasks } = useTypedSelector(state => state.todo);

  const [isShow, setIsShow] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const textRef = useRef("");
  textRef.current = text;

  const dispatch = useDispatch();

  const onClickHandler = useCallback(() => {
    const inputText = textRef.current;
    if (inputText.length) {
      const newProject = [...tasks];
      const idR = Date.now() * 2;
      newProject.push({
        id: idR,
        type: title,
        title: inputText,
        projectId: Number(id),
      });

      localStorageWrapper.set("tasks", newProject);

      dispatch(
        addNewTask({
          id: idR,
          type: title,
          title: inputText,
          projectId: Number(id),
        })
      );
      setText("");
    }
  }, []);

  return (
    <>
      <div className={styles.boardCard}>
        <BoardHeader title={title} />
        <div className={styles.taskList}>
          {children({})}

          {isShow && (
            <input
              placeholder='Введите название для этой карточки'
              value={text}
              onChange={e => setText(e.target.value)}
            />
          )}
          <SendButton onClick={onClickHandler} />
        </div>
        <div className={styles.actions}>
          <FooterActions show={isShow} setIsShow={setIsShow} />
        </div>
      </div>
    </>
  );
};

interface IBoardHeader {
  title: string;
}
export const BoardHeader = memo(({ title }: IBoardHeader) => {
  return (
    <>
      <div className={styles.header}>
        <HiddenField placeholder={title} />
        <p>...</p>
      </div>
    </>
  );
});

export const SendButton = memo(({ onClick }: any) => {
  return <button onClick={onClick}>Test</button>;
});
