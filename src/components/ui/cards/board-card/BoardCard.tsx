import { Card } from "../card/Card";

import styles from "./board-card.module.scss";

export interface BoardCardProps {
  title: string;
  extra?: React.ReactNode;
  headStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  children: React.ReactNode;
  cover?: React.ReactNode;
  actions?: React.ReactNode[];

  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
}

export const BoardCard = ({
  cover,
  title,
  extra,
  actions,
  children,
  headStyle,
  bodyStyle,
}: BoardCardProps) => {
  const boardTitle = <p className={styles.boardTitle}>{title}</p>;

  return (
    <Card
      cover={cover}
      title={boardTitle}
      extra={extra}
      headStyle={headStyle}
      bodyStyle={bodyStyle}
      actions={actions}
      className={styles.card}
    >
      {children}
    </Card>
  );
};
