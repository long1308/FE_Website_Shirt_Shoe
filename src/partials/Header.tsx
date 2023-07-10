import React from 'react'
import { BsFillBagCheckFill, BsHeart } from "react-icons/bs";
import { Link } from 'react-router-dom';
type Props = object
const Header = (props: Props) => {
    return (
        <header className="bg-white-50">
            <div className="mx-auto max-w-screen-xl px-2 py-8 sm:px-1 lg:px-8">
                <div className="flex items-center justify-between sm:justify-end gap-4">
                    <div className="flex items-center gap-4">
                        <div className="flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                            <div className=' '>
                                <img src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/logo.webp" alt="Logo" className=' lg:w-40 object-cover  md:w-60 w-20' />
                            </div>
                            <div className="hidden md:flex flex-1 items-center justify-end ">
                                <nav aria-label="Global">
                                    <ul className="flex items-center gap-4 text-sm">
                                        <Link to={"/"}>
                                            <li className="text-gray-500 transition hover:text-green-300 font-sans ... text-lg px-2">
                                                Home
                                            </li>
                                        </Link>
                                        <Link to={"/pages"}>
                                            <li className="text-gray-500 transition hover:text-green-300 font-sans ... text-lg px-2" >
                                                Pages
                                            </li>
                                        </Link>
                                        <Link to={'/categories'}>
                                            <li className="text-gray-500 transition hover:text-green-300 font-sans ... text-lg px-2">
                                                Categories
                                            </li>
                                        </Link>
                                        <Link to={'/men'}>
                                            <li className="text-gray-500 transition hover:text-green-300 font-sans ... text-lg px-2" >
                                                Men
                                            </li>
                                        </Link>
                                        <Link to={'/women'}>
                                            <li className="text-gray-500 transition hover:text-green-300 font-sans ... text-lg px-2" >
                                                Women
                                            </li>
                                        </Link>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="relative flex-shrink-0">
                            <label className="sr-only" htmlFor="search"> Search </label>
                            <input
                                className="h-10 w-20 rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm  md:w-20  lg:w-full"
                                id="search"
                                type="search"
                                placeholder="Search website..."
                            />
                            <button
                                type="button"
                                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Link to={''}>
                            <li
                                className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 text-xl sm:text-sm">
                                <BsHeart className="cart-icon" />
                            </li>
                        </Link>
                        <Link to={'/cart'}>
                            <li
                                className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 text-xl">
                                <BsFillBagCheckFill className="heart-icon" />
                            </li>
                        </Link>
                        <span
                            aria-hidden="true"
                            className="block h-6 w-px rounded-full bg-gray-200"
                        ></span>
                        <a href="#" className="block shrink-0 md:px-1">
                            <span className="sr-only flex">Profile</span>
                            <img
                                alt="Man"
                                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                className="h-6 w-6 lg:w-10 lg:h-10 md:w-8  md:h-8  rounded-full object-cover md:pr-1"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </header>

    )
}
export default Header
