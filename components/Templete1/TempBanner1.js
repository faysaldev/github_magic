import React from "react";
import Image from "next/image";
import TypeAnimation from "react-type-animation";

function TempBanner1({ user }) {
  return (
    <div>
      <div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between container max-auto">
        <div className="flex flex-col justify-center p-6 text-center lg:text-left">
          <p className="font-mono text-[#FC4370]">Welcome, I m 👉</p>
          <div className="my-[.7rem] ">
            <div className="text-5xl font-bold sm:text-7xl">
              <TypeAnimation
                cursor={true}
                sequence={[user?.name, 90000, ""]}
                repeat={300}
                wrapper="h3"
              />
            </div>
          </div>
          <div className="my-[1rem] text-gray-400 max-w-md">{user?.bio}</div>
          {/* button */}
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              href={user?.html_url}
              className="px-8 py-3 text-lg font-semibold rounded bg-[#FC4370] cursor-pointer"
            >
              Saw my work
            </a>
          </div>
        </div>
        {/* image content */}
        <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          {/* image */}
          <img
            src={user?.avatar_url}
            className="object-contain h-72 sm:h-80 border-[1px] border-[#FC4370] rounded-full animationImage"
          />
        </div>
      </div>
    </div>
  );
}

export default TempBanner1;
