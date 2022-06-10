import React from "react";
import { XIcon } from "@heroicons/react/outline";

function MobileMenu({ openMenu, setOpenMenu }) {
  return (
    <div
      className={`fixed shadow-md backdrop-hue-rotate-30 w-[385px] right-0 top-0 p-2 h-screen transition-all ease-in-out transform md:hidden z-40 ${
        !openMenu ? "translate-x-[400px]" : "translate-x-[0px]"
      }`}
    >
      <div className="rounded-lg shadow-lg ring-1 h-full ring-black ring-opacity-5 bg-[#141628] border-[1px] border-red-100/20 text-white pt-5 pb-6 px-5">
        {/* close button */}
        <div className="cursor-pointer flex items-center justify-end">
          <XIcon
            onClick={() => setOpenMenu(false)}
            className="h-6 transform hover:scale-150 transition-all ease-out self-end"
          />
        </div>
        {/* bottom link */}
        <div className="pt-12 space-y-4">
          <a
            href="#about"
            className=" p-2 flex items-center rounded-md hover:bg-black border-[1px] border-indigo-500"
          >
            <p className="block my-3 ml-3 text-3xl font-bold ">About</p>
          </a>
          <a
            href="#work"
            className=" p-2 flex items-center rounded-md hover:bg-black border-[1px] border-indigo-500"
          >
            <p className="block my-3 ml-3 text-3xl font-bold ">Work</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
