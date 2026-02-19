import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4">
      <div className="flex flex-col items-center gap-4 text-center">
        
        {/* Spinner */}
        <span className="loading loading-spinner loading-lg text-primary"></span>

        {/* Text */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold tracking-wide">
            Loading Content
          </h3>
          <p className="text-sm text-base-content/60 mt-1">
            Please wait while we fetch the data...
          </p>
        </div>

      </div>
    </div>
  );
};

export default Loading;
