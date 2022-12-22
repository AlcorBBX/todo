import { BoardItem } from "./board-item/BoardItem";
import { TaskCard } from "./taskCard/TaskCard";

export const BoardCard = () => {
  return (
    <>
      <BoardItem title='Queue'>{props => <TaskCard title='Queue' />}</BoardItem>
      <BoardItem title='Develop'>
        {props => <TaskCard title='Develop' />}
      </BoardItem>
      <BoardItem title='Done'>{props => <TaskCard title='Done' />}</BoardItem>
    </>
  );
};
