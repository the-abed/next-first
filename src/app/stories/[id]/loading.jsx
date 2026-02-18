import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="flex flex-col items-center gap-6">
        
        {/* Glass Card Wrapper */}
        <div className="bg-base-200/60 backdrop-blur-md shadow-xl rounded-2xl p-8 flex flex-col items-center gap-5 border border-base-300">
          
          {/* Spinner */}
          <span className="loading loading-spinner loading-lg text-primary"></span>

          {/* Text Section */}
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold tracking-wide">
              Loading Content
            </h3>
            <p className="text-sm text-base-content/60">
              Please wait a moment while we prepare everything for you...
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Loading;
