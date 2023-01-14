import styles from "./board-actions.module.scss";

export interface NewTaskActionProps {
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  onClickHandler(): void;
}

export const NewTaskAction = ({
  anchorEl,
  onClickHandler,
  setAnchorEl,
}: NewTaskActionProps) => {
  return (
    <>
      <button
        className={styles.button}
        onClick={e => setAnchorEl(e.currentTarget)}
      >
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
