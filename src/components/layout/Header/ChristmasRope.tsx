import { useEffect, useState } from "react";
import styles from "./header.module.scss";

const getRopes = (actions: number) => {
  let lampsList = [];
  for (let i = 0; i < actions; i++) {
    lampsList.push(<li key={`rope-${i}`}></li>);
  }
  return lampsList;
};

export const ChristmasRope = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const lampWidth = 70;
    setWidth(Math.round(window.innerWidth / lampWidth));
  }, []);

  const lampsDom = <ul className={styles.lightRope}>{getRopes(width)}</ul>;

  return (
    <>
      {lampsDom}
    </>
  );
};
