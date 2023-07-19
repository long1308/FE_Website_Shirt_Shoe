import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../interface/user/signup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
type Props = object;

const Signup = (props: Props) => {
 // Biến state hook để quản lý trường mật khẩu
const [password, setPassword] = useState("");

// Biến state hook để quản lý trường xác nhận mật khẩu
const [confirmPassword, setConfirmPassword] = useState("");

// Biến state hook để theo dõi xem mật khẩu và xác nhận mật khẩu có khớp nhau không
const [isPasswordMatch, setIsPasswordMatch] = useState(true);

const {
  handleSubmit,
  register,
  formState: { errors },
} = useForm<signup>();

//  xử lý sự kiện để cập nhật trường mật khẩu
const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
  setPassword(e.target.value);
  setIsPasswordMatch(e.target.value === confirmPassword); // Kiểm tra xem mật khẩu có khớp không
};

// xử lý sự kiện để cập nhật trường xác nhận mật khẩu
const handleChangeConfirmPassword = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  setConfirmPassword(e.target.value);
  setIsPasswordMatch(e.target.value === password); // Kiểm tra xem mật khẩu có khớp không
};

//  xử lý khi form được gửi (submit)
const onSubmit: SubmitHandler<signup> = (data: any) => {
  // Kiểm tra xem mật khẩu có khớp không trước khi tiến hành xử lý
  if (password !== confirmPassword) {
    console.log("Mật khẩu không khớp.");
    return;
  }

  // Nếu mật khẩu khớp, tạo dữ liệu form để gửi đi
  const formData = {
    ...data,
    password: password,
    confirmPassword: confirmPassword,
  };

  // Ghi log dữ liệu form
  console.log(formData);
};

  return (
    <div className="h-screen flex">
      <div className="hidden sm:flex w-1/2 ">
        <img
          src="https://i.pinimg.com/564x/d1/7c/0f/d17c0f27cbaff1ab85b967b56eb55359.jpg"
          alt="Logo"
          className="w-max"
        />
      </div>
      <div className="flex w-full sm:w-1/2 justify-center items-center bg-white">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white">
          <img
            src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/logo.webp"
            alt="Logo"
            className="mb-7 ml-32"
          />
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <svg
                viewBox="0 -0.5 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5004 8C15.5004 9.65685 14.1572 11 12.5004 11C10.8435 11 9.50037 9.65685 9.50037 8C9.50037 6.34315 10.8435 5 12.5004 5C13.296 5 14.0591 5.31607 14.6217 5.87868C15.1843 6.44129 15.5004 7.20435 15.5004 8Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.0674 13H9.93336C9.61059 13.0004 9.29016 13.0548 8.98536 13.161C5.47535 14.372 8.81435 19 12.5004 19C16.1864 19 19.5254 14.372 16.0144 13.161C15.7099 13.0549 15.3898 13.0005 15.0674 13Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </svg>
            <input
              className="pl-2 outline-none border-none w-80"
              type="text"
              placeholder="name"
              {...register("name", { required: "This field is required." })}
            />
          </div>
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none w-80"
              type="text"
              placeholder="Email Address"
              {...register("email", {
                required: "This field is required.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address.",
                },
              })}
            />
          </div>
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.20711 14.7929C11.5251 17.111 13.6781 18.4033 15.2802 19.121C16.6787 19.7475 18.3296 19.2562 19.6167 17.9691L19.9114 17.6744L16.3752 15.4241C15.7026 16.4048 14.4319 16.979 13.1632 16.4434C12.2017 16.0376 10.9302 15.3445 9.7929 14.2071C8.65557 13.0698 7.96243 11.7983 7.55659 10.8369C7.02105 9.56817 7.59528 8.29741 8.57591 7.62479L6.32562 4.08863L6.0309 4.38335C4.74381 5.67044 4.25256 7.32131 4.87905 8.71986C5.59671 10.322 6.88908 12.4749 9.20711 14.7929ZM14.4626 20.9462C12.6479 20.1334 10.2905 18.7047 7.7929 16.2071C5.29532 13.7096 3.86668 11.3521 3.05381 9.53748C1.9781 7.13609 2.95955 4.62627 4.61669 2.96913L4.91141 2.67441C5.81615 1.76967 7.32602 1.93541 8.01294 3.01488L10.8437 7.46315C10.9957 7.70201 11.0393 7.99411 10.9637 8.26696C10.8881 8.53981 10.7005 8.76784 10.4472 8.89446L9.81354 9.2113C9.38171 9.42721 9.2931 9.80786 9.39916 10.0591C9.73804 10.8619 10.3046 11.8904 11.2071 12.7929C12.1097 13.6955 13.1381 14.262 13.9409 14.6009C14.1922 14.7069 14.5728 14.6183 14.7887 14.1865L15.1056 13.5528C15.2322 13.2996 15.4602 13.1119 15.7331 13.0363C16.0059 12.9607 16.298 13.0044 16.5369 13.1564L20.9852 15.9871C22.0646 16.674 22.2304 18.1839 21.3256 19.0886L21.0309 19.3833C19.3738 21.0405 16.8639 22.0219 14.4626 20.9462Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
            </svg>
            <input
              className="pl-2 outline-none border-none w-80"
              type="text"
              placeholder="PhoneNumber"
              {...register("phone", {
                required: "This field is required.",
                pattern: {
                  value: /^[0-9]{10}$/i,
                  message: "Invalid phone number.",
                },
              })}
            />
          </div>
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleChangePassword}
            />
          </div>
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleChangeConfirmPassword}
            />
          </div>
          {!isPasswordMatch && (
            <p className="text-red-500">Passwords do not match.</p>
          )}

          <button className="block w-full bg-indigo-600 mt-8 py-2 rounded-xl text-white font-semibold mb-4">
            Signup
          </button>
          <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-slate-100 hover:bg-slate-200 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 w-full mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-3 ml-28"
              viewBox="0 0 48 48"
            >
              <path
                fill="#fbc02d"
                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
              />
              <path
                fill="#e53935"
                d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
              />
              <path
                fill="#4caf50"
                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
              />
              <path
                fill="#1565c0"
                d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
              />
            </svg>
            Google
          </button>
          <span className="text-sm ml-20">Have an account ?</span>
          <Link
            to="/signin"
            className="text-sm ml-2 hover:text-blue-500 cursor-pointer font-bold"
          >
            Signin
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;