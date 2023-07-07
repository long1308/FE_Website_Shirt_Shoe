// import React from "react";
// import Container from "./Container";

// import header_home from "./header_home";
// import Header_home from "./header_home";

// type Props = object;

// const HomePages = (props: Props) => {
//   return (
//     <div>
//       <Container />
//       <Header_home />
//     </div>
//   );
// };

import ListProducts from "../components/Users/ListProducts/ListProducts";
import { BannerHome } from "../components";
import Container from "./Container";
import Header_home from "../components/Users/Banner/HeaderHomeInfo";

type Props = object;
const HomePages = (props: Props) => {
  return (
    <div>
      <BannerHome></BannerHome>
      <Container />
    </div>
  );
};

export default HomePages;
