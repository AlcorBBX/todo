import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext, themes } from "../../../contexts/ThemeContext";
import { ThemePicker } from "../../ui";
import { ChristmasRope } from "./ChristmasRope";

import styles from "./header.module.scss";

export const Header = () => {
  const history = useNavigate();
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h2 onClick={() => history(`/`)}>To Do</h2>
        <ThemeContext.Consumer>
          {({ theme, setTheme }: any) => (
            <ThemePicker
              onChange={() => {
                if (theme === themes.light) setTheme(themes.dark);
                if (theme === themes.dark) setTheme(themes.light);
              }}
              value={theme === themes.dark}
            />
          )}
        </ThemeContext.Consumer>
      </div>
      {width > 615 ? <ChristmasRope /> : ""}
    </header>
  );
};
