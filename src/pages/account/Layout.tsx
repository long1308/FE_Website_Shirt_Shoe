import React from 'react';
import Header from '../../partials/Header';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../partials/Footer';

const Layout = () => {
  return (
    <div>
      <header>
        <Header />
        <div className="breadcrumbs ">
          <ul className="flex items-center gap-2">
            <Link to={''}>
              <li className="underline underline-offset-4 hover:text-[#17c6aa] ml-44 ">
                Home
              </li>
            </Link>
            <li>/</li>
            <li>My account</li>
          </ul>
        </div>
      </header>
      <main >
        <Outlet />
      </main>
      <footer className='mt-4'>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
