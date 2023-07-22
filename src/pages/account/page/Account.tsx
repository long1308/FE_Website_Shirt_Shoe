
import { useState } from "react";
import Account_Edit from "./From/Account_Edit";
import Icon from "../../../components/Icon/icon";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import { Skeleton } from "antd";
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
        <h1 className="text-3xl normal-case font-semibold mb-5">Account Details</h1>
        {
          isLoading ? <Skeleton /> : error ? "Error" : user ?
            (
              <>
                <div className="bg-white border p-3 rounded-lg">
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
                </div> </>
            ) : "error"
        }

        {displayText && <Account_Edit />}
      </div>
    </div>
  );
};

export default Account;

