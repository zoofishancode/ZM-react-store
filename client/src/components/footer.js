import React from "react";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { zmFooter } from "../assets";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-10 px-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        {/* LogoIcon Start here */}
        <div className="flex flex-col gap-7">
          <img className="w-32" src={zmFooter} alt="logoLoght" />
          <p className="text-white text-sm tracking-wide">
            © Copyright 2023 - Z&M
          </p>
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        {/* LogoIcon End here */}
        {/* LocateUs Start here */}
        <div>
          <h2 className="text-2x1 font-semibold text-white mb-4">Locate Us</h2>
          <div className="tedxt-base flex flex-col gap-2">
            <p>Z&M Office, Mumbai</p>
            <p>Mobile: 80103 00642</p>
            <p>Phone: 023 4404 1763</p>
            <p>E-mail: z&m@gmail.com</p>
          </div>
        </div>
        {/* LocateUs End here */}
        {/* Profile Start here */}
        <div>
          <h2 className="text-2x1 font-semibold text-white mb-4">Profile</h2>

          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>{" "}
              Account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>{" "}
              Checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>{" "}
              Order treacking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>{" "}
              Help & Support
            </p>
          </div>
        </div>
        {/* Profile End here */}
        {/* Subscribe Start here */}
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            placeholder="e-mail"
            type="text"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
        {/* Subscribe End here */}
      </div>
    </div>
  );
};

export default Footer;
