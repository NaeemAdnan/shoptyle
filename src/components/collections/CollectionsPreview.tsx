import React from 'react';
import CollectionCard from './CollectionCard';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    title: "Summer Essentials",
    description: "Light and breezy pieces for the perfect summer look",
    imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    itemCount: 24
  },
  {
    title: "Autumn Collection",
    description: "Cozy and stylish pieces for the fall season",
    imageUrl: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    itemCount: 18
  },
  {
    title: "Minimalist Wardrobe",
    description: "Timeless pieces for a capsule wardrobe",
    imageUrl: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    itemCount: 15
  }
];

const CollectionsPreview = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Collections</h2>
          <a 
            href="/collections" 
            className="flex items-center text-indigo-600 hover:text-indigo-500"
          >
            View all collections
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {collections.map((collection, index) => (
            <CollectionCard key={index} {...collection} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionsPreview;