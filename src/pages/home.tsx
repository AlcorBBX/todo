import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { Layout } from "../components/layout/Layout";
import { Home } from "../components/screens";
import { localStorageWrapper } from "../helpers/storage";
import { initialProjects } from "../store/todoProject/project-actions";
import { IProject } from "../types/project.interface";

export const HomePage = () => {
  const dispatch = useDispatch();

  const localStorageProjects = localStorageWrapper.get<IProject[]>("projects");

  useLayoutEffect(() => {
    return () => {
      if (localStorageProjects) dispatch(initialProjects(localStorageProjects));
      else console.log("localStorage is empty");
    };
  }, []);
  return (
    <Layout title="Projects">
      <Home />
    </Layout>
  );
};
