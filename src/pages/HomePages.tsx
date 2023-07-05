import React from "react";
import Container from "./Container";
import ListProducts from "../components/Users/ListProducts/ListProducts";

type Props = object;

const HomePages = (props: Props) => {
  return (
    <div>
      <Container />
      <ListProducts />
    </div>
  );
};

export default HomePages;
