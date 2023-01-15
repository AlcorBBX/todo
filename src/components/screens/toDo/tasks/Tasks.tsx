import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../../../hooks";
import { ITask } from "../../../../types/task.interface";
import { TaskItem } from "./task-item/TaskItem";

export interface TaskProps {
  title: string;
}

export const Tasks = ({ title }: TaskProps) => {
  const { id } = useParams();
  const { tasks } = useTypedSelector(state => state.todo);

  const idNum = Number(id);

  const filteredTasksMemo = useMemo(() => filterTasks(tasks), [tasks, title]);

  if (!tasks) {
    return null;
  } else if (!tasks.length) {
    return null;
  }

  function filterTasks(array: ITask[]) {
    const filteredTasks: ITask[] = [];

    array.forEach(item => {
      if (item.projectId !== idNum) {
        return;
      } else if (item.type.toLowerCase() !== title.toLowerCase()) {
        return;
      }

      filteredTasks.push(item);
    });
    return filteredTasks;
  }

  return (
    <>
      {filteredTasksMemo.map(task => (
        <TaskItem task={task} key={task.id} />
      ))}
    </>
  );
};
