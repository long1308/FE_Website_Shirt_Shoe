import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../interface/user/signup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Email, Google, Password, Phone, User } from "../../components/Icon/iconProject";
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
            <User></User>
            <input
              className="pl-2 outline-none border-none w-80"
              type="text"
              placeholder="name"
              {...register("name", { required: "This field is required." })}
            />
          </div>
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-8">
           <Email></Email>
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
           <Phone></Phone>
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
            <Password></Password>
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
          <Password></Password>
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
           <Google></Google>
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