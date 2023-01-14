import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useOutside } from "../../../../../hooks";
import { addNewTask } from "../../../../../store/todoTask/task-actions";
import { BoardCard } from "../../../../ui/cards/board-card/BoardCard";
import { Tasks } from "../../tasks/Tasks";
import { BoardActions } from "../actions/BoardActions";

export interface BoardItemProps {
  title: string;
}

export const BoardItem = ({ title }: BoardItemProps) => {
  const { ref, anchorEl, setAnchorEl } = useOutside();
  const [value, setValue] = useState<string>("");
  const { id } = useParams();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    // const inputText = valueRef.current;
    if (value) {
      const idR = Date.now() * 2;

      dispatch(
        addNewTask({
          id: idR,
          type: title,
          title: value,
          projectId: Number(id),
        })
      );
      setValue("");
    }
  };
  const actions = [
    <BoardActions
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      onClickHandler={onClickHandler}
    />,
  ];
  return (
    <div ref={ref}>
      <BoardCard title={title} actions={actions}>
        <Tasks title={title} />
        {anchorEl && <SendInput text={value} setText={setValue} />}
      </BoardCard>
    </div>
  );
};

export interface SendInputProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}
export const SendInput = ({ setText, text }: SendInputProps) => {
  return <input value={text} onChange={e => setText(e.target.value)} />;
};
