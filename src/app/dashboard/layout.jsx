import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-4 min-h-screen">
      <div className="col-span-3 p-4 border-r-2">
        <h4>Navigation</h4>
        <div className="flex flex-col gap-4 mt-4">
          <Link
            className="bg-gray-500 px-4 py-2 rounded-3xl hover:scale-110 text-center"
            href={"/dashboard/add-story"}
          >
            Add Story
          </Link>
          <Link
            className="bg-gray-500 px-4 py-2 rounded-3xl hover:scale-110 text-center"
            href={"/dashboard/my-profile"}
          >
            My Profile
          </Link>
          <Link
            className="bg-gray-500 px-4 py-2 rounded-3xl hover:scale-110 text-center"
            href={"/dashboard/settings"}
          >
            Settings
          </Link>
        </div>
      </div>
      <div className="col-span-10 p-4">{children}</div>
    </div>
  );
};

export default DashboardLayout;
