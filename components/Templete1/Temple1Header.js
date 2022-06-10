import React, { useState } from "react";
import { MenuAlt2Icon } from "@heroicons/react/outline";
import MobileMenu from "./MobileMenu";

function Temple1Header({ user }) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="fixed w-full top-0 z-10 backdrop-blur-md text-xl font-bold drop-shadow-xl flex-none transition-colors duration-500 ">
      {/* wrapper */}
      <div className="w-full container mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
          <div className="flex justify-between items-center py-6 sm:justify-between sm:space-x-10">
            {/* LOgo */}
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <h3 className="font-mono cursor-pointer">{user?.name}</h3>
            </div>

            {/* right */}
            <div className="md:inline-flex hidden space-x-10 items-center">
              <a
                href="#about"
                className="block font-mono cursor-pointer hover:text-[#FB4370] transition-all duration-300 hover:underline-offset-1 hover:underline"
              >
                About
              </a>
              <a
                href="#work"
                className="block font-mono cursor-pointer hover:text-[#FB4370] transition-all duration-300 hover:underline-offset-1 hover:underline"
              >
                Work
              </a>
            </div>
            {/* hambarger */}
            <div className="md:hidden">
              <MenuAlt2Icon
                onClick={() => setOpenMenu(true)}
                className="h-6 cursor-pointer text-white focus:text-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* show the mobile menu */}
      {openMenu && <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />}
    </div>
  );
}

export default Temple1Header;
