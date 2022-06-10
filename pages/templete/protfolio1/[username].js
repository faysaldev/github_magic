import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TempBanner1 from "../../../components/Templete1/TempBanner1";
import TempAbout from "../../../components/Templete1/TempAbout";
import MyProject from "../../../components/Templete1/MyProject";
import TempFooter from "../../../components/Templete1/TempFotter";
import Temple1Header from "../../../components/Templete1/Temple1Header";

const Protfolio1 = ({ userData, ReadmeData, ReposData }) => {
  const router = useRouter();

  console.log(userData);
  console.log(ReadmeData);
  console.log(ReposData);

  return (
    <div className="bg-black text-white w-full min-h-screen overflow-x-hidden">
      {/* TODO: home page content wrapper */}
      <Temple1Header user={userData} />
      <div className="max-w-8xl mx-auto  px-4 sm:px-6">
        <TempBanner1 user={userData} />
        <TempAbout data={ReadmeData} />
        <MyProject repos={ReposData} />
        <TempFooter />
      </div>
    </div>
  );
};

export default Protfolio1;

export async function getServerSideProps(context) {
  const readmedata = await fetch(
    "https://raw.githubusercontent.com/devsahinur/devsahinur/main/README.md"
  ).then((response) => response.text());

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
      ReadmeData: readmedata,
      ReposData: repoData,
    }, // will be passed to the page component as props
  };
}
