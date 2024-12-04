import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="bg-white h-20 py-3.5">
        <div className="max-w-3xl flex items-center h-full justify-between px-16 mx-auto">
          <p className="items-center text-2xl">BookList</p>
          <div>
            <ul className="flex gap-7">
              <li>Home</li>
              <li>AllList</li>
              <li>memo</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
