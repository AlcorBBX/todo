import styles from "./modal-content.module.scss";

export interface CardModalItemProps {
  children: React.ReactNode;
  title?: string;
}

export const ContentItemCard = ({ children, title }: CardModalItemProps) => {
  return (
    <div className={styles.cardModalItem}>
      <div>{/* <FaChromecast className={styles.icon} /> */}</div>
      <div>
        {title && <p className={styles.cardModalTitle}>{title}</p>}
        <div>{children}</div>
      </div>
    </div>
  );
};
