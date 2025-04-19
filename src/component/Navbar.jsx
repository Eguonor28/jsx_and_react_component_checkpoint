import React from "react";

const Navbar = () => {
  return (
    <div>
      {" "}
      <nav className="bg-gray-800 flex justify-between p-2">
        <div className="flex gap-2">
          <div className="flex items-center">
            <img src="/mark.svg" alt="" className="h-8 w-10" />
          </div>
          <button className="py-2 px-3 bg-gray-900 rounded-2xl text-gray-300 hover:text-white hover:bg-gray-500">
            Dashboard
          </button>
          <button className="py-2 px-3 rounded-2xl text-gray-300 hover:text-white hover:bg-gray-500">
            Team
          </button>
          <button className="py-2 px-3 rounded-2xl text-gray-300 hover:text-white hover:bg-gray-500">
            Projects
          </button>
          <button className="py-2 px-3 rounded-2xl text-gray-300 hover:text-white hover:bg-gray-500">
            Calender
          </button>
        </div>
        <div className="flex gap-2">
          <button className="py-2 px-3 rounded-2xl text-gray-300 hover:text-white hover:bg-gray-500">
            Login
          </button>
          <button className="py-2 px-3 rounded-2xl text-gray-300 hover:text-white hover:bg-gray-500">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
