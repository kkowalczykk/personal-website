import { useAtom, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { isPointerAtom } from '../components/layouts/MainLayout';

export default () => {
  const [isPointer, setIsPointer] = useAtom(isPointerAtom);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer:fine)');
    const handleChange = () => {
      const { matches } = mediaQuery;
      setIsPointer(matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    setIsPointer(mediaQuery.matches);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  return isPointer;
};
