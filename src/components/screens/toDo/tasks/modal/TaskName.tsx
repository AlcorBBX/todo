//@ts-ignore
import { ITask } from "@types/task.interface";
import { useState } from "react";
import { ContentItemCard } from "./ContentItemCard";

import styles from "./modal-content.module.scss";

interface NameTaskModalProps {
  task: ITask;
}

export const TaskName = ({ task }: NameTaskModalProps) => {
  return (
    <ContentItemCard>
      <div className={styles.nameBlock}>
        <p className={styles.name}>{task.title}</p>
        {/* <Title taskId={task.id} /> */}
        <p className={styles.positionInfo}>
          в колонке <span>{task.type}</span>
        </p>
      </div>
    </ContentItemCard>
  );
};

export interface TitleProps {
  taskId: number;
}
//TODO: change the value in the store via useDebounce
export const Title = ({ taskId }: TitleProps) => {
  const [value, setValue] = useState("");
  // const useDebounce = makeDebouncedHook(debounce);
  // function makeDebounceEffectHook(useDebounceHook) {
  //   return function (cb, deps, ms) {
  //     const isInitialRender = useRef(true);
  //     const cleanUpFn = useRef();

  //     const debouncedCb = useDebounceHook(() => {
  //       cleanUpFn.current = cb();
  //     }, ms);

  //     useEffect(() => {
  //       if (isInitialRender.current) {
  //         isInitialRender.current = false;
  //         return;
  //       }

  //       debouncedCb();

  //       return () => {
  //         if (typeof cleanUpFn.current === "function") {
  //           cleanUpFn.current();
  //           cleanUpFn.current = undefined;
  //         }
  //       };
  //     }, [debouncedCb, ...deps]);
  //   };
  // }
  // const useDebounceEffect = makeDebounceEffectHook(useDebounce);
  // useDebounceEffect(
  //   () => {
  //     console.log("make request with value: ", value);

  //     return () => {
  //       console.log("cancel request with value: ", value);
  //     };
  //   },
  //   [value],
  //   500
  // );

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };
  return (
    <input placeholder='' value={value} onChange={e => handleQueryChange(e)} />
  );
};
