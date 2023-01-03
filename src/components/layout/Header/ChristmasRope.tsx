import { useEffect, useState } from "react";
import styles from "./header.module.scss";

export const ChristmasRope = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <>
      {width > 615 ? (
        <ul className={styles.lightRope}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      ) : (
        <ul className={styles.lightRope}>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      )}
    </>
  );
};
