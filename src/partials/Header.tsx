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
                            <a href="/" className=''>
                                <img src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/logo.webp" alt="Logo" className=' lg:w-40 object-cover  md:w-60 w-20' />
                            </a>
                            <div className="md:hidden relative">
  <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-green-300 hover:border-green-300">
    <svg className="h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M0 3.75C0 3.33579 0.335786 3 0.75 3H19.25C19.6642 3 20 3.33579 20 3.75C20 4.16421 19.6642 4.5 19.25 4.5H0.75C0.335786 4.5 0 4.16421 0 3.75ZM0.75 8.25C0.335786 8.25 0 8.58579 0 9C0 9.41421 0.335786 9.75 0.75 9.75H19.25C19.6642 9.75 20 9.41421 20 9C20 8.58579 19.6642 8.25 19.25 8.25H0.75ZM0.75 14.25C0.335786 14.25 0 14.5858 0 15C0 15.4142 0.335786 15.75 0.75 15.75H19.25C19.6642 15.75 20 15.4142 20 15C20 14.5858 19.6642 14.25 19.25 14.25H0.75Z" />
    </svg>
  </button>
  <div className="hidden absolute top-0 right-0 mt-12 w-48 bg-white rounded shadow-lg">
    <ul className="py-2">
      <Link to={"/"}>
        <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          Home
        </li>
      </Link>
      <Link to={"/pages"}>
        <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          Pages
        </li>
      </Link>
      <Link to={"/categories"}>
        <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          Categories
        </li>
      </Link>
      <Link to={"/men"}>
        <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          Men
        </li>
      </Link>
      <Link to={"/women"}>
        <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          Women
        </li>
      </Link>
    </ul>
  </div>
</div>

                            <div className="hidden md:flex flex-1 items-center justify-end">
                                <nav aria-label="Global">
                                    <ul className="flex items-center gap-4 text-sm">
                                        <Link to={"/"}>
                                            <li className="text-gray-500 transition hover:text-green-300 font-sans ... text-lg px-2">
                                                Home
                                            </li>
                                        </Link>
                                        <Link to={"/pages"}>
                                            <li className="text-gray-500 transition hover:text-green-300 font-sans ... text-lg px-2">
                                                Pages
                                            </li>
                                        </Link>
                                        <Link to={'/categories'}>
                                            <li className="text-gray-500 transition hover:text-green-300 font-sans ... text-lg px-2">
                                                Categories
                                            </li>
                                        </Link>
                                        <Link to={'/men'}>
                                            <li className="text-gray-500 transition hover:text-green-300 font-sans ... text-lg px-2">
                                                Men
                                            </li>
                                        </Link>
                                        <Link to={'/women'}>
                                            <li className="text-gray-500 transition hover:text-green-300 font-sans ... text-lg px-2">
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
                        <Link to={'/account'}>
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
