import { useEffect, useMemo } from "react";
import { useLatest } from "./useLatest";

type useDebounceType = {
  cb(args: any): void;
  time: number;
};

export function makeDebouncedHook(debounceFn: any) {
  return function useDebounce({ cb, time }: useDebounceType) {
    const latestCb = useLatest(cb);

    const debouncedFn = useMemo(
      () =>
        debounceFn((...args: any) => {
          latestCb.current(...args);
        }, time),
      [time, latestCb]
    );

    // Если компонент анмаунт раньше конца отсчета - остановить
    // функцию
    useEffect(() => () => debouncedFn.cancel(), [debouncedFn]);

    return debouncedFn;
  };
}
