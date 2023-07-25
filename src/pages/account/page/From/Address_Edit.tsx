
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const Addresses_Edit = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  const handleCancel = () => {
    window.location.reload(); 
  };

  return (
    <div className="border mt-6 p-3 rounded-lg">
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-xl font-medium mb-3">Edit address</h3>
      <div className="flex flex-col md:flex-row mb-6">
        <div className="w-full md:w-2/4 md:mr-4">
          <label htmlFor="name">NAME:</label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="name"
            {...register("name", { required: "This field is required." })}
          />

          <div className="">
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
        </div>
        <div className="w-full md:w-2/4">
          <label htmlFor="phone">PHONE:</label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="phone"
            {...register("phone", { required: "This field is required." })}
          />

          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-6">
        <div className="w-full md:w-2/4 md:mr-4">
          <label htmlFor="province">PROVINCE/CITY:</label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="cityLeeched"
            {...register("cityLeeched", {
              required: "This field is required.",
            })}
          />

          {errors.cityLeeched && (
            <p className="text-red-500">{errors.cityLeeched.message}</p>
          )}
        </div>
        <div className="w-full md:w-2/4">
          <label htmlFor="district">DISTRICT/TOWN:</label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="districtLeech"
            {...register("districtLeech", {
              required: "This field is required.",
            })}
          />
          {errors.districtLeech && (
            <p className="text-red-500">{errors.districtLeech.message}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/4 md:mr-4">
          <label htmlFor="subDistrict">SUB-DISTRICT/VILLAGE:</label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="communeAddress"
            {...register("communeAddress", {
              required: "This field is required.",
            })}
          />

          {errors.communeAddress && (
            <p className="text-red-500">{errors.communeAddress.message}</p>
          )}
        </div>
        <div className="w-full md:w-2/4">
          <label htmlFor="apartment">APARTMENT/ALLEY/LANE:</label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="apartmentNumber"
            {...register("apartmentNumber", {
              required: "This field is required.",
            })}
          />

          {errors.apartmentNumber && (
            <p className="text-red-500">{errors.apartmentNumber.message}</p>
          )}
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button
          type="button"
          onClick={handleCancel}
          className="btn js-prd-addtocart text-white bg-[#17c6aa] hover:bg-[#1b1a1a] rounded-md font-medium px-8 py-2 mr-5"
        >
          CANCEL
        </button>
        <button
          type="submit"
          className="btn js-prd-addtocart text-white bg-[#17c6aa] hover:bg-[#1b1a1a] rounded-md font-medium px-8 py-2"
        >
          ADD
        </button>
      </div>
    </form>
  </div>
  );
};

export default Addresses_Edit;

