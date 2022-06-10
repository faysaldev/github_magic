import React from "react";
import SingleProjectCard from "./SingleProjectCard";

const MyProject = ({ repos }) => {
  console.log(repos);
  return (
    <section id="work" className="w-full mx-auto">
      <h2 className="text-5xl font-mono font-semibold text-start px-10 py-10">
        My Projects
      </h2>

      {/* Project Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {/* map all ther repos */}
        {repos && (
          <>
            {repos?.map((repo) => (
              <SingleProjectCard key={repo?.id} repo={repo} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default MyProject;
