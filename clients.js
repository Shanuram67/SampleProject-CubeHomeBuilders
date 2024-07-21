import React from "react";
import Client1 from "../../assets/client1.png";
import Client4 from "../../assets/client4.png";
import Client5 from "../../assets/client5.avif";

const OurClients = () => {
  return (
    <div id="client" className="w-full min-h-screen p-2 flex items-center bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Team</h2>
          <p className="text-lg text-gray-700 mb-8">
            See what our team have to say about us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         
        <div className="justify-center">
        <img
          className="w-24 h-24 object-cover rounded-full"
          src={Client1}
          alt="Client 1"
        />
        <div className="z-10 bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-4">
          "Cube Builders exceeded our expectations in every way. Their attention to detail and commitment to quality made our office construction project a complete success. We highly recommend them for any commercial construction needs."
          </p>
          <p className="text-gray-500">Leo Deo, CEO of Leo-Deo Innovations</p>
        </div>
      </div>
      <div className="justify-center">
      <img
        className="w-24 h-24 object-cover rounded-full"
        src={Client4}
        alt="Client 1"
      />
      <div className="z-10 bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-4">
        "The team at Cube Builders made our dream home a reality. Their expertise in residential construction is unmatched, and their dedication to customer satisfaction is evident in every step of the process."
        </p>
        <p className="text-gray-500">Leopoard Uncle , Home Owner and Seller</p>
      </div>
    </div>
    <div className="justify-center">
    <img
      className="w-24 h-24 object-cover rounded-full"
      src={Client5}
      alt="Client 1"
    />
    <div className="z-10 bg-white p-8 rounded-lg shadow-md">
      <p className="text-lg text-gray-700 mb-4">
      "Working with Cube Builders was a fantastic experience. Their innovative approach and exceptional project management skills ensured that our multi-unit residential development was completed on time and within budget. We look forward to partnering with them on future projects."
      </p>
      <p className="text-gray-500">Puma Master, Parter and Property seller</p>
    </div>
  </div>
  </div>
  </div>
</div>
  );
};

export default OurClients;
















