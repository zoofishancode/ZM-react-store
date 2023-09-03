import React from "react";
import { useSelector } from "react-redux";
import { logo, shoppingCart, user } from "../assets/index";
import { Link } from "react-router-dom";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);

  return (
    <div className="w-full h-20 bg-white border-b-[1.5px] border-b-blue-800 sticky top-0 z-50 px-4">
      <div className="max-w-screen-xl h-full mx-8 flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-28" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li className="text-base text-blue-800 font-bold cursor-pointer duration-300">
                Home
              </li>
            </Link>
            <Link>
              <li className="text-base text-blue-800 font-bold cursor-pointer duration-300">
                Shop
              </li>
            </Link>
            <Link>
              <li className="text-base text-blue-800 font-bold cursor-pointer duration-300">
                About
              </li>
            </Link>
          </ul>
          <Link to="/cart">
            <img className="w-8" src={shoppingCart} alt="shopping-cart" />
          </Link>
          <Link to="/login">
            <img
              className="w-9 rounded-full"
              src={userInfo ? userInfo.image : user}
              alt="userLogo"
            />
          </Link>
          {userInfo && (
            <p className="text-base font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
