import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TempBanner1 from "../../../components/Templete1/TempBanner1";
import TempAbout from "../../../components/Templete1/TempAbout";
import MyProject from "../../../components/Templete1/MyProject";
import TempFooter from "../../../components/Templete1/TempFotter";
import Temple1Header from "../../../components/Templete1/Temple1Header";
import Temp2Header from "../../../components/Templete2/Temp2Header";
import BottomNavigation from "../../../components/Templete2/BottomNavigation";
import TypeAnimation from "react-type-animation";

const Protfolio2 = ({ userData }) => {
  const router = useRouter();

  console.log(userData);

  return (
    <div className="overflow-x-hidden bg-white dark:bg-gradient-to-r dark:from-[#1F2937] dark:to-[#111827] min-h-[109vh] w-full relative text-gray-600 dark:text-white ">
      <Temp2Header name={userData?.name} />
      {/* home middle content */}
      <div>
        <div className="relative w-full container px-4 mx-auto flex flex-col justify-center items-center h-screen -mt-20 ">
          <div className="bg-[#60A5FA] h-[120px] top-36 right-20 absolute w-[120px] rounded-full blur-[90px] filter "></div>
          <div className="bg-[#60A5FA] h-[120px] top-[200px] right-[200px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
          <div className="flex flex-col items-start relative ">
            <div className="flex flex-col items-start SpaceGroteskBold text-[28px] md:text-[50px] lg:text-[64px] ">
              <h1>Hello!👋🏻</h1>
              <div>
                My name is{" "}
                <TypeAnimation
                  cursor={true}
                  sequence={[userData?.name, 90000, ""]}
                  repeat={300}
                  wrapper="h3"
                />
              </div>
            </div>
            <div className="bg-[#60A5FA] h-[120px] top-[200px] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
            <div className="SpaceGroteskRegular text-[27px] md:text-[30px] lg:text-[40px] py-5">
              <p> {userData?.bio} 😍</p>
            </div>
            <a
              href={userData?.html_url}
              target="_blank"
              className="relative block group my-7 ml-4 cursor-pointer"
              rel="noreferrer"
            >
              <span className="absolute inset-0 border-2 border-[#188AEC] rounded-lg"></span>
              <div className="transition bg-[#188AEC] text-white rounded-lg group-hover:-translate-x-0 group-hover:-translate-y-0 -translate-x-3 translate-y-2">
                <div className="py-3 px-10 ">
                  <p className="mt-1 text-xl">Say Hello</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* bottom navigation */}
      <BottomNavigation name={router.query?.username} />
    </div>
  );
};

export default Protfolio2;

export async function getServerSideProps(context) {
  const userData = await fetch(
    `https://api.github.com/users/${context?.query?.username}`
  ).then((res) => res.json());

  return {
    props: {
      userData: userData,
    }, // will be passed to the page component as props
  };
}
