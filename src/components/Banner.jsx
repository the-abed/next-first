"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();
  const handleShareStory = () => {
    const password = prompt("Enter the password:");
    if (password === "1234") {
      router.push("/dashboard");
    }
  };
  return (
    <div>
      {/* Banner with share story button */}
      <div className="bg-sky-200 flex flex-col justify-center items-center gap-5 p-12 rounded-2xl">
        <h1 className="text-4xl font-bold text-gray-800 ">
          Welcome to Dev-Story
        </h1>
        <button
          onClick={handleShareStory}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Share Story
        </button>
      </div>
    </div>
  );
};

export default Banner;
