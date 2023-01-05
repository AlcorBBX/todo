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
  const [isWinter, setIsWinter] = useState<boolean>();
  const dateNow = new Date();
  const check =
    dateNow.getMonth() === 0 ||
    dateNow.getMonth() === 1 ||
    dateNow.getMonth() === 11;

  useEffect(() => {
    if (check) {
      setIsWinter(true);
    }
    const lampWidth = 70;
    setWidth(Math.round(window.innerWidth / lampWidth));
  }, []);

  const lampsDom = <ul className={styles.lightRope}>{getRopes(width)}</ul>;
  return <>{isWinter ? lampsDom : null}</>;
};
