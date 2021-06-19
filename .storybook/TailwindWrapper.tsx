import React, { ReactNode } from "react";
import "../src/index.css";

type TailWindWrapperProps = {
  children: ReactNode;
};

const TailwindWrapper = ({ children }: TailWindWrapperProps) => {
  return children;
};

export default TailwindWrapper;
