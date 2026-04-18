import React from 'react';
import ClientsSlider from './ClientsSlider';
import { clientsData } from './clientsData';

const ClientsSection = () => {
  return (
    <section className="relative bg-black pt-16 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/5 via-black to-black" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Our Clients
        </h2>
        <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Success stories from businesses we've helped grow
        </p>

        <div>
          <ClientsSlider clients={clientsData} />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;