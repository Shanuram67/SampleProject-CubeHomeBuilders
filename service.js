import React from 'react';

import Imagee from "../../assets/service1.png";
import Imageee from "../../assets/service2.png";
import Imageeee from "../../assets/service3.png";
const OurServices = () => {
  return (
    <div id="service" className="w-full min-h-screen p-2 flex items-center bg-gradient-to-b from-white to-gray-400">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center">
    <h2 className="text-4xl font-bold text-blue-800 mb-6">Our  <span className="text-green-800">Solutions</span></h2>
    


        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
          
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-48 object-cover object-center" src={Imagee} alt="Service 1" />
                <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2">Residential Construction</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">We specialize in creating beautiful, functional, and sustainable homes. Our residential projects range from single-family houses to multi-unit developments, all designed to meet the unique needs and lifestyles of our clients.
                  </p>
              
                </div>
              </div>
            </div>

          
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-48 object-cover object-center" src={Imageee} alt="Service 2" />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-2">Commercial Construction</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">From office buildings to retail spaces, Cube Home Builders offers comprehensive commercial construction services. We work closely with our clients to develop commercial spaces that are not only aesthetically pleasing but also highly functional and efficient.</p>
                
                </div>
              </div>
            </div>

           
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-48 object-cover object-center" src={Imageeee} alt="Service 3" />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-2">Renovation and Remodeling</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">"Working with Cube Home Builders was a fantastic experience. Their innovative approach and exceptional project management skills ensured that our multi-unit residential development was completed on time and within budget. We look forward to partnering with them on future projects."</p>
                 
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}

export default OurServices;





















