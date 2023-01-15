import { BoardCard } from "@components/ui";
import { useOutside } from "@hooks/useOutside";
import { addNewTask } from "@store/todoTask/task-actions";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { BoardActions } from "../actions/BoardActions";
import { CreateTaskInput } from "./CreateTaskInput";
import { Tasks } from "../../tasks/Tasks";

export interface BoardItemProps {
  title: string;
}

const TasksMemo = memo(Tasks);

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
        <TasksMemo title={title} />
        {anchorEl && <CreateTaskInput text={value} setText={setValue} />}
      </BoardCard>
    </div>
  );
};
