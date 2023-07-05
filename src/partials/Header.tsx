import React from 'react'
import { BsFillBagCheckFill, BsHeart } from "react-icons/bs";
type Props = object

const Header = (props: Props) => {
    return (
        <header aria-label="Page Header" className="bg-white-500">
            <div className="m-auto flex h-20 max-w-screen-xl items-center gap-6 px-20 sm:px-10 lg:px-10" >
                <a className="block text-teal-600 " href="/">
                    <img src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/logo.webp" alt="logo"></img>
                </a>
                <div className="flex flex-1 items-center justify-end md:justify-between ml-40 mt-5">
                    <nav aria-label="Global" className="hidden md:block ">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <a className="text-gray-500 transition hover:text-green-300 font-sans ... text-lg" href="/">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a className="text-gray-500 transition hover:text-green-300 font-sans ... text-lg" href="/">
                                    Pages
                                </a>
                            </li>

                            <li>
                                <a className="text-gray-500 transition hover:text-green-300 font-sans ... text-lg" href="/">
                                    Categoris
                                </a>
                            </li>

                            <li>
                                <a className="text-gray-500 transition hover:text-green-300 font-sans ... text-lg" href="/">
                                    Men
                                </a>
                            </li>

                            <li>
                                <a className="text-gray-500 transition hover:text-green-300 font-sans ... text-lg" href="/">
                                    Women
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="m-auto max-w-screen-xl mt-6">
                    <div className="flex items-center justify-end gap-8">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <label className="sr-only" htmlFor="search"> Search </label>
                                <input
                                    className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                                    id="search"
                                    type="search"
                                    placeholder="Search website..."
                                />

                                <button
                                    type="button"
                                    className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                                >
                                    <span className="sr-only">Search</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <a href="#"
                                className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 text-xl"
                            >
                                <BsHeart className="cart-icon" />
                            </a>
                            <a href="#"
                                className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 text-xl">
                                <BsFillBagCheckFill className="heart-icon " />

                            </a>
                        </div>
                        <span
                            aria-hidden="true"
                            className="block h-6 w-px rounded-full bg-gray-200"
                        ></span>
                        <a href="#" className="block shrink-0">
                            <span className="sr-only">Profile</span>
                            <img
                                alt="Man"
                                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                className="h-10 w-10 rounded-full object-cover"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header