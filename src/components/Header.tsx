import React from 'react';
import { ShoppingCart, Search, Menu, X, ShoppingBag } from 'lucide-react';
import AuthButtons from './auth/AuthButtons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">ShopTyle</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-900 hover:text-indigo-600">Home</a>
            <a href="/shop" className="text-gray-900 hover:text-indigo-600">Shop</a>
            <a href="/about" className="text-gray-900 hover:text-indigo-600">About</a>
            <a href="/contact" className="text-gray-900 hover:text-indigo-600">Contact</a>
          </nav>

          {/* Icons and Auth */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-indigo-600">
              <Search className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-indigo-600">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <AuthButtons />
            <button 
              className="md:hidden text-gray-600 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 text-gray-900 hover:text-indigo-600">Home</a>
            <a href="/shop" className="block px-3 py-2 text-gray-900 hover:text-indigo-600">Shop</a>
            <a href="/about" className="block px-3 py-2 text-gray-900 hover:text-indigo-600">About</a>
            <a href="/contact" className="block px-3 py-2 text-gray-900 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;