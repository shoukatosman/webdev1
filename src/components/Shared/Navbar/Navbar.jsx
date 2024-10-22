import React from "react";
import logo from '../../../assets/images/Logo.svg.png'

const Navbar = () => {
const menuItems = (
  <>
  <li><a>Home</a></li>
  <li><a>Shop</a></li>
  <li><a>Order Review</a></li>
  <li><a>Manage Inventory</a></li>
  </>
);
    return ( 
    
      <div className="navbar justify-between bg-[#1C2B35] h-20 px-36">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" text-white menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className="w-[140px] h-11" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">{menuItems} 
        </ul>
      </div>
    </div>
    );  
};

export default Navbar;

