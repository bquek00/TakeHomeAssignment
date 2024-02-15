import React from 'react';

interface LoaderProps {
  visibility: boolean;
}

const Loader: React.FC<LoaderProps> = ({ visibility }) => 
{
    return (
        <div className={`loader absolute ${visibility ? 'visible' : 'invisible'}`}></div>
    );
};

export default Loader;
