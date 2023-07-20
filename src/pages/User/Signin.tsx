import React from 'react'
import { Link } from 'react-router-dom'
import { signin } from '../../interface/user/signin';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
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