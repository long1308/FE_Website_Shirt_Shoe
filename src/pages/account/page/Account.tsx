
import { useState } from "react";
import Account_Edit from "./From/Account_Edit";
import Icon from "../../../components/Icon/icon";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import { Skeleton } from "antd";
import moment from "moment";
const Account = () => {
  const [displayText, setDisplayText] = useState(false);
  const handleClick = () => {
    setDisplayText(!displayText);
  };
  const userInfor = useSelector((state: RootState) => state.users);
  const { isLoading, user, error } = userInfor
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-3/4">
        <h1 className="text-3xl normal-case font-semibold mb-5 mt-5 md:mt-0">Account Details</h1>
        {
          isLoading ? <Skeleton /> : error ? "Error" : user ?
            (
              <div className="flex border justify-between flex-row-reverse">
                <div className="bg-white  p-3 rounded-lg w-4/5 ml-3">
                  <h3 className="text-xl font-medium mb-3">Personal Info</h3>
                  <div>
                    <span className="font-medium text-lg">First Name:</span>
                    <span className="text-base"> {user.user.name}</span>
                  </div>

                  <div>
                    <span className="font-medium text-lg">E-mail:</span>{" "}
                    <span className="text-base"> {user.user.email}</span>
                  </div>
                  <button
                    onClick={handleClick}
                    className="mt-5 flex gap-1 cursor-pointer"
                  >
                    <Icon name={"AiFillEdit"} className={"text-2xl"} />
                    <span>Edit</span>
                  </button>
                </div>
                <div className=" p-2">
                  <img className="w-48 h-48 border rounded-full" src={user.user.image_url} alt="" />
                  <p className="text-center mt-3">{moment(user.user.createdAt).format('LL')}</p>
                </div>
              </div>
            ) : "error"
        }

        {displayText && <Account_Edit />}
      </div>
    </div>
  );
};

export default Account;

