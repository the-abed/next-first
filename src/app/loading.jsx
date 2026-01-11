import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
            {/* DaisyUI Loading Spinner */}
            <span className="loading loading-spinner loading-lg text-primary"></span>
            
            <div className="text-center">
                <h3 className="text-xl font-semibold animate-pulse">Loading Content</h3>
                <p className="text-base-content/60 text-sm">Please wait a moment...</p>
            </div>
        </div>
    );
};

export default Loading;