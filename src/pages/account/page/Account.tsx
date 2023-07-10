import React, { useState, useEffect } from "react";
import ListGroup from "../ListGroup";
import Account_Edit from "./From/Account_Edit";

const Account = () => {
  const [displayText, setDisplayText] = useState(false);

  const handleClick = () => {
    setDisplayText(!displayText);
  };

  return (
    <div className="flex">
      <div className="w-full md:w-1/4 md:mr-6 mb-4 md:mb-0 ">
        <header>
          <ListGroup />
        </header>
      </div>

      <div className="w-full md:w-3/4">
        <h1 className="text-3xl normal-case font-semibold ">Account Details</h1>
        <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 mt-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900 ">
              User
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Details and information about the user.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Poulaz
                </dd>
              </div>

              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  m.poul@example.com
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  876-432-4323
                </dd>
              </div>
            </dl>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5 ml-5"
              onClick={handleClick}
            >
              Edit
            </button>
          </div>
          
        </div>

        {displayText && (
          <div className="mt-10">
            <Account_Edit/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
