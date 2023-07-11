import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListMenuAccount = () => {
  const [activeLink, setActiveLink] = useState("/account");
  const handleClick = (link: any) => {
    setActiveLink(link);
  };

  return (
    <div className="flex px-20">
      <div className="w-2/12 mr-7">
        <nav className="border">
          <ul>
            <Link to="/account">
              <li
                className={`p-4 border-b ${activeLink === "/account" ? "active" : ""}`}
                onClick={() => handleClick("/account")}
              >
                Account Details
              </li>
            </Link>
            <Link to="address">
              <li
                className={`p-4 border-b ${activeLink === "/address" ? "active" : ""}`}
                onClick={() => handleClick("/address")}
              >
                My Addresses
              </li>
            </Link>
            <Link to="wishlist">
              <li
                className={`p-4 border-b ${activeLink === "/wishlist" ? "active" : ""}`}
                onClick={() => handleClick("/wishlist")}
              >
                My Wishlist
              </li>
            </Link>
            <Link to="history">
              <li
                className={`p-4 border-b ${activeLink === "/history" ? "active" : ""}`}
                onClick={() => handleClick("/history")}
              >
                My Order History
              </li>
            </Link>
            <Link to="My Reviews" onClick={(event) => event.preventDefault()}>
              <li className="p-4 border-b opacity-50">My Reviews</li>
            </Link>
            <Link to="My Saved Tags" onClick={(event) => event.preventDefault()}>
              <li className="p-4 border-b opacity-50">My Saved Tags</li>
            </Link>
            <Link to="Compare Products" onClick={(event) => event.preventDefault()}>
              <li className="p-4 border-b opacity-50">Compare Products</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="w-10/12">
        <Outlet />
      </div>
    </div>
  );
};

export default ListMenuAccount;
