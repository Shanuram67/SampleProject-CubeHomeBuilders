import React from "react";
import { FaTimes } from 'react-icons/fa';

import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-800 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Site Name */}
        <div className="text-white font-bold text-sm">
          Cube Home Builders
        </div>
        
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaYoutube />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaInstagram />
          </a>
        </div>
      </div>
      
      {/* Copyright Notice */}
      <div className="mt-2 flex justify-center">
        <p className="text-base text-white">
          &copy; {new Date().getFullYear()} CubeHomeBuilders - Shanu All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;