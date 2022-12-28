import styles from "./main-card.module.scss";

interface IMainCard {
  children: React.ReactNode;
}

export const MainCard = ({ children }: IMainCard) => {
  return (
    <>
      <div className={styles.card}>{children}</div>
    </>
  );
};
