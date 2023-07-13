import React from 'react'

type Props = object

const SigninAdmin = (props: Props) => {
    return (
        <div className="font-mono bg-gray-400 h-screen">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div
                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                            style={{ backgroundImage: "url('https://source.unsplash.com/K4mSJ7kc0As/600x800')", }}
                        ></div>
                        <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">Welcome Back Admin!</h3>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="text"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="******************"
                                    />
                                    <p className="text-xs italic text-red-500">Please choose a password.</p>
                                </div>
                                <div className="mb-4">
                                    <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                                    <label className="text-sm" htmlFor="checkbox_id">
                                        Remember Me
                                    </label>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Sign In
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SigninAdmin