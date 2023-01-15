export interface TaskModalLayoutProps {
  children: React.ReactNode;
}

export const TaskModalLayout = ({ children }: TaskModalLayoutProps) => {
  return (
    <>
      <div className=''>{children}</div>
      <div className=''></div>
    </>
  );
};
