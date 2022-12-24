import styles from "./new-task.module.scss";

interface INewTask {
  show: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  onClickHandler(): void;
}
export const NewTask = ({ show, setIsShow, onClickHandler }: INewTask) => {
  return (
    <>
      <button className={styles.button} onClick={() => setIsShow(v => !v)}>
        {!show ? "+ Добавить новую карточку" : "Отмена"}
      </button>

      {show && (
        <button
          className={styles.createButton}
          onClick={() => onClickHandler()}
        >
          Создать
        </button>
      )}
    </>
  );
};
