import { Input } from "antd";

const Account_Edit = () => {
  return (
    <div className="border mt-6 p-3 rounded-lg">
      <form action="">
        <h3 className="text-xl font-medium mb-3">Update Account Details</h3>
        <div className="flex flex-col md:flex-row mb-6">
          <div className="w-full md:w-2/4 md:mr-4">
            <label htmlFor="">NAME:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="Name..."></input>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/4 md:mr-4">
            <label htmlFor="">E-MAIL:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="email" placeholder="Email..."></input>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:justify-end mt-5 gap-3">
          <button className="btn js-prd-autocrat text-white bg-[#17c6aa] hover:bg-[#1b1a1a] rounded-md font-medium px-8 py-2 md:mt-0 md:mr-5">
            CANCEL
          </button>
          <button className="btn js-prd-autocrat text-white bg-[#17c6aa] hover:bg-[#1b1a1a] rounded-md font-medium px-8 py-2">
            UPDATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Account_Edit;
