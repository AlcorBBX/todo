import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../../../hooks";
import { TaskItem } from "./task-item/TaskItem";

export interface TaskProps{
  title: string;
}

export const Tasks = ({title}: TaskProps) => {
  const { id } = useParams();
  const { tasks } = useTypedSelector(state => state.todo);
  return (
    <>
      {tasks.length
        ? tasks.map(
            task =>
              task.type.toLowerCase() === title.toLowerCase() &&
              task.projectId === Number(id) && (
                <TaskItem task={task} key={task.id} />
              )
          )
        : null}
    </>
  );
};
