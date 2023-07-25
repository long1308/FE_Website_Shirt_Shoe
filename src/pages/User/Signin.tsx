import React from 'react'
import { Link } from 'react-router-dom'
import { signin } from '../../interface/user/signin';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { IconA, Password } from '../../components/Icon/iconProject';
import { useDispatch } from "react-redux";
import { signIn } from "../../store/actions/actionUser";
import Message from "../../components/Action/Message/Message";
import { useNavigate } from 'react-router-dom';
const Signin = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<signin>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<signin> = async (data: any) => {
    try {
      // Gọi hàm signUp và sử dụng await để đợi kết quả trả về
      await dispatch(signIn(data) as never);
      Message('success', 'Đăng nhập thành công !');
      navigate('/');
    } catch (error) {
      Message('error', 'Đăng nhập thất bại !');
    }

  }
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="hidden sm:flex w-1/2 ">
        <img
          src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="Logo"
          className="w-max  object-cover"
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
            <IconA></IconA>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: 'This field is required.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address.',
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  className="pl-2 outline-none border-none w-80"
                  type="text"
                  placeholder="Email Address"
                />
              )}
            />

          </div>
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <Password></Password>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: 'This field is required.',
              }}
              render={({ field }) => (
                <input
                  {...field}
                  className="pl-2 outline-none border-none"
                  type="password"
                  placeholder="Password"
                />
              )}
            />
          </div>
          <button className="block w-full bg-indigo-600 mt-8 py-2 rounded-xl text-white font-semibold mb-4 ">Signin</button>

          <span className="text-sm ml-20">Don't have an account ?</span>
          <Link to="/signup" className="text-sm ml-2 hover:text-blue-500 cursor-pointer font-bold">Signup</Link>
        </form>
      </div>
    </div>
  );
};


export default Signin