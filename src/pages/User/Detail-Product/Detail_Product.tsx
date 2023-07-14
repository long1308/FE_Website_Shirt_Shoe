import "./Detail_Products.css";
import { ImageList, ImageListItem, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { Carousel, IconButton } from "@material-tailwind/react";
import { TbTruckDelivery } from "react-icons/tb";
import { FcConferenceCall } from "react-icons/fc";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import Icon from "../../../components/Icon/icon";
import { Item } from "../../../components";
import Comment from "../../../components/Comment/Comment";
import Rating_star from "../../../components/Rating/Rating_star";
import Image from "../../../components/Image/Image";
import { Image as AntdImage } from "antd";
const Detail_Product = () => {
  const itemData = [
    {
      img: "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/product-page/product-07.webp",
    },
    {
      img: "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/product-page/product-04.webp",
    },
    {
      img: "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/product-page/product-01.webp",
    },
    {
      img: "https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong.jpg",
    },
    {
      img: "https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg",
    },
    {
      img: "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/product-page/product-04.webp",
    },
    {
      img: "https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/product-page/product-01.webp",
    },
  ];
  return (
    <>
      <div className="w-screen min-h-[300px] mt-10">
        <div className="big-content w-full px-2 md:w-4/5  mx-auto">
          {/* menu */}
          <div className="breadcrumbs">
            <ul className="flex items-center gap-2">
              <Link to={""}>
                <li className="underline underline-offset-4 hover:text-[#17c6aa] ">
                  Home
                </li>
              </Link>
              <li>/</li>
              <li className="underline underline-offset-4 hover:text-[#17c6aa] ">
                Women
              </li>
              <li>/</li>
              <li>Áo Pro</li>
            </ul>
          </div>
          {/* name và rating */}
          <div className="name-rating mt-8 md:mt-10">
            <div className="rating flex items-center">
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                readOnly
              />
              <span className="underline underline-offset-1">(17 reviews)</span>
            </div>
            <div className="name-product mt-3">
              <h1 className="title-name uppercase font-medium text-[#282828] text-2xl">
                Bố Long Đến Đây
              </h1>
            </div>
          </div>
          {/* Slide và content */}
          <div className="slider-text-content min-w-full flex flex-col gap-5 mt-8 md:mt-10 md:flex-row">
            {/* slider */}
            <div className="slider w-full md:w-2/5 relative overflow-hidden">
              <Carousel
                loop={true}
                transition={{ duration: 1 }}
                className="rounded-xl"
                prevArrow={({ handlePrev }) => (
                  <IconButton
                    variant="text"
                    color="blue"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 -translate-y-2/4 left-4 -translate-x-[120%] icon-arrow-left"
                  >
                    <i className="text-3xl text-black icon-arrow-left">
                      <FiArrowLeftCircle />
                    </i>
                  </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                  <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute top-2/4 -translate-y-2/4 !right-4 translate-x-[120%] icon-arrow-right "
                  >
                    <i className="text-3xl text-black transform ">
                      <FiArrowRightCircle />
                    </i>
                  </IconButton>
                )}
              >
                <AntdImage
                  preview={{ mask: false }}
                  src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/product-page/product-01.webp"
                  className="h-full w-full object-cover"

                />
                <img
                  src=""
                  alt="image 1"
                />
                <img
                  src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/product-page/product-04.webp"
                  alt="image 2"
                  className="h-full w-full object-cover"
                />
                <img
                  src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/product-page/product-07.webp"
                  alt="image 3"
                  className="h-full w-full object-cover"
                />
              </Carousel>
              {/* sale */}
              <div className="prd-sale absolute top-2 left-1 bg-pink-600">
                <span className=" m-2 block  rounded-full text-center text-sm font-medium text-white">
                  10% SALE
                </span>
              </div>
            </div>
            {/* content */}
            <div className="text-content flex-1">
              <div className="info-price flex flex-col md:flex-row gap-5 items-center">
                <h1 className="text-3xl font-normal">$ 180.00</h1>
                <div className="price-old">
                  <h2 className="text-lg line-through">$ 210.00</h2>
                  <p className="text-sm font-medium text-[#fb317d]">
                    You Save: $131.99 (28%)
                  </p>
                </div>
              </div>
              <div className="info-desc mt-5">
                <h2 className="text-lg font-medium">Short description</h2>
                <p className="break-words mt-3 text-sm text-[#282828]">
                  Model is 5'9" wearing Size XS TallAnd without further ado, we
                  give you our finest Shopify Theme FOXic! It is a subtle,
                  complex and yet an extremely easy to use template for anyone,
                  who wants to create own website in ANY area of expertise.
                </p>
              </div>
              <hr className="bg-gray-300 h-1 mx-auto mt-10" />
              {/* Status */}
              <div className="info-item-block-status mt-5">
                <div className="box grid grid-cols-1 md:grid-cols-2 p-10 bg-[#f7f7f8]">
                  <div className="box1">
                    <p>
                      Availability: <span>In Stock</span>
                    </p>
                    <p>
                      Tax Info: <span>Tax included.</span>
                    </p>
                    <p>
                      Collection:<span>Women</span>
                    </p>
                  </div>
                  <div className="box2">
                    <p>
                      Availability: <span>In Stock</span>
                    </p>
                    <p>
                      Tax Info: <span>Tax included.</span>
                    </p>
                    <p>
                      Collection:<span>Women</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Options */}
              <div className="options">
                {/* color */}
                <div className="color flex items-center gap-10">
                  <h2 className="text-lg font-medium">Color:</h2>
                  <ul className="flex items-center gap-5">
                    <li className="">
                      <div className="w-12 border border-gray-900 rounded-md overflow-hidden">
                        <img
                          src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/product-page/product-01.webp"
                          alt="image 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="w-12 border border-gray-900 rounded-md overflow-hidden">
                        <img
                          src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/product-page/product-01.webp"
                          alt="image 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="w-12 border border-gray-900 rounded-md overflow-hidden">
                        <img
                          src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/product-page/product-01.webp"
                          alt="image 1"
                          className="w-full object-cover"
                        />
                      </div>
                    </li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                {/* size */}
                <div className="size flex items-center gap-10 mt-5">
                  <h2 className="text-lg font-medium">Size:</h2>
                  <ul className="flex items-center gap-2">
                    <li className="rounded-md cursor-pointer">
                      <span className="active-bg-size hover:bg-black hover:text-white px-1 py-2 rounded-md ">
                        Small
                      </span>
                    </li>
                    <li>
                      <span>Medium</span>
                    </li>
                    <li>
                      <span>Large</span>
                    </li>
                  </ul>
                </div>
                {/* action-button số lượng yêu thích */}
                <div className="action-addtocart mt-5">
                  {/* số lượng */}
                  <div className="quantity flex items-center gap-5">
                    <h2 className="text-lg font-medium">Quantity:</h2>
                    <div className="input-number flex items-center gap-5">
                      <button className="btn-minus">-</button>
                      <input
                        type="number"
                        className="w-12 text-center"
                        defaultValue={1}
                      />
                      <button className="btn-plus">+</button>
                    </div>
                  </div>
                  {/* button */}
                  <div className="button flex items-center gap-4 mt-5">
                    <button className="btn-addtocart flex-1 bg-[#17c6aa] text-white hover:bg-black py-4 rounded-md">
                      Add to cart
                    </button>
                    <button className="btn-wishlist">
                      <span>
                        <Icon name={"BsHeart"} className="text-2xl" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mô tả và support */}
          <div className="desc-support">
            <div className="info-support flex flex-col gap-10 md:flex-row justify-between items-center bg-gray-100 py-2 px-1 mt-8 md:mt-20">
              <div className="item flex items-center ">
                <i className="text-4xl">
                  <FcConferenceCall />
                </i>
                <span>24/7 Support</span>
              </div>
              <div className="item">
                <span>Use promocode FOXIC to get 15% discount!t</span>
              </div>
              <div className="item flex items-center">
                <i className="text-4xl">
                  <TbTruckDelivery />
                </i>
                <span>Fast Shipping</span>
              </div>
            </div>
            {/* Mô tả */}
            <div className="info-desc mt-8 md:mt-20">
              <h1 className="underline underline-offset-8 text-xl font-semibold my-10">
                Description
              </h1>
              <div className="desc flex flex-col-reverse md:flex-row items-start gap-5">
                <p className="mb-5 text-base leading-7 indent-8">
                  Nor again is there anyone who loves or pursues or desires to
                  obtain pain of itself, because it is pain, but because
                  occasionally circumstances occur in which toil and pain can
                  procure him some great pleasure. To take a trivial example,
                  which of us ever undertakes laborious physical exercise,
                  except to obtain some advantage from it? But who has any right
                  to find fault with a man who chooses to enjoy a pleasure that
                  has no annoying consequences, or one who avoids a pain that
                  produces no resultant pleasure. Nor again is there anyone who
                  loves or pursues or desires to obtain pain of itself, because
                  it is pain, but because occasionally circumstances occur in
                  which toil and pain can procure him some great pleasure.
                </p>
                <div className="list-images border-2 p-5 rounded-lg md:11/12">
                  <ImageList variant="masonry" cols={3} gap={8}>
                    {itemData.slice(0, 6).map((item) => (
                      <ImageListItem key={item.img}>
                        <img
                          src={`${item.img}?w=248&fit=crop&auto=format`}
                          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </div>
              </div>
            </div>
          </div>
          {/* Đánh giá */}
          <div className="rating-user">
            <h1 className="my-5 text-xl font-medium">Đánh giá và Nhận xét Xiaomi Redmi Note 12 Pro 5G</h1>
            <div className="shadow-rating-user  min-h-[200px] w-full rounded-lg p-5 ">
              <div className="content-rating min-h-[200px]  border-2 border-gray-300 rounded-2xl flex items-center">
                <div className="rating-big border-r-2 p-2 text-center w-1/3 ">
                  <p>4.5/5</p>
                  <div className="rating-star">
                    <i>  <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    /></i>
                  </div>
                  <p>4 đánh giá và nhận xét</p>
                </div>
                <div className="rating-big-item w-full">
                  <Rating_star value={2} />
                  <Rating_star value={4} />
                  <Rating_star value={3} />
                  <Rating_star value={0} />
                  <Rating_star value={1} />

                </div>
              </div>
              {/* button đánh giá */}
              <div className="button-rating-and-commnet mt-5 w-full mx-auto flex justify-center items-center ">
                <button className="btn-rating-and-commnet text-base bg-[#17c6aa] text-white hover:bg-black py-2 px-20 rounded-xl">
                  Đánh giá ngay
                </button>
              </div>
              {/* user-rating và đánh giá */}
              <div className="user-rating-evaluate ">
                <div className="user-rating-evaluate-item mt-5">
                  <div className="flex items-center gap-3">
                    <div className="user-rating-evaluate-item-img w-8 h-8">
                      <Image className={"w-full h-full rounded-full object-cover"} src={"https://pbs.twimg.com/media/E5XTyGpVkAAXNTp.jpg:large"} />

                    </div>
                    <span className="font-semibold text-base">Đỗ Thành Long</span>
                  </div>

                  <div className="user-rating-evaluate-item-content ml-10">

                    <div className="rating-star bg-blue-gray-50 p-2 rounded-lg">
                      <div className="flex items-center h-8 ">
                        <span className="font-semibold text-sm">Đánh giá: </span>
                        <i className="flex items-center ">  <Rating style={{ fontSize: "18px" }}
                          name="half-rating-read"
                          defaultValue={2.5}
                          precision={0.5}
                          readOnly
                        /></i>
                      </div>
                      <div className="flex items-center">
                        <span className=" font-semibold text-sm">Nhận xét: </span>
                        <p className="flex items-center text-xs">Sản phẩm rất là ok</p>
                      </div>
                    </div>

                  </div>


                </div>
              </div>


              <div className="user-rating-evaluate ">
                <div className="user-rating-evaluate-item mt-5">
                  <div className="flex items-center gap-3">
                    <div className="user-rating-evaluate-item-img w-8 h-8">
                      <Image className={"w-full h-full rounded-full object-cover"} src={"https://pbs.twimg.com/media/E5XTyGpVkAAXNTp.jpg:large"} />

                    </div>
                    <span className="font-semibold text-base">Đỗ Thành Long</span>
                  </div>

                  <div className="user-rating-evaluate-item-content ml-10">

                    <div className="rating-star bg-blue-gray-50 p-2 rounded-lg">
                      <div className="flex items-center h-8 ">
                        <span className="font-semibold text-sm">Đánh giá: </span>
                        <i className="flex items-center ">  <Rating style={{ fontSize: "18px" }}
                          name="half-rating-read"
                          defaultValue={2.5}
                          precision={0.5}
                          readOnly
                        /></i>
                      </div>
                      <div className="flex items-center">
                        <span className=" font-semibold text-sm">Nhận xét: </span>
                        <p className="flex items-center text-xs">Sản phẩm rất là ok</p>
                      </div>
                    </div>

                  </div>


                </div>
              </div>
            </div>



          </div>
          {/* Coment user */}
          <div className="comment">
            <Comment />
          </div>
          {/* Sản phẩm cùng loại */}
          <div className="prd-cate mt-8 md:mt-10">
            <h1 className="text-center text-3xl font-medium my-5">
              Similar products
            </h1>
            {/* <Item /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail_Product;
