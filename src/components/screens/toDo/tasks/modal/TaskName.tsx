import { ContentItemCard } from "./ContentItemCard";

import styles from "./modal-content.module.scss";

interface NameTaskModalProps {
  // task: ITask;
  taskTitle: string;
  taskType: string;
}

export const TaskName= ({ taskTitle, taskType }: NameTaskModalProps) => {
  return (
    <ContentItemCard>
      <div className={styles.nameBlock}>
        <p className={styles.name}>{taskTitle}</p>
        <p className={styles.positionInfo}>
          в колонке <span>{taskType}</span>
        </p>
      </div>
    </ContentItemCard>
  );
};
