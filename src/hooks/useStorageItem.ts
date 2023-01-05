import { localStorageWrapper } from "../helpers/storage";

interface UseStorageItemProps {
  initialItems: any;
  type: string;
  newItem: any;
}

//TODO

export const StorageItem = ({
  initialItems,
  type,
  newItem,
}: UseStorageItemProps) => {
  if (newItem) {
    const newProject = [...initialItems];
    // const id = Date.now() * 2;
    newProject.push(newItem);

    localStorageWrapper.set(type, newProject);
  }
};
