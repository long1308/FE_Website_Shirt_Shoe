import React from "react";
import ListGroup from "../ListGroup";

const History = () => {
  return (
    <div className="flex">
      <div className="w-full md:w-1/4 md:mr-6 mb-4 md:mb-0">
        <header>
          <ListGroup />
        </header>
      </div>
      <div>
        <div className="w-full md:w-3/4">
        <h1 className="text-3xl normal-case font-bold mt-5">History</h1>

          <table className="min-w-full max-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  #
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Order Number
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Date 
        </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Status
                </th> 
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Total Price	s
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  1
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  John Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  
                175525 <a href="" className="hover:underline text-blue-500">View Details</a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>

                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Shipped
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  $120,000
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    View
                  </a>
                </td>
              </tr>

              <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  2
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  John Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  
                175525 <a href="" className="hover:underline text-blue-500">View Details</a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>

                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Shipped
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  $120,000
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    View
                  </a>
                </td>
              </tr>

              <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  3
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  John Doe
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  
                175525 <a href="" className="hover:underline text-blue-500">View Details</a>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>

                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Shipped
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  $120,000
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;
