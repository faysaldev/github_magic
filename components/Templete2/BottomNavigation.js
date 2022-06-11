import React from "react";
import { HomeIcon, LightBulbIcon, MoonIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

const BottomNavigation = ({ name }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  console.log(theme);

  const router = useRouter();
  return (
    <center>
      <div className=" fixed fill-[#1F2937] dark:fill-white bottom-5 w-full ">
        <div className=" shadow-2xl flex justify-center items-center bg-white border-[#F3F4F6] dark:bg-[#111827] dark:border-[#374151] border rounded-xl max-w-[24rem] py-3 px-5">
          {/* all itcon wrapper start */}
          <div
            onClick={() => router.push(`/templete/protfolio2/${name}`)}
            className=" bg-gray-100 dark:bg-[#1F2937] w-[60px] h-[60px] flex justify-center items-center mx-2 rounded-xl cursor-pointer hover:bg-[#3B82F6] dark:hover:bg-[#3B82F6] "
          >
            <HomeIcon className="h-8" />
          </div>

          {/* Projec icon */}
          <div
            onClick={() => router.push(`/templete/protfolio2/projects/${name}`)}
            className=" bg-gray-100 dark:bg-[#1F2937] w-[60px] h-[60px] flex justify-center items-center mx-2 rounded-xl cursor-pointer hover:bg-[#3B82F6] dark:hover:bg-[#3B82F6] "
          >
            <LightBulbIcon className="h-8" />
          </div>

          <div
            onClick={() => router.push(`/templete/protfolio2/about/${name}`)}
            className=" bg-gray-100 dark:bg-[#1F2937] w-[60px] h-[60px] flex justify-center items-center mx-2 rounded-xl cursor-pointer hover:bg-[#3B82F6] dark:hover:bg-[#3B82F6] "
          >
            <img src="/Profile.svg" width="40" height="40" />
          </div>

          <div
            onClick={() => setTheme(theme == "light" ? "dark" : "light")}
            className=" bg-gray-100 dark:bg-[#1F2937] w-[60px] h-[60px] flex justify-center items-center mx-2 rounded-xl cursor-pointer hover:bg-[#3B82F6] dark:hover:bg-[#3B82F6] "
          >
            <MoonIcon className="h-8" />
          </div>

          {/* all icon wrapper end */}
        </div>
      </div>
    </center>
  );
};

export default BottomNavigation;
