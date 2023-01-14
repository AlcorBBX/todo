import { NewTaskAction } from "./action-items/NewTaskAction";

interface BoardActionsChildrenProps {
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  onClickHandler(): void;
}

interface BoardActionsProps extends BoardActionsChildrenProps {}

export const BoardActions = ({
  anchorEl,
  onClickHandler,
  setAnchorEl,
}: BoardActionsProps) => {
  return (
    <>
      <NewTaskAction
        onClickHandler={onClickHandler}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
    </>
  );
};
