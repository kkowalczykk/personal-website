import { useEffect } from 'react';

export default (
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
  condition: boolean
) => {
  useEffect(() => {
    if (!condition) return;
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, condition]);
};
