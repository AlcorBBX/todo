import { IProject } from "./../../types/project.interface";

export const addNewProject = (payload: IProject) => {
  return {
    type: "ADD_PROJECT",
    payload,
  };
};

export const deleteProject = (payload: number) => {
  return {
    type: "DELETE_PROJECT",
    payload,
  };
};

export const updateProject = (payload: any) => {
  return {
    type: "UPDATE_PROJECT",
    payload,
  };
};

export const initialProjects = (payload: IProject[]) => {
  return {
    type: "INITIAL_PROJECTS",
    payload,
  };
};
