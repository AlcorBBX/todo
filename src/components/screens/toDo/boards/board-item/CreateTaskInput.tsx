import styles from "./create-task-input.module.scss";

export interface SendInputProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}
export const CreateTaskInput = ({ setText, text }: SendInputProps) => {
  return <input value={text} className={styles.input} onChange={e => setText(e.target.value)} />;
};
