import React from "react";
import { useRouter } from "next/router";
const Protfolio2 = () => {
  const router = useRouter();
  return <div>Protfolio2 {router.query.username}</div>;
};

export default Protfolio2;
