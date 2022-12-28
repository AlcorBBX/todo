import { MainSecondaryCard } from "../main/MainCard";
import { FooterActions } from "./board-actions/FooterActions";
import styles from "./board-card.module.scss";

interface IBoardCard {
  title: string;
  children: React.ReactNode;
  ref: HTMLElement | null;
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  onClickHandler(): void;
}

export const BoardCard = ({
  title,
  children,
  ref,
  anchorEl,
  setAnchorEl,
  onClickHandler,
}: IBoardCard) => {
  return (
    <MainSecondaryCard>
      <div className={styles.headerCard}>
        <p>{title}</p>
      </div>
      <div className={styles.contentCard}>{children}</div>
      <div className={styles.footerCard}>
        <FooterActions
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          onClickHandler={onClickHandler}
        />
      </div>
    </MainSecondaryCard>
  );
};
