import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useOutside, useTypedSelector } from "../../../hooks";
import { StorageItem } from "../../../hooks/useStorageItem";
import { BoardCard } from "../../ui";
import { BoardCard as BoardCards } from "../../ui/cards/board-card/BoardCard";
import { FooterActions } from "../../ui/cards/board/board-item/board-actions/FooterActions";
import { Tasks } from "./tasks/Tasks";

import styles from "./to-do.module.scss";

export const ToDo = () => {
  const { ref, anchorEl, setAnchorEl } = useOutside();
  const { id } = useParams();
  const { tasks } = useTypedSelector(state => state.todo);
  const dispatch = useDispatch();

  const onClickHandler = async () => {
    const newItem = {
      id: Date.now() * 2,
      type: "",
      title: "",
      projectId: Number(id),
    };
    // StorageItem(...tasks, "tasks", newItem);
    // const inputText = textRef.current;
    // if (inputText.length) {
    //   const newProject = [...tasks];
    //   const idR = Date.now() * 2;
    //   newProject.push({
    //     id: idR,
    //     type: title,
    //     title: inputText,
    //     projectId: Number(id),
    //   });
    //   localStorageWrapper.set("tasks", newProject);
    //   dispatch(
    //     addNewTask({
    //       id: idR,
    //       type: title,
    //       title: inputText,
    //       projectId: Number(id),
    //     })
    //   );
    //   setText("");
    // }
  };

  const actions = [
    <FooterActions
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      onClickHandler={onClickHandler}
    />,
  ];

  return (
    <>
      <div className={styles.task}>
        <BoardCard />
      </div>
      {/* <div className={styles.task}>
        <BoardCards title='Queue' actions={actions}>
          <Tasks title='Queue' />
        </BoardCards>

        <BoardCards title='Develop' actions={actions}>
          <Tasks title='Develop' />
        </BoardCards>

        <BoardCards title='Done' actions={actions}>
          <Tasks title='Done' />
        </BoardCards>
      </div> */}
    </>
  );
};
