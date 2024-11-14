import React from "react";
import Img from "../../../assets/gpay-logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar w-full h-15 flex justify-between items-center px-4 py-3 bg-gray-800 text-black shadow">
      <img src={Img} alt="Logo" className="logo h-8" />
      <div className="flex space-x-6">
        <ul className="nav-links flex space-x-6 ">
          <li>
            <a
              href="#"
              className="hover:text-gray-300 transition duration-200  "
            >
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition duration-200">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition duration-200">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition duration-200">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex space-x-6">
          <button className="flex bg-transparent border border-black text-black  px-6 rounded-md hover:bg-black hover:text-white transition duration-200">
            <h1>Login</h1>
          </button>
          <button className="flex bg-transparent border border-black text-black  px-6 rounded-md hover:bg-black hover:text-white transition duration-200">
            <h1>SignUp</h1>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
