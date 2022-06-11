import React from "react";
import SingleProjectCard from "../../../../components/Templete1/SingleProjectCard";
import BottomNavigation from "../../../../components/Templete2/BottomNavigation";
import Temp2Header from "../../../../components/Templete2/Temp2Header";
import { useRouter } from "next/router";

const Projects = ({ userData, ReposData }) => {
  const router = useRouter();
  return (
    <div className="overflow-x-hidden bg-white dark:bg-gradient-to-r dark:from-[#1F2937] dark:to-[#111827] min-h-[109vh] w-full relative text-gray-600 dark:text-white ">
      <Temp2Header name={userData?.name} />
      {/* home middle content */}
      <div className="container mx-auto flex flex-col justify-center h-full w-full relative px-3">
        <div className="bg-[#60A5FA] h-[120px] top-36 right-20 absolute w-[120px] rounded-full blur-[90px] filter"></div>

        <div className="bg-[#60A5FA] h-[120px] top-[200px] right-[200px] absolute w-[120px] rounded-full blur-[90px] filter"></div>

        {/* project details */}
        <div className="py-10 relative">
          <div className="bg-[#60A5FA] h-[120px] top-[30rem] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>

          <div className="flex flex-col items-start">
            <h1 className="SpaceGroteskBold text-5xl">Projects 💡</h1>
            <p className="SpaceGroteskRegular text-[35px]">
              Some things i ve been working on in the past few years:
            </p>
          </div>

          {/* all project wrapper */}
          <div className="container mx-auto flex flex-col justify-center items-center h-full w-full relative px-3 py-3">
            {ReposData?.map((repo) => (
              <SingleProjectCard key={repo?.id} repo={repo} />
            ))}
          </div>
        </div>
      </div>

      {/* bottom navigation */}
      <BottomNavigation name={router.query?.username} />
    </div>
  );
};

export default Projects;

export async function getServerSideProps(context) {
  // another two one
  const repoData = await fetch(
    `https://api.github.com/users/${context?.query?.username}/repos`
  ).then((res) => res.json());

  const userData = await fetch(
    `https://api.github.com/users/${context?.query?.username}`
  ).then((res) => res.json());

  return {
    props: {
      userData: userData,
      ReposData: repoData,
    }, // will be passed to the page component as props
  };
}
