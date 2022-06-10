import React from "react";

const TempFooter = ({ user }) => {
  return (
    <footer className="text-center py-20 font-mono">
      <h1>
        © 2022 <a href={user?.html_url}>{user?.name}</a>
      </h1>
      <h1 className="mt-5">Powered by DevFolio</h1>
    </footer>
  );
};

export default TempFooter;
