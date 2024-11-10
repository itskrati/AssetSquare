import React from 'react';
import { Search, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0 h-[500px]">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Modern building"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#1a1c2e]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center space-y-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Find Your Perfect Home
            <span className="block mt-2 text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
              With Expert Guidance
            </span>
          </h1>
          <p className="max-w-lg mx-auto text-xl text-gray-100">
            Search from 10,000+ verified properties across India
          </p>
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <div className="glass-effect rounded-lg">
            <div className="flex flex-col md:flex-row p-4 space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter city, locality or project"
                    className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-200"
                  />
                </div>
              </div>
              <div className="flex-1">
                <select className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-200">
                  <option>Buy</option>
                  <option>Rent</option>
                  <option>PG/Co-living</option>
                </select>
              </div>
              <button className="w-full md:w-auto px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-md hover:from-blue-700 hover:to-blue-600 transition-all duration-200 flex items-center justify-center">
                <Search className="h-5 w-5 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}