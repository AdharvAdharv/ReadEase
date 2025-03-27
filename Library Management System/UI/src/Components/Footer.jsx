import React from 'react';
import WhatsappLogo from '../assets/images/WhatsApp logo.png'
import InstagramLogo from "../assets/images/instagram logo.png"
import Logo from '../assets/images/Logo1.webp'

const Footer = () => {
  return (
    <div>
         <footer className="w-full bg-red-900 text-white py-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Left Section: Logo & Name */}
        <div className="flex items-center space-x-3">
          <img className="w-10 h-10" src={Logo} alt="ReadEase Logo" />
          <span className="text-2xl font-bold">ReadEase</span>
        </div>

        {/* Center Section: Quick Links */}
        <div className="flex space-x-6 text-lg">
          <a href="HomePage.html" className="hover:underline">Home</a>
          <a href="Books.html" className="hover:underline">Books</a>
          <a href="Cart.html" className="hover:underline">Cart</a>
          <a href="Login.html" className="hover:underline">Login</a>
        </div>

        {/* Right Section: Social Media */}
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook">
            <img className="w-6 h-6" src={InstagramLogo} alt="Instagram" />
          </a>
          <a href="#" aria-label="Twitter">
            <img className="w-6 h-6" src={WhatsappLogo} alt="Whatsapp" />
          </a>
         
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-4 text-sm">
        &copy; {new Date().getFullYear()} ReadEase. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer