import { useState } from "react";
import { NavLink } from "react-router-dom";
import RiCloseLine from 'react-icons/ri'
import { logo } from "../assets";
import { links } from "../assets/constants";

const NavLink = ({handleClick}) => (
  <div>
    {links?.map((item) => {
      <NavLink key={item.name}
        to={item.to}
        className='flex flex-wrap justify-start items-center my-8 font-medium text-sm text-gray-400 hover:text-cyan-400'
      onClick={()=> handleClick && handleClick() }>

      </NavLink>
    })}
  </div>
)

const Sidebar = () => {
  <div>

  </div>
}

export default Sidebar;
