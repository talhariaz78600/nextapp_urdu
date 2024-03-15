import React from 'react';
import Link from 'next/link';

const Custom404: React.FC = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Oops!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                </p>
                <Link href="/" passHref>
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default Custom404;