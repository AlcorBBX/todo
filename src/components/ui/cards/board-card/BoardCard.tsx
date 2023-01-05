import { Card } from "../card/Card";

import styles from './board-card.module.scss'

export interface BoardCardProps {
  title: string;
  extra?: React.ReactNode;
  headStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  children: React.ReactNode;
  cover?: React.ReactNode;
  actions?: React.ReactNode[];
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
  return (
    <Card
      cover={cover}
      title={title}
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
