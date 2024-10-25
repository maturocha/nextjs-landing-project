'use client'

import { useEffect, useState }from 'react';

export default function useResizer(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  const handleSizeChange = (): void => {
    return setIsMobile(window.innerWidth < 1024);
  }

  useEffect(() => {
    handleSizeChange();

    window.addEventListener("resize", handleSizeChange);
    return () => {
      window.removeEventListener("resize", handleSizeChange);
    };
  }, []);

  return isMobile;
};
