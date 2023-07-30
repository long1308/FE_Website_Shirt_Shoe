import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Address } from '../../../../interface/user/user';
import Message from '../../../../components/Action/Message/Message';
import { Modal } from 'antd';
import { updateAddress } from '../../../../store/actions/actionAddress';

const Addresses_Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userAddress = useSelector((state: RootState) => state.users);
  const [userData, setuserData] = useState<Address>({} as Address);
  const [modal2Open, setModal2Open] = useState(false);
  const { id } = useParams()
  const { user } = userAddress
  const address = (user.user.addressUser).filter((item: Address) => item._id === id)
  const { handleSubmit, register, formState: { errors } } = useForm<Address>({
    defaultValues: {
      name: address[0].name,
      phone: address[0].phone,
      cityLeeched: address[0].cityLeeched,
      districtLeech: address[0].districtLeech,
      communeAddress: address[0].communeAddress,
      apartmentNumber: address[0].apartmentNumber,
      detailAddress: address[0].detailAddress,
      customerId: address[0].customerId,
    }
  });


  const onSubmit = (data: Address) => {
    setuserData(data)
    setModal2Open(true);
  };
  const onSubmitModal = async () => {
    try {
      if (id) {
        await dispatch(updateAddress(userData, id) as never);
      }
      setModal2Open(false);
      navigate("/account/address")
      Message('success', 'Edit address information successfully');

    } catch (error) {
      Message('error', 'Address information correction failed');
    }

  }

  return (
    <div className="border-2 border-teal-500  mt-6 p-3 rounded-lg">

      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal
          title="Confirm your Address"
          centered
          open={modal2Open}
          onOk={onSubmitModal}
          onCancel={() => setModal2Open(false)}
          okButtonProps={{
            style: {
              backgroundColor: "#23c0a4",
            },

          }}
          cancelButtonProps={{
            style: {
              border: "1px solid #23c0a4",
              color: "#23c0a4",
            }
          }}

        >
          <div className="w-full">
            <span className="">Are you sure you want to change? <br />
            </span>
          </div>
        </Modal>
        <h3 className="text-xl font-medium mb-3">Edit address</h3>
        <div className="flex flex-col md:flex-row mb-6">
          <div className="w-full md:w-2/4 md:mr-4">
            <label htmlFor="name">NAME:</label>

            <input
              className="shadow appearance-none border border-teal-500 italic rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
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
              className="shadow appearance-none border border-teal-500 italic rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="phone"
              {...register("phone", {
                required: "This field is required.", pattern: {
                  value: /^\d+$/, // Sử dụng regex để kiểm tra xem giá trị nhập vào có phải là số hay không
                  message: "Please enter a valid phone number.",
                },
              })}
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
              className="shadow appearance-none border border-teal-500 italic rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border border-teal-500 italic rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border border-teal-500 italic rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border border-teal-500 italic rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
        <div className="w-full">
          <div className="w-full ">
            <label htmlFor="subDistrict">detailAddress:</label>
            <textarea className="shadow min-h-[100px] max-h-52 appearance-none border border-teal-500 italic rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

              placeholder="detailAddress"
              {...register("detailAddress", {
                required: "This field is required.",
              })} name="" id="" >

            </textarea>
            {errors.detailAddress && (
              <p className="text-red-500">{errors.detailAddress.message}</p>
            )}
          </div>

        </div>
        <div className="flex justify-end mt-5">
          <Link to={"/account/address"}>
            <button
              type="button"
              className="btn js-prd-addtocart text-white bg-[#17c6aa] hover:bg-[#1b1a1a] rounded-md font-medium px-8 py-2 mr-5"
            >
              CANCEL
            </button>
          </Link>
          <button
            type="submit"

            className="btn js-prd-addtocart text-white bg-[#17c6aa] hover:bg-[#1b1a1a] rounded-md font-medium px-8 py-2"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addresses_Edit;

