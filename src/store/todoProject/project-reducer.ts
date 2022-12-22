import { IProject } from "../../types/project.interface";

type TypeProjectState = {
  projects: IProject[];
  payload?: any;
};

const projectState: TypeProjectState = {
  projects: [],
};

type TypeAction = {
  type: string;
  payload: any;
};

const projectReducer = (
  state = projectState,
  action: TypeAction
): TypeProjectState => {
  switch (action.type) {
    case "INITIAL_PROJECTS": {
      state.projects = action.payload;
      return {
        ...state,
      };
    }

    case "ADD_PROJECT": {
      try {
        const newList = state.projects;
        newList.push(action.payload);
        state.projects = newList;
      } catch (e) {
        console.log(e);
      }
      return {
        ...state,
      };
    }
    case "DELETE_PROJECT": {
      const newProjects = state.projects;
      const result = newProjects.filter(
        project => project.id !== action.payload
      );
      state.projects = result;
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default projectReducer;
