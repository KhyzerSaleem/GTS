import React from 'react';

const PricingTable = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Pricing Table Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-green-500">Pricing</span>
          <span className="text-gray-800"> Table</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit 
          egestas. Nunc eget congue ante. Vivamus ut volutpat turpidunt eget et felisius.
        </p>
      </div>

      {/* Pricing Cards Container */}
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
        
        {/* Standard Plan Card */}
        <div className="relative flex-1 mt-6">
          {/* Package Label - positioned behind the card with 90% width */}
          <div className="absolute top-[-2%] left-0 right-0 -translate-y-1/2 flex justify-center">
            <div className="bg-green-500 text-white font-medium py-2 text-center w-4/5 mx-auto rounded-xl">
              Package 1
            </div>
          </div>
          
          {/* Card Content */}
          <div className="bg-gray-900 text-white rounded-lg pt-10 pb-6 px-6 h-full flex flex-col relative z-10">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Standard Plan</h3>
              <div className="text-4xl font-bold mb-1">$20.00</div>
              <div className="text-sm text-gray-400">/Per month</div>
            </div>
            
            <div className="flex-grow space-y-4 border-t border-gray-700 pt-6 mb-6">
              {[
                'Initial Consultation', 
                'Labor Costs', 
                'Materials and Plants', 
                'Equipment and Machinery'
              ].map((feature, index) => (
                <div key={index} className="flex items-center py-2 border-b border-gray-800">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-white text-gray-900 rounded-full py-3 font-medium hover:bg-gray-100 transition duration-300">
              Purchase
            </button>
          </div>
        </div>
        
        {/* Premium Plan Card */}
        <div className="relative flex-1 mt-6">
          {/* Package Label - positioned behind the card with 90% width */}
          <div className="absolute top-[-2%]  left-0 right-0 -translate-y-1/2 flex justify-center">
            <div className="bg-gray-900 text-white font-medium py-2 text-center w-4/5 mx-auto rounded-xl">
              Package 2
            </div>
          </div>
          
          {/* Card Content */}
          <div className="bg-green-500 text-white rounded-lg pt-10 pb-6 px-6 h-full flex flex-col relative z-10">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Premium Plan</h3>
              <div className="text-4xl font-bold mb-1">$90.00</div>
              <div className="text-sm text-green-100">/Per month</div>
            </div>
            
            <div className="flex-grow space-y-4 border-t border-green-400 pt-6 mb-6">
              {[
                'Initial Consultation', 
                'Labor Costs', 
                'Materials and Plants', 
                'Equipment and Machinery',
                'Permits and Inspection Fees'
              ].map((feature, index) => (
                <div key={index} className="flex items-center py-2 border-b border-green-400">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-white text-green-500 rounded-full py-3 font-medium hover:bg-gray-100 transition duration-300">
              Purchase
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PricingTable;