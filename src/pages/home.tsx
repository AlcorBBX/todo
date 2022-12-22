import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { Home } from "../components/screens";
import { localStorageWrapper } from "../helpers/storage";
import { initialProjects } from "../store/todoProject/project-actions";
import { IProject } from "../types/project.interface";

export const HomePage = () => {
  const dispatch = useDispatch();

  const lo = localStorageWrapper.get<IProject[]>("projects");

  useLayoutEffect(() => {
    return () => {
      if (lo) dispatch(initialProjects(lo));
      else console.log("localStorage is empty");
    };
  }, []);
  return (
    <div>
      <Home />
    </div>
  );
};
