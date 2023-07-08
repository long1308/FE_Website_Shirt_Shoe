import { CustomTabs, ListProductNew } from "../..";

import "./List.css"
const ListProducts = () => {
  const data = [
    {
      label: "Women",
      value: "women",
    },
    {
      label: "Men",
      value: "men",
    },
    {
      label: "Accessories",
      value: "accessories",
    },
  ];
  return (
    <>
      <h1 className="text-5xl text-[#222] text-center font-bold tracking-wider my-5">Collections</h1>
      <CustomTabs data={data} defaultValue="women" />
      <h1 className="text-5xl text-[#222] text-center font-bold tracking-wider my-5">New arrival</h1>
      <p className="text-base text-[#222] text-center font-medium tracking-wider mb-5">Hurry up! Limited
      </p>
      <ListProductNew />
    </>
  );
};

export default ListProducts;
