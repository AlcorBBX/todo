import { NewTask } from "./NewTask";

interface INewTask {
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  onClickHandler(): void;
}

interface IFooterActions extends INewTask {}

export const FooterActions = ({
  anchorEl,
  setAnchorEl,
  onClickHandler,
}: IFooterActions) => {
  return (
    <>
      <NewTask
        onClickHandler={onClickHandler}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
    </>
  );
};
