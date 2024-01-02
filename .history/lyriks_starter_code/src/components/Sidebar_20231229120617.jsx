import { useState } from "react";
import { NavLink } from "react-router-dom";
import {RiCloseLine} from 'react-icons/ri';
import { HiOutlineHome,HiOutlinePhotograph,HiOutlineUserGroup, HiOutlineHashtag} from 'react-icons/hi';
import { logo } from "../assets";


const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];

 const NavLinks = ({handleClick}) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
)

const Sidebar = () => {
  console.log(links)
  const [mobileMenuOpen, setMobileMenuOpen] = useState([false])
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#111]">
      <img src={logo} alt="logo" className="w-full h-14 object-contain" />
      <NavLinks/>
   </div>
    </>
 )
}

export default Sidebar;
