import React from 'react';
import { MapPin, DollarSign, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router'; // Fixed: was 'react-router' → must be 'react-router-dom'

const ServiceCard = ({ service }) => {
  const isPet = service.category?.toLowerCase() === 'pets';
  const isFree = isPet || service.price == 0;

  return (
    <div className="group max-w-[500px] max-h-[370px] relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={service.image || '/fallback-image.jpg'}
          alt={service.name}
          className="w-full h-[200px] object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full uppercase tracking-wider">
            {service.category || 'Product'}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-3">
        <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
          {service.name || 'Unnamed Item'}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 text-sm text-gray-600 mt-2">
          <MapPin className="w-4 h-4" />
          <span>{service.location || 'Location not specified'}</span>
        </div>

        {/* Price */}
        <div className="">
          {isFree ? (
            <span className="text-xl font-bold text-green-600">Free</span>
          ) : (
            <div className="flex items-center">
              <DollarSign className="w-6 h-6 text-green-600" />
              <span className="text-xl font-bold text-gray-800">
                {Number(service.price).toFixed(2)}
              </span>
            </div>
          )}
        </div>

        {/* See Details Button */}
        <Link to={`/details/${service._id}`} className="block mt-2">
          <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-98 shadow-md">
            <Eye className="w-5 h-5" />
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;