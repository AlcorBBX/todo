import styles from "./theme-picker.module.scss";

export interface ThemePickerProps {
  value: boolean;
  onChange: () => void;
}

export const ThemePicker = ({ value, onChange }: ThemePickerProps) => {
  return (
    <>
      <div className={styles.card} onClick={onChange}>
        <ThemeIcon value={value} />
      </div>
    </>
  );
};

interface ThemeIconProps {
  value: boolean;
}

export const ThemeIcon = ({ value }: ThemeIconProps) => {
  return (
    <>
      {value ? (
        <img src='/icons/moon.png' alt='' />
      ) : (
        <img src='/icons/sun.png' alt='' />
      )}
    </>
  );
};
