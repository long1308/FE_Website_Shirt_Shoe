import React from 'react'

const Addresses_Edit = () => {
  return (
    <section>
              <div className="mt-10">
        <div className="px-4 py-16 sm:px-6 border-3 rounded bg-gradient-to-r from-green-200 via-green-300 to-blue-500 mr-10 md:w-[62%] ">
          <div className="flex justify-center">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:p-12 w-full sm:w-auto">
              <h1 className="text-xl normal-case font-bold my-5 text-blue-500 justify-center flex">
                From Edit
              </h1>
              <form action="" className="space-y-4 w-full">
                    <div>
                      <label
                        className="sr-only"
                        htmlFor="City ​​Name
"
                      >
                        City ​​Name
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                        placeholder="City ​​Name
                            "
                        type="text"
                        id="City ​​Name
"
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="sr-only" htmlFor="Nation">
                          Nation
                        </label>
                        <select
                          id="countries"
                          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>Choose a country</option>
                          <option value="VN">Vietnamese</option>
                          <option value="US">America</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>
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
                    <div>
                      <label
                        className="sr-only"
                        htmlFor="Specific Address

"
                      >
                      Specific Address

                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                        placeholder="Specific Address

                            "
                        type="text"
                        id="Specific Address

"
                      />
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
  )
}

export default Addresses_Edit