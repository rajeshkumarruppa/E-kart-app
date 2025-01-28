import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 py-8 px-4 md:px-16 lg:px-24  text-white  ">
        <div className=" container mx-auto grid grid-cols-1 md:grid-cols-3  gap-8 ">
        <div>
          <h3 className="text-xl font-semibold ">e-Shop</h3>
          <p className="mt-4">
            Your one-stop shop forall your needs.shop with us and experience the
            best online shopping experience.
          </p>

        </div>
        <div className=" flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 mb-4 space-y-2">
            <li><Link to="./" className="hover:underline">Home</Link></li>
            <li><Link to='./shop'className="hover:underline">Shop</Link></li>
            <li><Link to='./aboutUs'className="hover:underline">About Us</Link> </li>
            <li><Link to='./contactUs'className="hover:underline">Contact Us</Link></li>
          </ul>     
           
        </div>
        <div>
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex mt-4 space-x-4">
           <a href="" className="hover:text-gray-400"> <FaFacebook/></a>
           <a href=""className="hover:text-gray-400"> <FaTwitter/></a>
           <a href=""className="hover:text-gray-400"> <FaInstagram/></a>
           <a href=""className="hover:text-gray-400"><FaLinkedin/></a>

          </div>
          <form className="flex items-center justify-center mt-8">
          <input type="email" placeholder="Your email" className="w-full p-2 rounded-l-lg bg-gray-800 border border-t-gray-600"/>
          <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg border border-gray-600">Subscribe</button>
          </form>
          
        </div>
        </div>
        <hr />
        <div className="container flex flex-col md:flex-row justify-between p-5 px-10  ">
          <a href=""> 
                     <h3>@2024 e-Shop.All rights reserved</h3>
          </a>
          <div className="flex space-x-4 md:mt-0">
            <a href=""className="hover:underline" >Privacy Policy </a>
            <a href=""className="hover:underline">Terms of Service</a>
          </div>
         
        </div>
      </footer>
    </div>
  );
};

export default Footer;
