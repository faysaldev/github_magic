import React from "react";
import Image from "next/image";
import { EyeIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const SingleTempleteCard = ({ item }) => {
  const router = useRouter();

  return (
    <div onClick={() => router.push(item?.link)}>
      <div className="container cursor-pointer bg-[#111111] mx-auto max-w-lg 2xl:max-w-xl overflow-hidden scrollbar-none my-5 ">
        <div className=" mx-1 flex flex-col border-gray-500 border relative rounded">
          <div className="flex-1 flex justify-center items-center overflow-hidden p-2 ">
            <img
              src={item?.image}
              width="100%"
              height="100%"
              className="rounded"
            />
          </div>
          {/* nav content */}
          <div className="h-12 flex justify-between items-center shrink-0 border-gray-500 border-t">
            <h1 className=" md:text-xl font-bold ml-10 ">{item?.name}</h1>
            <div
              onClick={() => router.push(item?.link)}
              className="action focus-on-key flex justify-center items-center w-12 h-12 border-gray-500 border-b border-l hover:text-blue-400"
            >
              <EyeIcon className="w-5 h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTempleteCard;
