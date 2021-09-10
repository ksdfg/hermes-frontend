import { useEffect, useRef } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef<() => void>();

  // remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // set up the interval
  useEffect(() => {
    let id = setInterval(() => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }, delay);

    return () => clearInterval(id);
  }, [delay]);
};
