import { useEffect, useState } from 'react';
import { useInterval } from './useInterval';

export const usePleaseStay = (titles: string[]) => {
  const [shouldIterateTitles, setShouldIterateTitles] = useState<boolean>(false);
  const [titleIndex, setTitleIndex] = useState<number>(0);

  function handleVisibilityChange() {
    setShouldIterateTitles(document.visibilityState !== 'visible');
  }

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useInterval(
    () => {
      if (titles.length === titleIndex + 1) {
        setTitleIndex(0);
      } else {
        setTitleIndex(titleIndex + 1);
      }
    },
    500,
    shouldIterateTitles,
  );

  useEffect(() => {
    document.title = titles[titleIndex];
  }, [titleIndex, titles]);
};
