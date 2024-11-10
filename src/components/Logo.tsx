import React from 'react';
import { Building2 } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="relative">
        <Building2 className="h-8 w-8 text-blue-500" />
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 blur opacity-30 group-hover:opacity-40"></div>
      </div>
      <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
        AssetSquare
      </span>
    </div>
  );
}