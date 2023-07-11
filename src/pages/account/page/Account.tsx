import React, { useState, useEffect } from "react";
import Account_Edit from "./From/Account_Edit";
import Icon from "../../../components/Icon/icon";
import { Input } from "antd";
const Account = () => {
  const [displayText, setDisplayText] = useState(false);
  const handleClick = () => {
    setDisplayText(!displayText);
  };
  return (
    <div className="flex">
      <div className="w-full md:w-3/4">
        <h1 className="text-3xl normal-case font-semibold mb-5">Account Details</h1>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white border p-3 max-w-2xl overflow-hidden rounded-lg">
            <h3 className="text-xl font-medium mb-3">Personal Info</h3>
            <div>
              <span className="font-medium text-lg">First Name:</span> <span className="text-base">Jenny</span>
            </div>
            <div>
              <span className="font-medium text-lg">Last Name:</span> <span className="text-base">Raider</span>
            </div>
            <div>
              <span className="font-medium text-lg">E-mail:</span> <span className="text-base">jennyraider@hotmail.com</span>
            </div>
            <div>
              <span className="font-medium text-lg">Phone:</span> <span className="text-base">876-432-4323</span>
            </div>
            <button onClick={handleClick} className="mt-5 flex gap-1 cursor-pointer">
              <Icon name={'AiFillEdit'} className={"text-2xl"} />
              <span>Edit</span>
            </button>
          </div>
        </div>
        {displayText && (
          <Account_Edit />
        )}
      </div>
    </div>
  );
};

export default Account;
