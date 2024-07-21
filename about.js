import React from "react";
import Image from "../../assets/4.jpg";

const AboutUs = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row w-full h-screen bg-green-800">

      <div className="w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center ">
       
        
          <img
            src={Image}
            alt="About Us"
            className="w-full h-auto object-cover rounded-tr-full rounded-bl-ful"
          />
        </div>
  


      <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex items-center justify-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-800 mb-4">
            Explore Cube Home Builders 
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
           
At Cube Builders, we pride ourselves on our commitment to excellence and customer satisfaction. With over a decade of experience in the construction industry, we have established ourselves as leaders in delivering high-quality, innovative, and sustainable building solutions. Our team of skilled professionals is dedicated to ensuring that each project is completed on time, within budget, and to the highest standards.

            <br/>
            <br/>
            Our journey began with a simple yet profound mission: to revolutionize the construction industry by integrating cutting-edge technology with unparalleled craftsmanship. Over the years, we have successfully completed a diverse portfolio of projects, ranging from residential homes to large commercial developments. Each project we undertake is a testament to our unwavering dedication to quality, safety, and client satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
































