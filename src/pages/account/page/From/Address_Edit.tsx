import { Input } from 'antd'
import React from 'react'

const Addresses_Edit = () => {
  return (
    <div className="border mt-6 p-3 rounded-lg">
      <form action="">
        <h3 className="text-xl font-medium mb-3">Edit Address</h3>
        <div className="flex flex-col md:flex-row mb-6">
          <div className="w-full md:w-2/4 md:mr-4">
            <label htmlFor="">NAME:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="Name..."></input>
          </div>
          <div className="w-full md:w-2/4">
            <label htmlFor="">PHONE:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="Phone..."></input>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-6">
          <div className="w-full md:w-2/4 md:mr-4">
            {/* thành phố, tỉnh */}
            <label htmlFor="">PROVINCE/CITY</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="Province/City..."></input>
          </div>
          <div className="w-full md:w-2/4">
            {/* huyện */}
            <label htmlFor="">DISTRICT/TOWN:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="Town/District..."></input>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/4 md:mr-4">
            {/* phường, xã */}
            <label htmlFor="">SUB-DISTRICT/VILLAGE</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="Sub-district/Village..."></input>
          </div>
          <div className="w-full md:w-2/4">
            {/* số nhà-ngách-ngõ */}
            <label htmlFor="">APARTMENT/ALLEY/LANE:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="Apartment/Alley/Lane..."></input>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <button className="btn js-prd-addtocart text-white bg-[#17c6aa] hover:bg-[#1b1a1a] rounded-md font-medium px-8 py-2 mr-5">
            CANCEL
          </button>
          <button className="btn js-prd-addtocart text-white bg-[#17c6aa] hover:bg-[#1b1a1a] rounded-md font-medium px-8 py-2">
            UPDATE
          </button>
        </div>
      </form>
    </div>
  )
}

export default Addresses_Edit;
