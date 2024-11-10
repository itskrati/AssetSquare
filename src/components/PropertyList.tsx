import React from 'react';
import { MapPin, BedDouble, Bath, Square } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Modern Apartment with Sea View',
    location: 'Bandra West, Mumbai',
    price: '₹1.5 Cr',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    beds: 3,
    baths: 2,
    area: '1,200 sq.ft',
    tag: 'Premium'
  },
  {
    id: 2,
    title: 'Luxury Villa with Garden',
    location: 'HSR Layout, Bangalore',
    price: '₹2.8 Cr',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    beds: 4,
    baths: 3,
    area: '2,500 sq.ft',
    tag: 'Exclusive'
  },
  {
    id: 3,
    title: 'Contemporary Office Space',
    location: 'Cyber City, Gurgaon',
    price: '₹95 Lac',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    beds: 2,
    baths: 2,
    area: '950 sq.ft',
    tag: 'New'
  },
  {
    id: 4,
    title: 'Penthouse with City Views',
    location: 'Koramangala, Bangalore',
    price: '₹3.2 Cr',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    beds: 4,
    baths: 4,
    area: '3,100 sq.ft',
    tag: 'Luxury'
  },
  {
    id: 5,
    title: 'Smart Home with Garden',
    location: 'Jubilee Hills, Hyderabad',
    price: '₹2.1 Cr',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    beds: 3,
    baths: 3,
    area: '2,200 sq.ft',
    tag: 'Smart Home'
  },
  {
    id: 6,
    title: 'Riverside Apartment',
    location: 'Boat Club Road, Pune',
    price: '₹1.8 Cr',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    beds: 3,
    baths: 2,
    area: '1,800 sq.ft',
    tag: 'River View'
  }
];

export default function PropertyList() {
  return (
    <div className="bg-[#1a1c2e] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text sm:text-4xl">
            Featured Properties
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Handpicked premium properties for you
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline">
                  <span className="bg-blue-900 text-blue-200 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">
                    {property.tag}
                  </span>
                  <div className="ml-2 text-gray-400 text-xs uppercase">
                    Verified
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-tight text-white group-hover:text-blue-400 transition-colors duration-300">
                  {property.title}
                </h3>
                <div className="mt-1 flex items-center text-gray-300">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.location}
                </div>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
                    {property.price}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <BedDouble className="h-4 w-4 mr-1" />
                    {property.beds} Beds
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    {property.baths} Baths
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    {property.area}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}