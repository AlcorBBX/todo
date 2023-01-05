import { Card } from "../card/Card";

import styles from "./task-card.module.scss";

export interface ButtonChildProps {
  onClick: React.MouseEventHandler<HTMLElement>;
}

export interface TaskCardProps {
  children: (props: ButtonChildProps) => React.ReactElement;
  bodyStyle?: React.CSSProperties;
  handleClick?: () => void;
}

export const TaskCard = ({
  children,
  bodyStyle,
  handleClick,
}: TaskCardProps) => {
  return (
    <Card className={styles.card} bodyStyle={bodyStyle}>
      {children({
        onClick: () => handleClick,
      })}
    </Card>
  );
};
