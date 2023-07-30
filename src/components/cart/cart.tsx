import { BsFillTrash3Fill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { deleteCart, getOneCart, updateCart } from "../../store/actions/actionCart";
import Loading from "../Action/Loading/Loading";
import FormatterPrice from "../FormatterPrice/FormatterPrice";
import Message from "../Action/Message/Message";
const Cart = () => {
  const [isIconHovered, setIsIconHovered] = useState(false);
  const dispatch = useDispatch();
  const carts = useSelector((state: RootState) => state.carts);
  const { cart, isLoading } = carts;
  const user = useSelector((state: RootState) => state.users.user.user);
  useEffect(() => {
    dispatch(getOneCart(user._id) as never);
  }, [dispatch, user._id])
  const getMaxQuantityForSize = (size: string, color: string) => {
    if (!cart || !cart.items) return 0;
    const itemWithSizeAndColor = cart.items.find(
      (item) => item.size[0] === size && item.color[0] === color
    );
    if (itemWithSizeAndColor && itemWithSizeAndColor.productId) {
      const colorSize = itemWithSizeAndColor.productId.colorSizes.find(
        (cs: any) => cs.color === color
      );

      if (colorSize) {
        const sizeInfo = colorSize.sizes.find((s: any) => s.size === size);
        if (sizeInfo) {
          return sizeInfo.quantity;
        }
      }
    }

    return 0;
  };
  const handleQuantityChange = (newQuantity: number, item: any) => {
    const data = {
      "_id": item._id,
      "quantity": newQuantity
    }
    console.log(data);
    dispatch(updateCart(data, user._id) as never);
    Message("success", "Update cart successfully");
  };
  const handleRefresh = () => {
    dispatch(getOneCart(user._id) as never);
  }
  const handleDelete = (item: any) => {
    dispatch(deleteCart(user._id, item._id) as never);
    Message("success", "Delete item successfully");
  }
  return (
    <div>
      {isLoading ? <Loading /> :
        <div>
          <h1 className="text-center font-sans font-bold text-3xl mb-10">
            Shopping Cart
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
            <div className="md:col-span-2 ">
              <div className="overflow-x-auto mx-10">
                <table className=" table min-w-full divide-y-2 divide-gray-200 bg-white text-sm ">
                  <thead className="ltr:text-left rtl:text-right ">
                    <tr>
                      <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left">
                        Image
                      </th>
                      <th className="whitespace-nowrap py-4   font-medium text-gray-900 text-left">
                        Name
                      </th>
                      <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left">
                        Qty
                      </th>
                      <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left">
                        Price
                      </th>
                      <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left">Action</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 ">
                    {cart && cart.items.map((item: any, index) =>
                      <tr key={index}>
                        <td className="whitespace-nowrap font-medium text-gray-900 flex text-left py-4">
                          <div className="relative">
                            <img className="w-full h-auto lg:w-40 object-cover md:w-40" src={item.image} alt="" />
                            {
                              item.productId.hot_sale && item.productId.hot_sale > 0 ? <span className="text-xs absolute top-0 right-0 bg-green-400 p-1 text-white rounded-full hidden sm:block">
                                {item.productId.hot_sale}% OFF
                              </span> : null
                            }
                          </div>
                        </td>
                        <td className="whitespace-nowrap  text-gray-700 py-4 ">
                          <div className=" items-center ">
                            <p className="text-xs lg:text-xl md:text-xl">{item.productId.name}</p>
                            <div className="flex items-center gap-1">
                              <span className="text-xs lg:text-base md:text-xl ">Color: </span>
                              <span style={{ backgroundColor: item.color }} className="flex gap-3 rounded-full w-4 h-4 opacity-70"></span></div>
                          </div>
                          <span className="  gap-3 text-xs lg:text-base md:text-xl">Size: {item.size}</span>
                        </td>
                        <td className="whitespace-nowrap text-gray-700 py-4">
                          <div className="flex items-center text-xs lg:text-xl">
                            <InputNumber min={1} max={getMaxQuantityForSize(item.size[0], item.color[0])} onChange={(newQuantity) => handleQuantityChange(newQuantity, item)} defaultValue={item.quantity} className="text-xs lg:text-xl w-10 lg:w-20" />
                            <div className="">
                            </div>
                          </div>
                        </td>
                        <td className=" whitespace-nowrap  text-gray-700  text-xs lg:text-xl md:text-xl py-4 ">{FormatterPrice(item.price)}</td>
                        <td onClick={() => handleDelete(item)} className={`whitespace-nowrap cursor-pointer text-gray-700  text-xs lg:text-xl  md:text-xl px-4 py-4 ${isIconHovered ? "hover:text-red-500" : ""}`}>
                          <BsFillTrash3Fill />
                        </td>
                      </tr>)}

                  </tbody>
                </table>
              </div>
            </div >
            <div className="col-span-1 mx-10 ">
              <div className="flex flex-col">
                <button
                  onClick={handleRefresh}
                  className="inline-flex  items-center justify-center w-2/3 px-6 py-2 space-x-2 text-sm font-medium text-white transition bg-blue-700 border border-blue-700 rounded appearance-none cursor-pointer select-none hover:border-blue-800 hover:bg-blue-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:pointer-events-none disabled:opacity-75">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 animate-spin" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                      />
                  </svg>
                  <span className="p-2 text-xs lg:text-xl md:text-xl">Refresh...</span>
                </button>
                <div className="font-bold text-2xl mt-5" >Item : {cart?.totalQuantity}</div>
                <div className="mb-4 mt-5 flex justify-between">
                  <span className="font-bold text-2xl">Total</span>
                  <span className="text-2xl ml-auto">{FormatterPrice(cart?.totalpriceSale || 0)}</span>
                </div>
                <button className="text-xl mb-2 bg-[#17c6aa] text-white h-[60px] w-full flex items-center justify-center font-sans hover:bg-black hover:text-white">
                  Checkout
                </button>
                <div>
                  <div className="text-right">
                    <span className="font-bold"> Standart shipping</span><br />
                    10 - 11 business days<br />
                    1 item ships from the U.S. and will be
                  </div>
                </div>
              </div>
            </div>
          </div >
        </div>
      }

    </div>
  );
};

export default Cart;
