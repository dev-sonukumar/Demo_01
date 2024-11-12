import { useState } from "react";
import {
  FaBars,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-[#FFE4C9] shadow-lg text-[#303841] ">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl   font-extrabold">
          Branding
        </Link>

        {/* Menu Items for Large Screens */}
        <ul className="hidden md:flex space-x-8  font-medium">
          <li className="flex items-center space-x-2 hover:text-gray-300">
            <FaHome />
            <Link to="/">Home</Link>
          </li>
          <li className="flex items-center space-x-2 hover:text-gray-300">
            <FaInfoCircle />
            <Link to="/about">About</Link>
          </li>
          <li className="flex items-center space-x-2 hover:text-gray-300">
            <FaServicestack />
            <Link to="/services">Services</Link>
          </li>
          <li className="flex items-center space-x-2 hover:text-gray-300">
            <FaEnvelope />
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Hamburger Menu Icon for Small Screens */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <ul className="flex flex-col items-center space-y-6 py-4 text-white font-medium">
            <li className="flex items-center space-x-2 hover:text-gray-300">
              <FaHome />
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-300">
              <FaInfoCircle />
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-300">
              <FaServicestack />
              <Link to="/services" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-300">
              <FaEnvelope />
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
