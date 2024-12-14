import React from 'react';

interface CollectionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  itemCount: number;
}

const CollectionCard = ({ title, description, imageUrl, itemCount }: CollectionCardProps) => {
  return (
    <div className="group relative">
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="mt-6 text-sm text-gray-500">{`${itemCount} Items`}</h3>
      <p className="text-base font-semibold text-gray-900">{title}</p>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default CollectionCard;