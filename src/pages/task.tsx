import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { Task } from "../components/screens";
import { localStorageWrapper } from "../helpers/storage";
import { initialTasks } from "../store/todoTask/task-actions";
import { ITask } from "../types/task.interface";

export const TasksPage = () => {
  const dispatch = useDispatch()
  const lo = localStorageWrapper.get<ITask[]>("tasks");

  useLayoutEffect(() => {
    return () => {
      if (lo) dispatch(initialTasks(lo));
      else console.log("localStorage is empty");
    };
  }, []);

  return <Task />;
};
