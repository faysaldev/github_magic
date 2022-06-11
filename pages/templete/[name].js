import React from "react";
import { useRouter } from "next/router";
import SingleTempleteCard from "../../components/SingleTempleteCard";

const Name = () => {
  const router = useRouter();

  const templets = [
    {
      id: 1,
      name: "Templete 1",
      image: "https://i.ibb.co/5YYMWzK/Screenshot-14.pngs",
      link: `/templete/protfolio1/${router.query?.name}`,
    },
    {
      id: 2,
      name: "Templete 2",
      link: `/templete/protfolio2/${router.query?.name}`,
      image: "https://i.ibb.co/qjNn8Vb/Screenshot-12.png",
    },
  ];

  return (
    <div className="bg-black text-white w-full min-h-screen flex flex-col items-center">
      {/* TODO: home page content wrapper */}
      <div>
        {/* content */}
        <div className="max-w-[1100px] lg:max-w-[1300px] mx-auto">
          <h1 className="text-5xl text-center py-10 font-mono font-bold">
            Select one template
          </h1>

          <div className="flex flex-col md:flex-row md:justify-around md:space-x-12">
            {templets?.map((item) => (
              <SingleTempleteCard key={item?.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Name;
