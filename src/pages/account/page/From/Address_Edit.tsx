import { Input } from 'antd'
import React from 'react'

const Addresses_Edit = () => {
  return (
    <div className="border mt-6 p-3 rounded-lg">
      <form action="">
        <h3 className="text-xl font-medium mb-3">Edit Address</h3>
        <div className="flex mb-6">
          <div className="w-2/4 mr-4">
            <label htmlFor="">NAME:</label>
            <Input size="large" placeholder="Name" />
          </div>
          <div className="w-2/4">
            <label htmlFor="">PHONE:</label>
            <Input size="large" placeholder="Phone" />
          </div>
        </div>
        <div className="flex mb-6">
          <div className="w-2/4 mr-4">
            {/* thành phố, tỉnh */}
            <label htmlFor="">PROVINCE/CITY</label>
            <Input size="large" placeholder="Province/City" />
          </div>
          <div className="w-2/4">
            {/* huyện */}
            <label htmlFor="">DISTRICT/TOWN:</label>
            <Input size="large" placeholder="Town/District" />
          </div>
        </div>
        <div className="flex">
          <div className="w-2/4 mr-4">
            {/* phường, xã */}
            <label htmlFor="">SUB-DISTRICT/VILLAGE</label>
            <Input size="large" placeholder="Sub-district/Village" />
          </div>
          <div className="w-2/4">
            {/* số nhà-ngách-ngõ */}
            <label htmlFor="">APARTMENT/ALLEY/LANE:</label>
            <Input size="large" placeholder="Apartment/Alley/Lane" />
          </div>
        </div>
        <button className="btn js-prd-addtocart text-white bg-[#17c6aa] hover:bg-[#1b1a1a] rounded-md font-medium px-8 py-2 mt-5 mr-5">
          CANCEL
        </button>
        <button className="btn js-prd-addtocart text-white bg-[#17c6aa] hover:bg-[#1b1a1a] rounded-md font-medium px-8 py-2 mt-5 ">
          UPDATE
        </button>
      </form>
    </div>
  )
}

export default Addresses_Edit