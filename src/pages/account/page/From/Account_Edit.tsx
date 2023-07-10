import React, { useState } from "react";

const Account_Edit = () => {
  return (
    <section>
      <div className="mt-10">
        <div className="px-4 py-16 sm:px-6 border-3 rounded bg-gradient-to-r from-green-200 via-green-300 to-blue-500 mr-10 md:w-[62%] ">
          <div className="flex justify-center">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:p-12 w-full sm:w-auto">
              <h1 className="text-xl normal-case font-bold my-5 text-blue-500 justify-center flex">
                From Edit
              </h1>
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
      </div>
    </section>
  );
};

export default Account_Edit;
