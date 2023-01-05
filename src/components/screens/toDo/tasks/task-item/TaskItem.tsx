import { ITask } from "../../../../../types/task.interface";
import { TaskCard } from "../../../../ui/cards/task-card/TaskCard";

export interface TaskItemProps {
  task: ITask;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <TaskCard>{props => <button {...props}>{task.title}</button>}</TaskCard>
  );
};
