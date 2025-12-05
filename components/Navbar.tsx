"use client";

import React from "react";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-end m-auto px-[10px]">
        <div className="flex flex-row gap-5">
          <div
            onClick={() => window.open("mailto:contact@example.com")}
            className=" z-[1] bg-transparent  padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl  text-white  py-2 px-5"
          >
            Contato
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
