import { FaApple } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { BsBag } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap justify-center p-3 text-[12px] items-center apple bg-[#ffffff] font-['sfproreg']">
      <ul className="flex flex-wrap gap-8 items-center">
        <FaApple size={20} />
        <li>
          <NavLink to="/">Store</NavLink>
        </li>
        <li>
          <NavLink to="/">Mac</NavLink>
        </li>
        <li>
          <NavLink to="/">iPad</NavLink>
        </li>
        <li>
          <NavLink to="/">Watch</NavLink>
        </li>
        <li>
          <NavLink to="/">Vision</NavLink>
        </li>
        <li>
          <NavLink to="/">AirPods</NavLink>
        </li>
        <li>
          <NavLink to="/">TV & Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Entertainment</NavLink>
        </li>
        <li>
          <NavLink to="/">Accessories</NavLink>
        </li>
        <li>
          <NavLink to="/">Support</NavLink>
        </li>
        <li>
          <NavLink to="/"></NavLink>
        </li>
        <IoSearchSharp size={20} />
        <BsBag size={20} />
      </ul>
    </nav>
  );
}
