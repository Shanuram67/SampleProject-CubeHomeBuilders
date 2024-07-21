import React from "react";
import PropertyImage1 from "../../assets/6.jpg";
import PropertyImage2 from "../../assets/7.jpg";
import PropertyImage3 from "../../assets/8.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SaleProperties = () => {
  const handleViewDetails = () => {
    toast.success("Details sent to our Agent ");
  };

  return (
    <div id="sale" className="w-full min-h-screen p-2 flex items-center bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-6">Latest <span className="text-blue-800">Sales & Offers</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="hover:shadow-md hover:shadow-[#040c16]">
            <div className="bg-white rounded-lg shadow-lg">
              <img src={PropertyImage1} alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">Brown Cube </h3>
                <p className="text-sm text-gray-500">3 bed | 2 bathroom | 1,750 sqft</p>
                <p className="text-lg font-bold text-gray-700 mt-4">Grant  50% Sale off </p>
                <button onClick={handleViewDetails} className="mt-6 px-4 py-2 bg-green-800 text-white rounded-md hover:bg-blue-700">
                  Refer Agent Now
                </button>
              </div>
            </div>
          </div>
          <div className="hover:shadow-md hover:shadow-[#040c16]">
            <div className="bg-white rounded-lg shadow-lg">
              <img src={PropertyImage2} alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">Miror Cube </h3>
                <p className="text-sm text-gray-500">4 bedroom | 3 bathroom | 2,120 sqft</p>
                <p className="text-lg font-bold text-gray-700 mt-4"> Best Place for Your Needs</p>
                <button onClick={handleViewDetails} className="mt-6 px-4 py-2 bg-green-800 text-white rounded-md hover:bg-blue-700">
                  Refer Agent Now
                </button>
              </div>
            </div>
          </div>
          <div className="hover:shadow-md hover:shadow-[#040c16]">
            <div className="bg-white rounded-lg shadow-lg">
              <img src={PropertyImage3} alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">Vision Cube </h3>
                <p className="text-sm text-gray-500">2 bedroom | 1 bathroom | 2,560 sqft</p>
                <p className="text-lg font-bold text-gray-700 mt-4"> Offer Closes Soon</p>
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

export default SaleProperties;
