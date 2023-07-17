import { CaretDownOutlined, CaretUpOutlined, EditOutlined } from "@ant-design/icons"
import { Pagination } from "antd"
import { BsFillTrash3Fill } from "react-icons/bs"
import { Link } from "react-router-dom"

const ColorList = () => {
  return <>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2">
      <h2 className="font-bold text-xl mt-5">Colors</h2>
      <div className="ml-auto mb-5 mt-5">
        <Link to={'/admin/products/colors/add'} className="my-2 border rounded p-2 bg-blue-500 hover:bg-red-700 font-bold py-2 px-4 text-white w-full lg:w-40 ">Add Color</Link>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 bg-white text-sm w-max ">
        <thead className="ltr:text-left rtl:text-right">
          <tr className="bg-gray-50">
            <th className="whitespace-nowrap py-4 font-medium text-gray-900 text-left px-5">
              <div className="flex items-center">
                <div className="mr-2">NAME</div>
                <div className="inline-flex">
              </div>
              </div>
            </th>
            <th className="whitespace-nowrap py-4 px-2 font-medium text-gray-900 text-left">ACTION </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 ">
          <tr className="">
            <td className="whitespace-nowrap font-medium text-gray-900 flex text-left my-5 mx-2 ">
              <div className="flex items-center">
                <p className="text-xs lg:text-base md:text-xl mx-4">RED</p>
             </div>
            </td>          
            <td className="whitespace-nowrap ">
            <div className="flex ">
                  <Link to={`/admin/products/colors/1`} className="px-2 py-2 text-xl"> <EditOutlined /></Link>
                  <p className="px-2 py-4 text-xl"><BsFillTrash3Fill/></p>
                </div>        
            </td>
          </tr>  
        </tbody>
      </table>
    </div>
  </>
}

export default ColorList