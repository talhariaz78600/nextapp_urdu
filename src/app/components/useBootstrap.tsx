import { useEffect } from 'react';

const useBootstrap = (): void => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            import('bootstrap/dist/js/bootstrap.bundle.min')
                .then(() => {
                    console.log('Bootstrap JS loaded');
                })
                .catch((err: Error) => console.error('Error loading Bootstrap JS:', err));
        }
    }, []);
};

export default useBootstrap;

