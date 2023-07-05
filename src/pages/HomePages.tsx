import React from "react";
import Container from "./Container";
import ListProducts from "../components/Users/ListProducts/ListProducts";
import { BannerHome } from "../components";
type Props = object;
const HomePages = (props: Props) => {
  return (
    <div>
      <BannerHome></BannerHome>
      <Container />
      <ListProducts />
    </div>
  );
};
export default HomePages;
