import Image from "next/image";

export default function Home() {
  const SubmitUsername = () => {
    e.preventDefault();
  };

  return (
    <div className="bg-black text-white w-full min-h-screen flex flex-col items-center justify-center">
      {/* TODO: home page content wrapper */}
      <div>
        {/* content */}
        <div className="max-w-[1100px] mx-auto">
          {/* logo Content */}
          <div className="bg-[#F1F5F9] px-4 py-2 rounded-md w-fit h-fit mx-auto">
            <Image src="/logo.svg" width={311} height={56} className="filter" />
          </div>
          {/* Text  content */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold max-w-5xl text-center my-10 colorfulText2">
            <span className="colorfulText2"> Just type yo</span>
            <span className="colorfulText">ur Github username</span> an
            <span className="colorfulText3">d wait for the </span>
            <span className="colorfulText4">magic</span>
          </h1>

          {/* bottom  content */}
          <div className="flex flex-col justify-center items-center px-6 py-4">
            {/* input content */}
            <form className=" flex flex-col">
              <div className="flex flex-col sm:flex-row justify-center items-center my-5">
                <input
                  type="text"
                  placeholder="GitHub Username"
                  className="text-gray bg-[#3B3B3B] text-xl font-mono text-center my-5 rounded-xl sm:w-2/3 px-3 py-[.7em] sm:rounded-l-xl sm:rounded-r-none"
                />
                <button
                  type="submit"
                  onClick={SubmitUsername}
                  className="bg-[#141416]/80 outline-none hover:bg-[#141416] py-[1em] sm:rounded-r-xl sm:rounded-l-none w-[10rem] rounded-xl "
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Availavle Reques */}
            <h1 className="font-mono flex flex-col items-center">
              Available requests<span>30/35</span>
            </h1>
            {/* fotter  */}
            <footer className="font-mono text-xl py-10 relative">
              Created by{" "}
              <a
                href="https://github.com/faysaldev"
                target="_blank"
                rel="noreferrer"
              >
                Faysal Mridha
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
