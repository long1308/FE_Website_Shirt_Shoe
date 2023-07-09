import { BsFillTrash3Fill } from "react-icons/bs";
import { useState } from "react";
import { InputNumber } from "antd";

const Cart = () => {
  const [isIconHovered, setIsIconHovered] = useState(false);

  return (
    <>
      <h1 className="text-center mt-5 font-sans font-bold text-3xl mb-10">
        Shopping Cart
      </h1>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <div className="overflow-x-auto ml-10 ">
            <table className="divide-y-2 divide-gray-200 bg-white text-sm">
              <thead>
                <tr>
                  <th className="ml-1 px-16 py-3 font-medium text-gray-900 text-base">
                    <div className="flex items-center">Img</div>
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 text-left">
                    Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 pl-40">
                    Qty
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 pl-110 ">
                    Price
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 pl-20">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                    <div className="flex items-center md:w-2/5 relative">
                      <img className="w-full" src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-01-1.webp" alt="" />
                      <span className="text-xs flex gap-3 absolute right-0 top-2 bg-green-400 p-1 text-white rounded-full">
                        50% OFF</span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-base">
                    <div className=" items-center gap-1">
                      <p className="text-xl ">Sản Phẩm 1</p>
                      <div className="flex items-center gap-1">
                        <span className="text-base  ">Color:</span>
                        <span className=" bg-yellow-500 flex  gap-3 rounded-full w-4 h-4 opacity-70"></span></div>
                    </div>
                    <span className="  gap-3 text-base">Size: S</span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 pl-40">
                    <div className="flex items-center">
                      <InputNumber min={1} max={10} defaultValue={3} />
                      <div className="flex flex-col">
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 pl-10 text-xl pl-20">
                    $120.000
                  </td>
                  <td className={`whitespace-nowrap px-4 py-2 text-gray-700 pl-10 text-xl pl-20 ${isIconHovered ? "hover:text-red-500" : ""}`}>
                    <BsFillTrash3Fill />
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                    <div className="flex items-center md:w-2/5 relative">
                      <img className="w-full" src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-01-1.webp" alt="" />
                      <span className="text-xs flex gap-3 absolute right-0 top-2 bg-green-400 p-1 text-white rounded-full">
                        50% OFF</span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-base">
                    <div className=" items-center gap-1">
                      <p className="text-xl ">Sản Phẩm 1</p>
                      <div className="flex items-center gap-1">
                        <span className="text-base  ">Color:</span>
                        <span className=" bg-yellow-500 flex  gap-3 rounded-full w-4 h-4 opacity-70"></span></div>
                    </div>
                    <span className="  gap-3 text-base">Size: S</span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 pl-40">
                    <div className="flex items-center">
                      <InputNumber min={1} max={10} defaultValue={3} />
                      <div className="flex flex-col">
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 pl-10 text-xl pl-20">
                    $120.000
                  </td>
                  <td className={`whitespace-nowrap px-4 py-2 text-gray-700 pl-10 text-xl pl-20 ${isIconHovered ? "hover:text-red-500" : ""}`}>
                    <BsFillTrash3Fill />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div >
        <div className="col-span-1 mx-10 ">
          <div className="">
            <div className="font-bold text-2xl mt-5" >Item : 2</div>
            <div className="mb-4 mt-20 flex justify-between">
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
