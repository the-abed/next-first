import Title from "@/components/Title";
import React from "react";

const AddStory = () => {
  return (
    <div className="min-h-screen bg-base-100 px-4 py-12">
      <div className="max-w-3xl mx-auto">

        <Title>Add Your Story</Title>

        <div className="mt-8 bg-base-200 shadow-xl rounded-2xl p-8 border border-base-300">
          
          <form className="space-y-6">
            
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>

            {/* Designation */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Designation</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Frontend Developer"
                className="input input-bordered w-full"
              />
            </div>

            {/* Story */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Your Story</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full h-32"
                placeholder="Write your journey or experience..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button className="btn btn-primary w-full rounded-xl">
                Submit Story
              </button>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
};

export default AddStory;