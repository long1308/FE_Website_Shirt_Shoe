import React from 'react'
import { Input  } from 'antd'
const ColorEdit = () => {
  return (
    <div className='m-10 text-center'>
    <span className="text-2xl mt-[-10px] font-bold">Edit Color</span>
  <div className=" gap-6">
    <div> 
      <p className="mt-5 ">NAME</p>
      <Input size="large" placeholder="Name"  className="mt-2 mb-5 w-96"/>
    </div>

  </div>
    <button  className=" border rounded p-2 bg-red-500 hover:bg-red-700 font-bold py-2 px-4 text-white mt-5 ">EDIT</button>
  </div>
  )
}

export default ColorEdit