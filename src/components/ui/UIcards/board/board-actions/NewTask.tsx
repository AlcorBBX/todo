import styles from "./new-task.module.scss";

interface INewTask {
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  onClickHandler(): void;
}
export const NewTask = ({
  anchorEl,
  setAnchorEl,
  onClickHandler,
}: INewTask) => {
  return (
    <>
      <button
        className={styles.button}
        onClick={e => setAnchorEl(e.currentTarget)}
      >
        {/* {!anchorEl ? "+ Добавить новую карточку" : "Отмена"} */}
        {!anchorEl && "+ Добавить новую карточку"}
      </button>

      {anchorEl && (
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
