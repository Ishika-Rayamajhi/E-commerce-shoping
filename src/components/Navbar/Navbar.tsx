import { FaPhoneAlt } from "react-icons/fa";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { Logo } from "../../image";
import ResponsiveMenu from "../ResponsiveMenu";
import Darkmode from "../Darkmode";
import { NavLink } from "../../constant/Navlink";
const Navbar = () => {
  const [showMenu, setMenu] = useState(false);
  const handelMenuToggle = ()=> setMenu(!showMenu);
  return (
    <div>
    <div className="bg-primary">
        <div className="hidden md:flex justify-between  items-center">
        <div className="flex items-center gap-3">
          <FaPhoneAlt />
          <span>+977-9852656</span>
        </div>
        <div>
          <p>Free Shipping on Orders Above Rs. 2000</p>
        </div>
        
      </div>
    </div>

      <div className="flex justify-between dark:bg-black dark:text-white ">
        <div>
          <img src={Logo} alt="logo" className="h-16 w-16" />
        </div>

        <div className="">
          <ul className="hidden md:flex items-center gap-3 font-semibold h-full">
            {NavLink.map((item) => (

              <li key={item.id}>
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
            <button className="primary-btn">Shop Now</button>
          <Darkmode/>
          </ul>
        </div>
<div className="flex md:hidden items-center gap-3 ">
  <Darkmode/>

  {showMenu ? (
    <IoMdClose onClick={handelMenuToggle} className="text-2xl"/>
  ): (
    <CiMenuBurger onClick={handelMenuToggle} className="text-2xl"/>
  )}
</div>

      </div>
      <ResponsiveMenu showMenu={showMenu}/>
    </div>
  );
};

export default Navbar;