import React from 'react';
import { Shield, Banknote, Clock, Users } from 'lucide-react';

const features = [
  {
    name: 'Expert Guidance',
    description: 'Get personalized advice from our real estate experts',
    icon: Banknote,
  },
  {
    name: 'Verified Listings',
    description: 'All properties are physically verified by our team',
    icon: Shield,
  },
  {
    name: 'Quick Response',
    description: 'Get instant responses from property owners',
    icon: Clock,
  },
  {
    name: 'Premium Service',
    description: 'End-to-end support for a seamless experience',
    icon: Users,
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent sm:text-4xl">
            Why Choose AssetSquare?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            The premium way to find your next home
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div 
                key={feature.name} 
                className="group relative"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.2}s both`
                }}
              >
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="p-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg shadow-lg group-hover:shadow-blue-500/25 transition-shadow duration-300">
                        <feature.icon className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.name}
                    </h3>
                    <p className="mt-4 text-base text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}