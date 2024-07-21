import React from "react";
import Image from "../../assets/main.png";

const HomePage = () => {
  return (
    <div id="home" className="w-full min-h-screen p-8 flex items-center bg-gradient-to-b from-white to-gray-400">
      <div className="max-w-7xl mx-auto md:flex md:flex-row-reverse md:items-center">
        <div className="md:w-1/2 md:pr-8 my-11">
        <img
        src={Image}
        alt="Home"
        className="w-full h-auto object-cover rounded-tr-full rounded-bl-full"
        />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-blue-800 mb-6">Cube Home Builders <span className="text-green-800">Constructing the Future, Today</span></h1>
            <p className="text-lg text-gray-700 mb-8">
            Welcome to Cube Home Builders, where innovation meets precision. We are dedicated to transforming architectural visions into reality with unparalleled craftsmanship and state-of-the-art construction techniques. Whether you're envisioning a modern skyscraper or a sustainable residential community, Cube Builders is your trusted partner in bringing your projects to life.
            </p>
           
          
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;























