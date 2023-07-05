import React from "react";
import Container from "./Container";
import header_home from "./header_home";
import Header_home from "./header_home";

type Props = object;

const HomePages = (props: Props) => {
  return (
    <div>
      <Container />
      <Header_home />
    </div>
  );
};

export default HomePages;
