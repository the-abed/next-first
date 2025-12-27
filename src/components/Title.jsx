import React from 'react';

const Title = ({children}) => {
    return (
        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            {children}
        </div>
    );
};

export default Title;