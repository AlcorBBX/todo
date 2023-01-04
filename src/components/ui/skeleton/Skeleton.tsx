import styles from "./skeleton.module.scss";

export interface ISkeleton {
  children: React.ReactNode;
}

export const Skeleton = () => {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}></div>
    </div>
  );
};

export const SkeletonText = () => {
  return (
    <div className={styles.card}>
      <div className={styles.line}></div>
    </div>
  );
};
