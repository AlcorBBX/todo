import { Card } from "../card/Card";

import styles from "./task-card.module.scss";

type Booleanish = boolean | "true" | "false";
export interface TaskCardChildProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  onDrag?: React.DragEventHandler<HTMLDivElement> | undefined;
  onDragEnter?: React.DragEventHandler<HTMLDivElement> | undefined;
  onDragEnd?: React.DragEventHandler<HTMLDivElement> | undefined;
  draggable?: Booleanish | undefined;
}

export interface TaskCardProps {
  children: (props: TaskCardChildProps) => React.ReactElement;
  bodyStyle?: React.CSSProperties;
  handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const TaskCard = ({ children, bodyStyle }: TaskCardProps) => {
  return (
    <Card className={styles.card} bodyStyle={bodyStyle}>
      {children({
        draggable: true,
      })}
    </Card>
  );
};
