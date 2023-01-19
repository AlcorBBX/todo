import { Card } from "../card/Card";

import styles from "./task-card.module.scss";

type Booleanish = boolean | "true" | "false";
export interface TaskCardChildProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  onDrag?: React.DragEventHandler<HTMLElement> | undefined;
  onDragEnter?: React.DragEventHandler<HTMLElement> | undefined;
  onDragEnd?: React.DragEventHandler<HTMLElement> | undefined;
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
        onDrag: e => {},
        onDragEnter: e => {},
        onDragEnd: e => {},
      })}
    </Card>
  );
};
