import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Layout } from "../components/layout/Layout";
import { Home } from "../components/screens";
import { localStorageWrapper } from "../helpers/storage";
import { initialProjects } from "../store/todoProject/project-actions";
import { IProject } from "../types/project.interface";

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageProjects =
      localStorageWrapper.get<IProject[]>("projects");
    console.log(`Before ${localStorageProjects}`);

    setTimeout(() => {
      if (localStorageProjects) dispatch(initialProjects(localStorageProjects));
      else console.log("localStorage is empty");
      console.log(`After ${localStorageProjects}`);
    }, 1000);
  });

  return (
    <Layout title='Projects'>
      <Home />
    </Layout>
  );
};
