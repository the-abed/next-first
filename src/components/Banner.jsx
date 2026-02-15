"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();

  const handleShareStory = () => {
    const password = prompt("Enter the password:");
    if (password === "1234") {
      router.push("/dashboard");
    } else {
      alert("Wrong password!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh] px-4">
      {/* Banner with share story button */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col justify-center items-center gap-6 p-14 rounded-3xl shadow-2xl text-center">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Welcome to Dev-Story
        </h1>

        <p className="text-white/90 text-lg max-w-md">
          Share your development journey and inspire others with your story.
        </p>

        <button
          onClick={handleShareStory}
          className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          Share Story
        </button>
      </div>
    </div>
  );
};

export default Banner;
