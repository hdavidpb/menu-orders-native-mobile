import { Redirect } from "expo-router";
import React, { useRef } from "react";

const Index = () => {
  const isAdmin = useRef("YES");

  if (isAdmin.current === "YES") return <Redirect href={"/dashboard"} />;

  return <Redirect href={"/menu"} />;
};

export default Index;
