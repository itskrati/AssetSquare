import React from 'react';
import { Menu, X, User } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="glass-effect fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Logo />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a className="text-blue-400 inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium">
                Buy
              </a>
              <a className="text-gray-300 hover:text-blue-400 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-blue-400 text-sm font-medium">
                Rent
              </a>
              <a className="text-gray-300 hover:text-blue-400 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-blue-400 text-sm font-medium">
                Commercial
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-200">
              Post Property
            </button>
            <div className="ml-3 relative">
              <div className="flex items-center">
                <button className="p-1 rounded-full text-gray-300 hover:text-blue-400">
                  <User className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-blue-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden glass-effect">
          <div className="pt-2 pb-3 space-y-1">
            <a className="bg-blue-900 bg-opacity-50 border-blue-500 text-blue-400 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Buy
            </a>
            <a className="border-transparent text-gray-300 hover:bg-blue-900 hover:bg-opacity-50 hover:border-blue-400 hover:text-blue-400 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Rent
            </a>
            <a className="border-transparent text-gray-300 hover:bg-blue-900 hover:bg-opacity-50 hover:border-blue-400 hover:text-blue-400 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Commercial
            </a>
            <a className="border-transparent text-gray-300 hover:bg-blue-900 hover:bg-opacity-50 hover:border-blue-400 hover:text-blue-400 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Post Property
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}