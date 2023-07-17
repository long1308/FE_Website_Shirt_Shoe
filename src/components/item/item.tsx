import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import Image from "../Image/Image";
import Icon from "../Icon/icon";
import { Tooltip } from "antd";
import { Iproduct } from "../../interface/product";
import FormatterPrice from "../FormatterPrice/FormatterPrice";
// type Props = ReactNode;
type Props = {
    buttonAdd?: string;
    product?: Iproduct
}
const Item = ({ buttonAdd, product }: Props) => {
    if (!product) {
        return null
    }
    return (
        <div className="w-64 m-auto content border-2  overflow-hidden">
            <div className="w-full">
                <div className="w-full relative overflow-hidden ">
                    <Link to={`products/${product._id}`} className="image-big">
                        <Image
                            src={product.image[0]}
                            alt="Leather Pegged Pants"
                            className="w-full transition duration-700 ease-in-out "
                        />
                    </Link>
                    <div className="prd-sale absolute top-2 left-1 bg-pink-600">
                        {
                            product.hot_sale && product.hot_sale > 0 ? <span className=" m-2 block  rounded-full text-center text-sm font-medium text-white">
                                {product.hot_sale}% SALE
                            </span> : null
                        }
                    </div>
                    <div className="prd-sale absolute top-14 left-1 bg-[#33c7fd]">
                        {
                            product.featured ? <span className=" m-2 block  rounded-full text-center text-sm font-medium text-white">
                                New
                            </span> : null
                        }
                    </div>
                    <div className="prd-circle-labels absolute flex flex-col top-1 right-1 ">
                        <span className="eye bg-white flex justify-center items-center rounded-full shadow-md mt-2  cursor-pointer">
                            <i className="icon-eye text-2xl p-1 ">
                                <Tooltip title={"ADD TO WISHLIST"} placement="left">
                                    <span>
                                        <Icon name={"BsHeart"} />
                                    </span>
                                </Tooltip>
                            </i>
                        </span>
                        <span className="eye bg-white flex justify-center items-center rounded-full shadow-md mt-2  cursor-pointer">
                            <i className="icon-eye text-2xl p-1   ">
                                <Tooltip title={"QUICK VIEW"} placement="left">
                                    <span>
                                        <Icon name={"FaRegEye"} />
                                    </span>
                                </Tooltip>
                            </i>
                        </span>
                        <div className="color-palette bg-white flex flex-col justify-center items-center w-8 rounded-full shadow-md mt-2 cursor-pointer">
                            <i className="icon-palette  ">
                                <img
                                    src="colorfiter.webp"
                                    className="w-full rounded-full"
                                    alt=""
                                />
                            </i>
                            <div className="list-color">
                                <ul className="flex flex-col gap-3">
                                    {product.colorSizes.map(({ color }, index) => (
                                        <li key={index}>
                                            <Tooltip title={color} placement="left">
                                                <div className={`bg-${color}-500 p-3 rounded-full`}></div>
                                            </Tooltip>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul className="list-options color-swatch absolute bottom-1 left-1 ">
                        {
                            product.image.map((image, index) =>
                                <li key={index} className="w-10 h-10 mt-1 rounded-full hover:outline-1 hover:outline outline outline-1 overflow-hidden">
                                    <img
                                        src={image}
                                        className="w-full h-full object-contain p-1"
                                        alt="Color Name"
                                    />
                                </li>)
                        }
                    </ul>
                </div>
                <div className="prd-info">
                    <div className="prd-info-wrap">
                        <div className="prd-rating text-center mt-5 cursor-pointer">
                            <Rating
                                name="half-rating-read"
                                defaultValue={product.rating}
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
                                {product.name}
                            </span>
                        </h2>
                        <div className="prd-description hidden">
                            Quisque volutpat condimentum velit. Class aptent taciti
                            sociosqu ad litora torquent per conubia nostra, per inceptos
                            himenaeos. Nam nec ante sed lacinia.
                        </div>
                        <h2 className=" price  flex justify-center gap-5 text-center mt-1 cursor-pointer">

                            {product.hot_sale && product.hot_sale > 0 ? (
                                <div className="flex gap-2">
                                    <span className="text-[#666565]  text-base line-through  ">
                                        {FormatterPrice(product.price)}
                                    </span>
                                    <span className="text-[#282828] font-medium text-base">
                                        {FormatterPrice(product.priceSale!)}
                                    </span>
                                </div>

                            ) : <span className="text-[#282828] font-medium text-base">
                                {FormatterPrice(product.priceSale!)}
                            </span>}
                        </h2>
                        <div className="mt-1 prd-action text-center btn-add  ">
                            <form action="#">
                                <button className="btn js-prd-addtocart text-white bg-[#17c6aa] hover:bg-[#1b1a1a] rounded-sm px-4 py-2 font-semibold ">
                                    {buttonAdd ? buttonAdd : "ADD TO CART"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Item;