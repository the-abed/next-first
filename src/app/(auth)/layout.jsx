import Title from "@/components/Title";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen gap-5">
      <div className="flex-2 ">{children}</div>

      <div className="flex-1 bg-sky-500 flex justify-center items-center p-5">
        <h2 className="text-3xl font-bold">Welcome to DevStory</h2>
      </div>
    </div>
  );
};

export default AuthLayout;
