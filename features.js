import React from "react";
import Imagee from "../../assets/1.jpg";
import Imageee from "../../assets/2.jpg";
import Imageeee from "../../assets/3.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Features = () => {
  const handleViewDetails = () => {
    toast.success("Details sent to our Agent");
  };

  return (
    <div id="feature" className="w-full min-h-screen p-2 flex flex-col items-center bg-gradient-to-b from-white to-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-6">Models <span className="text-blue-800"></span></h2>
        <p className="text-lg text-blue-700 mb-8">Here are some of our featured properties:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <div className="bg-white rounded-lg shadow-lg">
              <img src={Imagee} alt="Property" className="w-full max-h-80 object-cover rounded-t-lg" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">History Cube </h3>
                <p className="text-sm text-gray-500">4 bedroom | 2 bathroom | 2,570 sqft</p>
                <p className="text-lg font-bold text-gray-700 mt-4"></p>
                <button onClick={handleViewDetails} className="mt-6 px-4 py-2 bg-green-800 text-white rounded-md hover:bg-blue-700">
                 Refer Agent Now
                </button>
              </div>
            </div>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <div className="bg-white rounded-lg shadow-lg">
              <img src={Imageee} alt="Property" className="w-full max-h-80 object-cover rounded-t-lg" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">Rectangle Cube</h3>
                <p className="text-sm text-gray-500">5 bedroom | 6 bathroom | 3,102 sqft</p>
                <p className="text-lg font-bold text-gray-700 mt-4">$750,000</p>
                <button onClick={handleViewDetails} className="mt-6 px-4 py-2 bg-green-800 text-white rounded-md hover:bg-blue-700">
                  Refer Agent Now 
                </button>
              </div>
            </div>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <div className="bg-white rounded-lg shadow-lg">
              <img src={Imageeee} alt="Property" className="w-full max-h-80 object-cover rounded-t-lg" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">Apple Cube </h3>
                <p className="text-sm text-gray-500">5 bed | 4 bathroom | 4,010 sqft</p>
                <p className="text-lg font-bold text-gray-700 mt-4">$300,000</p>
                <button onClick={handleViewDetails} className="mt-6 px-4 py-2 bg-green-800 text-white rounded-md hover:bg-blue-700">
                  Refer Agent Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Features;
