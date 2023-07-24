import { useState } from "react";
import Addresses_Edit from "./From/Address_Edit";
import Icon from "../../../components/Icon/icon";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import { Skeleton } from "antd";
const Address = () => {
  const [displayText, setDisplayText] = useState(false);
  const handleClick = () => {
    setDisplayText(!displayText);
  };
  const userInfor = useSelector((state: RootState) => state.users);
  const { isLoading, user, error } = userInfor
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-3/4">
        <h1 className="text-3xl normal-case font-semibold mb-5 mt-5 md:mt-0">My Addresses</h1>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
              isLoading ? <Skeleton /> : error ? "Error" :
                user && user.user.addressUser &&
                  user.user.addressUser.length > 0 ?
                  user.user.addressUser.map((address: any, index: number) =>
                    <div key={index} >
                      <div className="bg-white border p-3 max-w-2xl overflow-hidden rounded-lg">
                        <h3 className="text-xl font-bold mb-3">Address {index + 1} (Default)</h3>
                        <div className="flex gap-3">
                          <p className="text-base mb-1 border-r-2 pr-3 border-slate-800">{address.name}</p>
                          <p className="text-base mb-1">+876-432-4323</p>
                        </div>
                        <p>{address.apartmentNumber}</p>
                        <div className="flex gap-1 flex-wrap">
                          <p className="text-base ">{address.communeAddress},</p>
                          <p className="text-base ">{address.districtLeech},</p>
                          <p className="text-base ">{address.cityLeeched}</p>
                        </div>

                        <div className="flex justify-between items-end">
                          <button onClick={handleClick} className="mt-5 flex gap-1 cursor-pointer">
                            <Icon name={'AiFillEdit'} className={"text-2xl"} />
                            <span>Edit</span>
                          </button>
                          <a className="hover:text-red-300" href="/">Delete</a>
                        </div>
                      </div>
                    </div>)
                  : "error"
            }
          </div>


          <div className="flex gap-1 md:ml-10 mt-5">
            <Icon name={"AiOutlinePlus"} className={"text-2xl cursor-pointer"} />
            <span className="cursor-pointer">New</span>
          </div>
        </div>
        {displayText && <Addresses_Edit />}
      </div>
    </div>
  );
};

export default Address;
