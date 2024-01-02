import { useState } from "react";
import { NavLink } from "react-router-dom";
import RiCloseLine from 'react-icons/ri'
import { logo } from "../assets";
import { links } from "../assets/constants";

const NavLinks = ({handleClick}) => (
  <div className="mt-10">
    {links?.map((item) => {
      <NavLink key={item.name}
        to={item.to}
        className='flex flex-wrap justify-start items-center my-8 font-medium text-sm text-gray-400 hover:text-cyan-400'
        onClick={() => handleClick && handleClick()}>
        <item.icon className="w-6 h-6 mr-2"/>
        {item.name}
      </NavLink>
    })}
  </div>
)

const Sidebar = () => {
  <div>

  </div>
}

export default Sidebar;
