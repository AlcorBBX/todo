import styles from "./new-task.module.scss";

interface INewTask {
  show: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}
export const NewTask = ({ show, setIsShow }: INewTask) => {
  return (
    <button className={styles.button} onClick={() => setIsShow(v => !v)}>
      + Добавить новую карточку
    </button>
  );
};
