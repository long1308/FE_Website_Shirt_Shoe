import { Input } from "antd";
const Account_Edit = () => {
  return (
    <div className="border mt-6 p-3 rounded-lg">
    <form action="">
      <h3 className="text-xl font-medium mb-3">Update Account Details</h3>
      <div className="flex mb-6">
        <div className="w-2/4 mr-4">
          <label htmlFor="">FIRST NAME:</label>
          <Input size="large" placeholder="First name" />
        </div>
        <div className="w-2/4">
          <label htmlFor="">LAST NAME:</label>
          <Input size="large" placeholder="Last name" />
        </div>
      </div>
      <div className="flex">
        <div className="w-2/4 mr-4">
          <label htmlFor="">E-MAIL:</label>
          <Input size="large" placeholder="First name" />
        </div>
        <div className="w-2/4">
          <label htmlFor="">PHONE:</label>
          <Input size="large" placeholder="Last name" />
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
  );
};

export default Account_Edit;
