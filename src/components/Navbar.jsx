// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    // { name: "Contact", to: "/contact" },
    { name: "BookAppointment", to: "/BookAppointment" },
    // { name: "PrivacyPolicy", to: "/PrivacyPolicy" },
    // { name: "FAQ", to: "/FAQ" },
  ];

  return (
    <header className="w-full shadow-md">
      {/* Top Bar */}
      <div className="bg-[#1f3b57] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex flex-wrap gap-4 items-center text-xs sm:text-sm">
            <FaPhoneAlt /> <span>+1 (888) 655-3729</span>
            <FaEnvelope /> <span>info@askmedicalbilling.com</span>
          </div>

          {/* Social Icons Hidden on Small Screens */}
          <div className="hidden sm:flex gap-4 text-base">
            <FaFacebookF className="hover:text-[#e91e63] cursor-pointer" />
            <FaTwitter className="hover:text-[#e91e63] cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#e91e63] cursor-pointer" />
            <FaInstagram className="hover:text-[#e91e63] cursor-pointer" />
            <FaYoutube className="hover:text-[#e91e63] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white relative z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <h1 className="text-xl font-bold text-[#1f3b57] whitespace-nowrap">
              ASK MEDICAL BILLING
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-[#1f3b57] font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`hover:text-[#e91e63] transition-all relative pb-2 ${
                  location.pathname === link.to
                    ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#e91e63]"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Request Demo Button */}
          <div className="hidden md:block">
            <Link to="/BookAppointment">
              <button className="bg-[#e91e63] hover:bg-[#c2185b] text-white px-5 py-2 rounded-full font-semibold transition-all duration-300">
                Request Demo
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#1f3b57] text-2xl"
            >
              {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar Nav */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="px-6 py-4 flex justify-between items-center border-b">
            <h1 className="text-lg font-bold text-[#1f3b57]">
              ASK MEDICAL BILLING
            </h1>
            <HiX
              className="text-2xl text-[#1f3b57] cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>
          <nav className="flex flex-col gap-4 p-6 text-[#1f3b57] font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`hover:text-[#03a9f4] transition-all ${
                  location.pathname === link.to
                    ? "font-bold text-[#e91e63]"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/BookAppointment">
              <button className="bg-[#e91e63] hover:bg-[#c2185b] text-white px-5 py-2 rounded-full font-semibold transition-all duration-300">
                Request Demo
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

// import { Link } from "react-router-dom";
// // import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
//   FaYoutube
// } from "react-icons/fa";

// export default function Navbar() {
//   return (
//     <header className="w-full ">
//       {/* Top Bar */}
//       <div className="bg-sky-700 text-white px-4 py-2 flex justify-between items-center text-sm ">
//         <div className="flex gap-4 items-center">
//           <FaPhoneAlt /> <span>+1 (888) 655-3729</span>
//           <FaEnvelope className="ml-6" /> <span>info@medicalbilling.com</span>
//         </div>
//         <div className="flex gap-4">
//           <FaFacebookF />
//           <FaTwitter />
//           <FaLinkedinIn />
//           <FaInstagram />
//           <FaYoutube />
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div className="bg-white shadow-md py-3 px-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           {/* <img src="/logo.png" alt="Logo" className="h-10 w-auto" /> */}
//           <h1 className="text-xl font-bold text-gray-800">Medical Billing Co.</h1>
//         </div>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex gap-6 text-gray-800 font-medium">
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/services">Services</Link>
//           <Link to="/contact">Contact</Link>
//         </nav>

//         {/* Request Demo Button */}
//         <div className="hidden md:block">
//           <button className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-full font-semibold">
//             Request Demo
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }
