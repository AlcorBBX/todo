import styles from "./main-card.module.scss";

interface IMainCard {
  children: React.ReactNode;
  innerStyle?: React.CSSProperties;
}

export const MainCard = ({ children, innerStyle }: IMainCard) => {
  return (
    <div className={styles.card} style={innerStyle}>
      {children}
    </div>
  );
};

export const MainSecondaryCard = ({ children, innerStyle }: IMainCard) => {
  return (
    <div className={styles.cardSecondary} style={innerStyle}>
      {children}
    </div>
  );
};
