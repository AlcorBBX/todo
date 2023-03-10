import { useNavigate } from "react-router-dom";
import { ThemeContext, themes } from "../../../contexts/ThemeContext";
import { ThemePicker } from "../../ui";
import { ChristmasRope } from "./ChristmasRope";

import styles from "./header.module.scss";

export const Header = () => {
  const history = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h2 role='button' onClick={() => history(`/`)}>
          To Do
        </h2>

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
        {/* <Auth>alcorbbx</Auth> */}
      </div>
      <ChristmasRope />
    </header>
  );
};
