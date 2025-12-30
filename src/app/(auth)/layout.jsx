import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <div className='flex min-h-screen gap-5'>
    

            <div className='flex-1'>{children}</div>

             <div lassName='flex-2'>
                <h2>This is Auth Layout</h2>
             </div>
        </div>
    );
};

export default AuthLayout;