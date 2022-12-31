import { Section } from "../../../section";
import { BoardItem } from "./board-item/BoardItem";
import { TaskCard } from "./taskCard/TaskCard";

export const BoardCard = () => {
  return (
    <>
      <Section delay={0.4}>
        <BoardItem title='Queue'>
          {props => <TaskCard title='Queue' />}
        </BoardItem>
      </Section>
      <Section delay={0.5}>
        <BoardItem title='Develop'>
          {props => <TaskCard title='Develop' />}
        </BoardItem>
      </Section>
      <Section delay={0.6}>
        <BoardItem title='Done'>{props => <TaskCard title='Done' />}</BoardItem>
      </Section>
    </>
  );
};
