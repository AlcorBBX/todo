import { useDispatch } from "react-redux";
import { localStorageWrapper } from "../helpers/storage";

interface IUseCrateStorageItem {
  text: string;
  initialItems: any;
  type: string;
}

//To Do

export const useCrateStorageItem = ({
  text,
  initialItems,
  type,
}: IUseCrateStorageItem) => {
  const dispatch = useDispatch();

  const createNewProject = () => {
    if (text) {
      const newProject = [...initialItems];
      const id = Date.now() * 2;
      newProject.push({ id: id, name: text });

      localStorageWrapper.set(type, newProject);
      // dispatch(
      //   addNewProject({
      //     id: id,
      //     name: text,
      //   })
      // );
      // setInputValue("");
      // setAnchorEl(null);
    }
  };

  return { createNewProject}
};
