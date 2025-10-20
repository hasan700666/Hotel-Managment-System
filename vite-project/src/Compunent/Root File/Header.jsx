import React from "react";
import logo from "../../../public/kureghar.png";
import { NavLink } from "react-router";

const Header = () => {
  const li = (
    <>
      <NavLink to="/">
        <li className="m-2 font-bold ">Home</li>
      </NavLink>
      <NavLink to="Rooms">
        <li className="m-2 font-bold ">Rooms</li>
      </NavLink>
      <NavLink to="Foods">
        <li className="m-2 font-bold ">Foods</li>
      </NavLink>
      <NavLink to="Gallery">
        <li className="m-2 font-bold ">Gallery</li>
      </NavLink>
      <NavLink to="Services">
        <li className="m-2 font-bold ">Services</li>
      </NavLink>
      <NavLink to="Review">
        <li className="m-2 font-bold ">Review</li>
      </NavLink>
      <NavLink to="About us">
        <li className="m-2 font-bold ">About us</li>
      </NavLink>
      <NavLink to="Find us">
        <li className="m-2 font-bold ">Find us</li>
      </NavLink>
      <NavLink to="Contact us">
        <li className="m-2 font-bold ">Contact us</li>
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow forCss"
            >
              {li}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl mx-2" id="font">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 forCss">{li}</ul>
        </div>
        <div className="navbar-end">
          <NavLink to="SingUp">
          <a className=" mx-2 btn bg-amber-400 text-white px-6 py-2 rounded-xl hover:bg-amber-500">Sing up</a>
          </NavLink>
          <NavLink to="SingIn">
          <a className=" mx-2 btn bg-amber-400 text-white px-6 py-2 rounded-xl hover:bg-amber-500">Sing in</a>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
