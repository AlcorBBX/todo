export interface SendInputProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}
export const CreateTaskInput = ({ setText, text }: SendInputProps) => {
  return <input value={text} onChange={e => setText(e.target.value)} />;
};
