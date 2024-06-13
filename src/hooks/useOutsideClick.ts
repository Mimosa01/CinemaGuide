import { useState, useEffect, useRef } from 'react';

export const useOutsideClick = (initialValue: boolean) => {
  const [isActive, setIsActive] = useState(initialValue);
  const ref = useRef(null);

  const handleClick = (e: Event) => {
    if (ref.current && !(ref.current! as Node).contains(e.target as Node)) {
      setIsActive(!isActive);
      ref.current = null;
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return { ref, isActive, setIsActive };
};

export default useOutsideClick;