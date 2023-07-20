import { Pagination } from "antd";
import React from "react";
import { Delete, Search, UpDow } from "../../../components/Icon/iconProject";

const Customers = () => {
  return (
    <div className="md:w-full">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold">USER</h1>
        <div className="flex text-center bg-gray-100 p-4 space-x-4 rounded-lg">
        <Search></Search>
          <input
            className="bg-gray-100 outline-none"
            type="text"
            placeholder=" keyword..."
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 w-max mt-3">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
              <div className="inline-flex">
             <UpDow></UpDow>
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Address
              <div className="inline-flex">
              <UpDow></UpDow>
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Role
              <div className="inline-flex">
              <UpDow></UpDow>
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
              <div className="inline-flex">
              <UpDow></UpDow>
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://i.pravatar.cc/150?img=1"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    Jane Cooper
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">Hà Nội</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              User
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              jane.cooper@example.com
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
              <div className="flex text-lg">
  
                <span className="cursor-pointer p-2 hover:text-red-500">
                <Delete></Delete>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://i.pravatar.cc/150?img=1"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    Jane Cooper
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">Hà Nội</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              User
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              jane.cooper@example.com
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
              <div className="flex text-lg">
               
                <span className="cursor-pointer p-2 hover:text-red-500">
                <Delete></Delete>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://i.pravatar.cc/150?img=1"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    Jane Cooper
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">Hà Nội</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              User
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              jane.cooper@example.com
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
              <div className="flex text-lg">
                
                <span className="cursor-pointer p-2 hover:text-red-500">
                <Delete></Delete>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://i.pravatar.cc/150?img=1"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    Jane Cooper
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">Hà Nội</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              User
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              jane.cooper@example.com
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
              <div className="flex text-lg">
               
                <span className="cursor-pointer p-2 hover:text-red-500">
                <Delete></Delete>
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://i.pravatar.cc/150?img=1"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    Jane Cooper
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">Hà Nội</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              User
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              jane.cooper@example.com
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
              <div className="flex text-lg">
               
                <span className="cursor-pointer p-2 hover:text-red-500">
                <Delete></Delete>
                </span>
              </div>
            </td>
          </tr>
          
        </tbody>
        </table>
      </div>
      <div className="flex justify-center">
              <Pagination defaultCurrent={1} total={100} />

      </div>
    </div>
  );
};

export default Customers;
