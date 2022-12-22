import { NewTask } from "./NewTask";

interface IFooterActions {
  show: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FooterActions = ({ show, setIsShow }: IFooterActions) => {
  return (
    <>
      <NewTask show={show} setIsShow={setIsShow} />
    </>
  );
};
