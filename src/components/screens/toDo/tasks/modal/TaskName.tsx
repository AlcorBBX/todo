//@ts-ignore
import { ITask } from "@types/task.interface";
import { useState } from "react";
import { ContentItemCard } from "./ContentItemCard";

import styles from "./modal-content.module.scss";

interface NameTaskModalProps {
  task: ITask;
}

export const TaskName = ({ task }: NameTaskModalProps) => {
  return (
    <ContentItemCard>
      <div className={styles.nameBlock}>
        <p className={styles.name}>{task.title}</p>
        <Title taskId={task.id} />
        <p className={styles.positionInfo}>
          в колонке <span>{task.type}</span>
        </p>
      </div>
    </ContentItemCard>
  );
};

export interface TitleProps {
  taskId: number;
}
//TODO: change the value in the store via useDebounce
export const Title = ({ taskId }: TitleProps) => {
  const [value, setValue] = useState("");
  return (
    <input
      // placeholder={value}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};
