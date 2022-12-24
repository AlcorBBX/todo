import { NewTask } from "./NewTask";

interface INewTask {
  show: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  onClickHandler(): void;
}

interface IFooterActions extends INewTask {}

export const FooterActions = ({
  show,
  setIsShow,
  onClickHandler,
}: IFooterActions) => {
  return (
    <>
      <NewTask
        onClickHandler={onClickHandler}
        show={show}
        setIsShow={setIsShow}
      />
    </>
  );
};
