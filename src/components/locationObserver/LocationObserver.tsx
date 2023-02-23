import React, {
  createRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
  RefObject,
} from 'react';

const LocationObserver = ({ onIntersection, children }: any) => {
  const { hasIntersected, ref } = useObserver(onIntersection);

  return <div ref={ref}>{hasIntersected && children}</div>;
};

interface Callback<T2 = void> {
  (): T2;
}
const useObserver = (cb: Callback) => {
  const options = {
    root: null,
    rootMargin: '600px',
    threshold: 0,
  };
  const ref: RefObject<HTMLDivElement> = useMemo(() => createRef(), []);
  const [hasIntersected, setHasIntersected] = useState(false);
  const load = useCallback((entires: any) => {
    const entry = entires.find((entry: any) => entry.target === ref.current);

    if (entry && entry.isIntersecting) {
      setHasIntersected(true);
      if (cb) {
        cb();
      }
      observer.unobserve(ref.current as Element);
    }
  }, []);
  const observer = useMemo(() => new IntersectionObserver(load, options), []);

  useEffect(() => {
    observer.observe(ref.current as Element);
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current as Element);
      }
    };
  }, []);

  return { hasIntersected, ref };
};

export default LocationObserver;
