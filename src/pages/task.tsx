import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { Layout } from "../components/layout/Layout";
import { Task } from "../components/screens";
import { localStorageWrapper } from "../helpers/storage";
import { initialTasks } from "../store/todoTask/task-actions";
import { ITask } from "../types/task.interface";

export const TasksPage = () => {
  const dispatch = useDispatch();
  const localStorageTasks = localStorageWrapper.get<ITask[]>("tasks");

  useLayoutEffect(() => {
    return () => {
      if (localStorageTasks) dispatch(initialTasks(localStorageTasks));
      else console.log("localStorage is empty");
    };
  }, []);

  return (
    <Layout title='Tasks'>
      <Task />
    </Layout>
  );
};
