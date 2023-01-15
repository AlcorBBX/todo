import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { localStorageWrapper } from "@helpers/storage";
import { initialProjects } from "@store/todoProject/project-actions";
import { initialTasks } from "@store/todoTask/task-actions";
//@ts-ignore
import { IProject } from "@types/project.interface";
//@ts-ignore
import { ITask } from "@types/task.interface";

export const useInitialStorage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageProjects =
      localStorageWrapper.get<IProject[]>("projects");
    const localStorageTasks = localStorageWrapper.get<ITask[]>("tasks");
    setTimeout(() => {
      if (localStorageProjects) dispatch(initialProjects(localStorageProjects));
      else console.log("localStorage is empty");

      if (localStorageTasks) dispatch(initialTasks(localStorageTasks));
      else console.log("localStorage is empty");
    }, 1500);
  });
};
