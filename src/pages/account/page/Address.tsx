import { useState } from "react";
import Addresses_Edit from "./From/Address_Edit";
import Icon from "../../../components/Icon/icon";
const Address = () => {
  const [displayText, setDisplayText] = useState(false);
  const handleClick = () => {
    setDisplayText(!displayText);
  };
  return (
    <div className="">
      <div className="w-full md:w-3/4">
        <h1 className="text-3xl normal-case font-semibold mb-5">My Addresses</h1>
        <div className="flex justify-between">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border p-3 max-w-2xl overflow-hidden sm:rounded-lg">
              <h3 className="text-xl font-bold mb-3">Address 1 (Default)</h3>
              <div className="flex gap-3">
                <p className="text-base mb-1 border-r-2 pr-3 border-slate-800">Đỗ Duy Long</p>
                <p className="text-base mb-1">+876-432-4323</p>
              </div>
              <p>Số 2 ngách 40 ngõ 71 phương canh</p>
              <div className="flex gap-1 flex-wrap">
                <p className="text-base ">Phường Xuân Phương,</p>
                <p className="text-base ">Quận Nam Từ Liên,</p>
                <p className="text-base ">Hà Nội</p>
              </div>

              <div className=" flex justify-between items-end">
                <button onClick={handleClick} className="mt-5 flex gap-1 cursor-pointer">
                  <Icon name={'AiFillEdit'} className={"text-2xl"} />
                  <span>Edit</span>
                </button>
                <a className="hover:text-red-300" href="">Delete</a>
              </div>
            </div>
            <div className="bg-white border p-3 max-w-2xl overflow-hidden sm:rounded-lg">
              <h3 className="text-xl font-bold mb-3">Address 2</h3>
              <div className="flex gap-3">
                <p className="text-base mb-1 border-r-2 pr-3 border-slate-800">Đỗ Duy Long</p>
                <p className="text-base mb-1">+876-432-4323</p>
              </div>
              <p>Số 2 ngách 40 ngõ 71 phương canh</p>
              <div className="flex gap-1 flex-wrap">
                <p className="text-base ">Phường Xuân Phương,</p>
                <p className="text-base ">Quận Nam Từ Liên,</p>
                <p className="text-base ">Hà Nội</p>
              </div>
              <div className=" flex justify-between items-end">
                <button onClick={handleClick} className="mt-5 flex gap-1 cursor-pointer">
                  <Icon name={'AiFillEdit'} className={"text-2xl"} />
                  <span>Edit</span>
                </button>
                <a className="hover:text-red-300" href="">Delete</a>
              </div>
            </div>
          </div>
          <div className="flex gap-1 ml-10">
            <Icon name={"AiOutlinePlus"} className={"text-2xl cursor-pointer"} />
            <span className="cursor-pointer">New</span>
          </div>
        </div>
        {displayText &&
          <Addresses_Edit />
        }
      </div>
    </div>
  );
};
export default Address;
