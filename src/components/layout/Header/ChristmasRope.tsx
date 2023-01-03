import { useEffect, useState } from "react";
import styles from "./header.module.scss";

const getRopes = (actions: number) => {
  let ropesList = [];
  for (let i = 0; i < actions; i++) {
    ropesList.push(<li key={`rope-${i}`}></li>);
  }
  return ropesList;
};

export const ChristmasRope = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const lampWidth = 70;
    setWidth(Math.round(window.innerWidth / lampWidth));
  }, []);

  const actionDom = <ul className={styles.lightRope}>{getRopes(width)}</ul>;

  return (
    <>
      {actionDom}
    </>
  );
};
