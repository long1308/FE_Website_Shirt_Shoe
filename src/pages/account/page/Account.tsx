import React, { useState, useEffect } from "react";
import ListGroup from "../ListGroup";

const Account = () => {
  const [displayText, setDisplayText] = useState(false);

  const handleClick = () => {
    setDisplayText(!displayText);
  };

  return (
    <div className="flex ">
      <div className="w-full md:w-1/4 md:mr-6 mb-4 md:mb-0">
        <header>
          <ListGroup />
        </header>
      </div>

      <div className="w-full md:w-3/4">
        <h1 className="text-3xl normal-case font-bold">Account Details</h1>
        <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              User
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Details and information about the user.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Name
                </dt>
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
        {displayText &&   <section >
                <div className=" px-4 py-16 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <h1 className="text-xl normal-case font-bold my-5 text-blue-500">From Edit</h1>
                      <form action="" className="space-y-4">
                        <div>
                          
                          <label className="sr-only" htmlFor="name">
                            Name
                          </label>
                          <input
                            className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                            placeholder="Name"
                            type="text"
                            id="name"
                          />
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <label className="sr-only" htmlFor="email">
                              Email
                            </label>
                            <input
                              className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                              placeholder="Email address"
                              type="email"
                              id="email"
                            />
                          </div>

                          <div>
                            <label className="sr-only" htmlFor="phone">
                              Phone
                            </label>
                            <input
                              className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                              placeholder="Phone Number"
                              type="tel"
                              id="phone"
                            />
                          </div>
                        </div>

                  

                     

                        <div className="mt-4">
                          <button
                            type="submit"
                            className="inline-block w-full rounded-lg bg-blue-400 px-5 py-3 font-medium text-white sm:w-auto"
                          >
                            Edit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>}
      </div>
    </div>
  );
};

export default Account;
