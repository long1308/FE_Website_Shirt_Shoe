import { CustomTabs, ListProductNew } from "../..";
import { getProducts } from "../../../store/actions/actionProduct";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../store/store";
import "./List.css"
import { useEffect } from "react";
const ListProducts = () => {
  // const dispatch = useDispatch();
  // const dataProducts = useSelector((state: RootState) => state.products);
  // const { products, isLoading, error } = dataProducts
  // useEffect(() => {
  //   dispatch(getProducts() as never);
  // }, [dispatch]);



  return (
    <>
      <h1 className="text-5xl text-[#222] text-center font-bold tracking-wider my-5">Collections</h1>
      <CustomTabs/>
      <h1 className="text-5xl text-[#222] text-center font-bold tracking-wider my-5">New arrival</h1>
      <p className="text-base text-[#222] text-center font-medium tracking-wider mb-5">Hurry up! Limited
      </p>
      <ListProductNew />
    </>
  );
};

export default ListProducts;
