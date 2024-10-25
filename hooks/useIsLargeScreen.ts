import { useState, useEffect } from 'react';

const useIsLargeScreen = () => {
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1280px)');

        const handleResize = () => {
            setIsLargeScreen(mediaQuery.matches);
        };

        handleResize();

        mediaQuery.addEventListener('change', handleResize);

        return () => mediaQuery.removeEventListener('change', handleResize);
    }, []);

    return isLargeScreen;
};

export default useIsLargeScreen;
