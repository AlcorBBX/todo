import { Card } from "../card/Card";

import styles from "./project-card.module.scss";

interface IProjectProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  extra?: React.ReactNode;
  backgroundColor: string | undefined;
  handleClick: () => void;
}

export const ProjectCard = ({
  title,
  extra,
  backgroundColor,
  handleClick,
}: IProjectProps) => {
  const cardTitle = <p>{title}</p>;

  return (
    <Card
      title={cardTitle}
      extra={extra}
      className={styles.card}
      onClick={() => handleClick()}
      style={{ background: backgroundColor }}
    />
  );
};
