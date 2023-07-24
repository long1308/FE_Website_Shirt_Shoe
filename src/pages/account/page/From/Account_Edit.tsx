
import { useForm, Controller } from "react-hook-form";
import { User } from "../../../../interface/user/user";

const Account_Edit = () => {

 
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm <User>();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const handleCancel = () => {
    window.location.reload(); 
  };
  return (
    <div className="border mt-6 p-3 rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-xl font-medium mb-3">Update Account Details</h3>
        <div className="flex flex-col md:flex-row mb-6">
          <div className="w-full md:w-2/4 md:mr-4">
            <label htmlFor="">NAME:</label>
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    type="text"
                    placeholder="Name..."
                  />
                  {errors.name && (
                    <p className="text-red-500 mt-1">{errors.name.message}</p>
                  )}
                </>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/4 md:mr-4">
            <label htmlFor="">E-MAIL:</label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    type="email"
                    placeholder="Email..."
                  />
                  {errors.email && (
                    <p className="text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:justify-end mt-5 gap-3">
          <button
            type="button"
            
            onClick={handleCancel}

            className="btn js-prd-autocrat text-white bg-[#17c6aa] hover:bg-[#1b1a1a] rounded-md font-medium px-8 py-2 md:mt-0 md:mr-5"
          >
            CANCEL
          </button>
          <button
            type="submit"
            className="btn js-prd-autocrat text-white bg-[#17c6aa] hover:bg-[#1b1a1a] rounded-md font-medium px-8 py-2"
          >
            UPDATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Account_Edit;
