import { Section } from "@components/section";
import { BoardItem } from "./board-item/BoardItem";

export const Boards = () => {
  return (
    <>
      <Section delay={0.1}>
        <BoardItem title='Queue' />
      </Section>
      <Section delay={0.3}>
        <BoardItem title='Develop' />
      </Section>
      <Section delay={0.5}>
        <BoardItem title='Done' />
      </Section>
    </>
  );
};
