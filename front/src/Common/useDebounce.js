import { useCallback, useRef } from "react";

export const useDebounce = (callback, interval = 300) => {
  const timeoutRef = useRef();
  return useCallback(
    (...args) => {
      clearTimeout(timeoutRef.current);
      return new Promise((resolve) => {
        const timeoutPromise = new Promise((resolve) => {
          timeoutRef.current = setTimeout(resolve, interval);
        });
        timeoutPromise.then(async () => {
          resolve(await callback(...args));
        });
      });
    },
    [callback, interval]
  );
};
