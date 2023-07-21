import React from 'react'
import { Link } from 'react-router-dom'
import { signin } from '../../interface/user/signin';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { IconA, Password } from '../../components/Icon/iconProject';
type Props = object

const Signin = (props: Props) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<signin>();

  const onSubmit: SubmitHandler<signin> = (data) => {
    console.log(data);
  };
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="hidden sm:flex w-1/2 ">

        <img
          src="https://i.pinimg.com/564x/75/2a/8a/752a8a4e2702a55d979f1073d490023b.jpg"
          alt="Logo"
          className="w-max object-cover"
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