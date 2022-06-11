import React from "react";
import ReactMarkdown from "react-markdown";
import Markdown from "markdown-to-jsx";

function TempAbout({ data }) {
  return (
    <section
      id="#about"
      className="container mx-auto flex flex-col justify-center items-center"
    >
      <h1 className=" text-5xl p-10 font-semibold text-start w-full font-mono">
        About Me
      </h1>
      {/* about text */}
      <div className="flex flex-col items-center max-w-5xl mx-auto justify-center px-2 sm:p-0">
        {/* readme text start */}
        <Markdown>{data}</Markdown>
        {/* <ReactMarkdown>{data}</ReactMarkdown> */}
        {/* readme text end */}
      </div>
    </section>
  );
}

export default TempAbout;
