import { useCallback, useEffect, useState } from "react";

export interface DelayOptions {
  second: number;
  onAction: Function;
}

export const useThrottle = (second: number, onAction: Function) => {
  const [flag, setFlag] = useState(false);

  const onThrottle = useCallback(() => {
    if(!flag){
      setFlag(true);
    }
  }, []);

  useEffect(() => {
    if (flag) {
      const timer = setTimeout(() => {
        onAction();
        setFlag(false);
      }, second);

      return () => {
        clearTimeout(timer);
      };
    }
    return;
  }, [flag]);

  return onThrottle;
};

export const useDebounds = (second: number, onAction: Function) => {
  const [flag, setFlag] = useState(0);

  const onDebounds = useCallback(() => {
    setFlag(Math.random());
  }, []);

  useEffect(() => {
    if (flag !== 0) {
      const timer = setTimeout(() => {
        onAction();
      }, second);

      return () => {
        clearTimeout(timer);
      };
    }
    return;
  }, [flag]);

  return onDebounds;
};
