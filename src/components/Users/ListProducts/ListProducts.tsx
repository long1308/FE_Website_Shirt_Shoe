import { AiOutlineHeart } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import "./List.css";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import Image from "../../Image/Image";
// type Props = ReactNode;

const ListProducts = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        <div className="w-64 m-auto content border-2  overflow-hidden">
          <div className="w-full">
            <div className="w-full relative overflow-hidden ">
              <Link to={""} className="image-big">
                <Image
                  src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-03-1.webp"
                  alt="Leather Pegged Pants"
                  className="w-full transition duration-700 ease-in-out "
                />
              </Link>
              <div className="prd-sale absolute top-2 left-1 bg-pink-600">
                <span className=" m-2 block  rounded-full text-center text-sm font-medium text-white">
                  10% SALE
                </span>
              </div>
              <div className="prd-circle-labels absolute flex flex-col top-1 right-1 ">
                <a
                  className="heart bg-white flex justify-center items-center rounded-full shadow-md mt-2 cursor-pointer"
                  title="Add To Wishlist"
                >
                  <i className="icon-heart-stroke text-2xl p-1">
                    <AiOutlineHeart />
                  </i>
                </a>

                <span className="eye bg-white flex justify-center items-center rounded-full shadow-md mt-2  cursor-pointer">
                  <i className="icon-eye text-2xl p-1   ">
                    <FaRegEye />
                  </i>
                </span>
                <div className="color-palette bg-white flex flex-col justify-center items-center w-8 rounded-full shadow-md mt-2 cursor-pointer">
                  <i className="icon-palette  ">
                    <img
                      src="colorfiter.webp"
                      className="w-full rounded-full "
                      alt=""
                    />
                  </i>
                  <div className=" list-color">
                    <ul className="flex flex-col gap-4">
                      <li className="bg-red-500 p-3 rounded-full"></li>
                      <li className="bg-blue-500 p-3 rounded-full"></li>
                      <li className="bg-orange-500 p-3 rounded-full"></li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className="list-options color-swatch absolute bottom-1 left-1 ">
                <li className="w-10 h-10 mt-1 rounded-full hover:outline-1 hover:outline outline outline-1 overflow-hidden">
                  <img
                    src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-03-1.webp"
                    className="w-full h-full object-contain p-1"
                    alt="Color Name"
                  />
                </li>
                <li className="w-10 h-10 mt-1  rounded-full  hover:outline-1 hover:outline">
                  <img
                    src="https://gfx2.tatuum.com/media/res/products/564/24564/520x780/aDKGhv_1.jpg"
                    className="w-full h-full object-contain p-1"
                    alt="Color Name"
                  />
                </li>
                <li className="w-10 h-10 mt-1  rounded-full  hover:outline-1 hover:outline">
                  <img
                    src="https://gfx2.tatuum.com/media/res/products/564/24564/520x780/aDKGhv_1.jpg"
                    className="w-full h-full object-contain p-1"
                    alt="Color Name"
                  />
                </li>
              </ul>
            </div>
            <div className="prd-info">
              <div className="prd-info-wrap">
                <div className="prd-rating text-center mt-5 cursor-pointer">
                  <Rating
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    readOnly
                  />
                </div>
                <div className="text-center mt-1 cursor-pointer">
                  <span className="text-[#9e9e9e] font-normal text-sm">
                    FOXic
                  </span>
                </div>
                <h2 className="prd-title text-center mt-1 cursor-pointer">
                  <span className="text-[#282828] font-medium text-base hover:text-[#17c6aa]">
                    Leather Pegged Pants
                  </span>
                </h2>
                <div className="prd-description hidden">
                  Quisque volutpat condimentum velit. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nam nec ante sed lacinia.
                </div>
                <h2 className=" price  flex justify-center gap-5 text-center mt-1 cursor-pointer">
                  <span className="text-[#666565]  text-base line-through  ">
                    $ 180
                  </span>
                  <span className="text-[#282828] font-medium text-base  ">
                    $ 110
                  </span>
                </h2>
                <div className="mt-1 prd-action text-center btn-add  ">
                  <form action="#">
                    <button className="btn js-prd-addtocart text-white bg-[#17c6aa] hover:bg-[#1b1a1a] rounded-sm px-4 py-2 font-semibold ">
                      Add To Cart
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-64 m-auto content border-2  overflow-hidden">
          <div className="w-full">
            <div className="w-full relative overflow-hidden ">
              <Link to={""} className="image-big">
                <Image
                  src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-03-1.webp"
                  alt="Leather Pegged Pants"
                  className="w-full transition duration-700 ease-in-out "
                />
              </Link>
              <div className="prd-sale absolute top-2 left-1 bg-pink-600">
                <span className=" m-2 block  rounded-full text-center text-sm font-medium text-white">
                  10% SALE
                </span>
              </div>
              <div className="prd-circle-labels absolute flex flex-col top-1 right-1 ">
                <a
                  className="heart bg-white flex justify-center items-center rounded-full shadow-md mt-2 cursor-pointer"
                  title="Add To Wishlist"
                >
                  <i className="icon-heart-stroke text-2xl p-1">
                    <AiOutlineHeart />
                  </i>
                </a>

                <span className="eye bg-white flex justify-center items-center rounded-full shadow-md mt-2  cursor-pointer">
                  <i className="icon-eye text-2xl p-1   ">
                    <FaRegEye />
                  </i>
                </span>
                <div className="color-palette bg-white flex flex-col justify-center items-center w-8 rounded-full shadow-md mt-2 cursor-pointer">
                  <i className="icon-palette  ">
                    <img
                      src="colorfiter.webp"
                      className="w-full rounded-full "
                      alt=""
                    />
                  </i>
                  <div className=" list-color">
                    <ul className="flex flex-col gap-4">
                      <li className="bg-red-500 p-3 rounded-full"></li>
                      <li className="bg-blue-500 p-3 rounded-full"></li>
                      <li className="bg-orange-500 p-3 rounded-full"></li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className="list-options color-swatch absolute bottom-1 left-1 ">
                <li className="w-10 h-10 mt-1 rounded-full hover:outline-1 hover:outline outline outline-1 overflow-hidden">
                  <img
                    src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-03-1.webp"
                    className="w-full h-full object-contain p-1"
                    alt="Color Name"
                  />
                </li>
                <li className="w-10 h-10 mt-1  rounded-full  hover:outline-1 hover:outline">
                  <img
                    src="https://gfx2.tatuum.com/media/res/products/564/24564/520x780/aDKGhv_1.jpg"
                    className="w-full h-full object-contain p-1"
                    alt="Color Name"
                  />
                </li>
                <li className="w-10 h-10 mt-1  rounded-full  hover:outline-1 hover:outline">
                  <img
                    src="https://gfx2.tatuum.com/media/res/products/564/24564/520x780/aDKGhv_1.jpg"
                    className="w-full h-full object-contain p-1"
                    alt="Color Name"
                  />
                </li>
              </ul>
            </div>
            <div className="prd-info">
              <div className="prd-info-wrap">
                <div className="prd-rating text-center mt-5 cursor-pointer">
                  <Rating
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    readOnly
                  />
                </div>
                <div className="text-center mt-1 cursor-pointer">
                  <span className="text-[#9e9e9e] font-normal text-sm">
                    FOXic
                  </span>
                </div>
                <h2 className="prd-title text-center mt-1 cursor-pointer">
                  <span className="text-[#282828] font-medium text-base hover:text-[#17c6aa]">
                    Leather Pegged Pants
                  </span>
                </h2>
                <div className="prd-description hidden">
                  Quisque volutpat condimentum velit. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nam nec ante sed lacinia.
                </div>
                <h2 className=" price  flex justify-center gap-5 text-center mt-1 cursor-pointer">
                  <span className="text-[#666565]  text-base line-through  ">
                    $ 180
                  </span>
                  <span className="text-[#282828] font-medium text-base  ">
                    $ 110
                  </span>
                </h2>
                <div className="mt-1 prd-action text-center btn-add  ">
                  <form action="#">
                    <button className="btn js-prd-addtocart text-white bg-[#17c6aa] hover:bg-[#1b1a1a] rounded-sm px-4 py-2 font-semibold ">
                      Add To Cart
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProducts;
