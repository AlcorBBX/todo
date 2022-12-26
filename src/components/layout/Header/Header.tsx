import { ThemeContext, themes } from "../../../contexts/ThemeContext";
import { ThemePicker } from "../../ui";

import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h2>To Do</h2>
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
    </header>
  );
};
