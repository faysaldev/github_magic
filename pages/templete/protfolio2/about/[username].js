import React from "react";
import SingleProjectCard from "../../../../components/Templete1/SingleProjectCard";
import BottomNavigation from "../../../../components/Templete2/BottomNavigation";
import Temp2Header from "../../../../components/Templete2/Temp2Header";
import Markdown from "markdown-to-jsx";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

const Projects = ({ userData, ReadmeData }) => {
  const router = useRouter();
  console.log(ReadmeData);
  return (
    <div className="overflow-x-hidden bg-white dark:bg-gradient-to-r dark:from-[#1F2937] dark:to-[#111827] min-h-[109vh] w-full relative text-gray-600 dark:text-white ">
      <Temp2Header name={userData?.name} />
      {/* home middle content */}
      <div className="container mx-auto flex flex-col items-start px-5 pt-6 max-w-5xl min-h-[182vh] xs:min-h-[170vh] sm:min-h-screen ">
        <div className="bg-[#60A5FA] h-[120px] top-36 right-20 absolute w-[120px] rounded-full blur-[90px] filter "></div>
        <div className="bg-[#60A5FA] h-[120px] top-[200px] right-[200px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
        <h1 className="SpaceGroteskBold text-[50px] sm:text-[64px]">
          About Me 👨&zwj;
        </h1>

        <p className="SpaceGroteskRegular text-[20px] sm:text-[40px] ">
          A brief intro to who i am and how i do what i do:
        </p>

        {/* about info */}
        <h1 className="SpaceGroteskRegular py-5 text-2xl sm:text-4xl ">
          I am{" "}
          <span className=" text-4xl sm:text-6xl SpaceGroteskBold ">
            {userData?.name}
          </span>
        </h1>

        {/* bg */}
        <div className="bg-[#60A5FA] h-[120px] top-[30rem] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>

        <div className="bg-[#60A5FA] h-[120px] top-[30rem] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>

        {/* mardown to jsx */}
        <div className="SpaceGroteskRegular text-[20px] sm:text-[24px] max-w-5xl mt-3">
          <Markdown>{ReadmeData}</Markdown>
          {/* <ReactMarkdown>{ReadmeData}</ReactMarkdown> */}
        </div>
      </div>

      {/* bottom navigation */}
      <BottomNavigation name={router.query?.username} />
    </div>
  );
};

export default Projects;

export async function getServerSideProps(context) {
  const readmedata = await fetch(
    `https://raw.githubusercontent.com/${context?.query?.username}/${context?.query?.username}/main/README.md`
  ).then((response) => response.text());

  const userData = await fetch(
    `https://api.github.com/users/${context?.query?.username}`
  ).then((res) => res.json());

  return {
    props: {
      userData: userData,
      ReadmeData: readmedata,
    }, // will be passed to the page component as props
  };
}
