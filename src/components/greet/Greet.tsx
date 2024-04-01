import React from "react";
import { GreetProps } from "./greet.type";

const Greet = ({ name }: GreetProps) => {
  return <div>Hello {name ? name : "Guest"}</div>;
};

export default Greet;
