import React from 'react';
import { UserPlus, LogIn } from 'lucide-react';

const AuthButtons = () => {
  return (
    <div className="flex items-center space-x-4">
      <button className="flex items-center text-gray-600 hover:text-indigo-600">
        <LogIn className="h-5 w-5 mr-1" />
        <span className="hidden md:inline">Sign In</span>
      </button>
      <button className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
        <UserPlus className="h-5 w-5 mr-1" />
        <span className="hidden md:inline">Sign Up</span>
      </button>
    </div>
  );
};

export default AuthButtons;