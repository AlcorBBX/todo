import styles from "./theme-picker.module.scss";

export const ThemePicker = ({ value, onChange }: any) => {
  return (
    <>
      <label className={styles.switch} htmlFor='toggler'>
      <p>темная тема: </p>
        <input
          id='toggler'
          type='checkbox'
          onClick={onChange}
          checked={value}
          readOnly
        />
        <span className={styles.slider} />
        <span className={styles.wave} />
      </label>
    </>
  );
};
