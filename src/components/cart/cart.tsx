import { BsFillTrash3Fill } from "react-icons/bs";
import { useState } from "react";
import { InputNumber } from "antd";

const Cart = () => {
  const [isIconHovered, setIsIconHovered] = useState(false);

  return (
    <>
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
                <tr className="">
                  <td className="whitespace-nowrap font-medium text-gray-900 flex text-left py-4">
                    <div className="relative">
                      <img className="w-full h-auto lg:w-40 object-cover md:w-40" src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-01-1.webp" alt="" />
                      <span className="text-xs absolute top-0 right-0 bg-green-400 p-1 text-white rounded-full hidden sm:block">
                        50% OFF
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap  text-gray-700 py-4 ">
                    <div className=" items-center ">
                      <p className="text-xs lg:text-xl md:text-xl">Sản Phẩm 1</p>
                      <div className="flex items-center gap-1">
                        <span className="text-xs lg:text-base md:text-xl ">Color:</span>
                        <span className=" bg-yellow-500 flex  gap-3 rounded-full w-4 h-4 opacity-70"></span></div>
                    </div>
                    <span className="  gap-3 text-xs lg:text-base md:text-xl">Size: S</span>
                  </td>
                  <td className="whitespace-nowrap text-gray-700 py-4">
                    <div className="flex items-center text-xs lg:text-xl">
                      <InputNumber min={1} max={10} defaultValue={3} className="text-xs lg:text-xl w-10 lg:w-20" />
                      <div className="">
                      </div>
                    </div>
                  </td>
                  <td className=" whitespace-nowrap  text-gray-700  text-xs lg:text-xl md:text-xl py-4 ">$120,000</td>
                  <td className={`whitespace-nowrap text-gray-700  text-xs lg:text-xl  md:text-xl px-4 py-4 ${isIconHovered ? "hover:text-red-500" : ""}`}>
                    <BsFillTrash3Fill />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div >
        <div className="col-span-1 mx-10 ">
          <div className="flex flex-col">
            <div className="font-bold text-2xl mt-5" >Item : 2</div>
            <div className="mb-4 mt-5 flex justify-between">
              <span className="font-bold text-2xl">Total</span>
              <span className="text-2xl ml-auto">$120.00</span>
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
    </>
  );
};

export default Cart;
