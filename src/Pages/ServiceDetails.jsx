import { Link, useParams } from "react-router";
import { Star, Download, Globe, MapPin, ChartColumnStacked, DollarSign  } from "lucide-react";
import useServices from "../Hooks/useServices";

const ServiceDetails = () => {
  const { id } = useParams();
  const { services, loading, error } = useServices();

  const service = services.find((s) => String(s._id) === id);

  if (loading) return <div>Details not found</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <title>Service Details</title>
      <div className="relative h-96 sm:h-[500px] lg:h-[600px] overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />

        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/60 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end">
              <div className="flex-1 space-y-4 lg:space-y-6">
                <div>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-2xl">
                    {service.name}
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mt-2 font-medium">
                    Listed by <span className="text-sky-400">{service.email}</span>
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-purple-600/80 backdrop-blur rounded-full text-sm font-semibold flex items-center gap-1">
                    <ChartColumnStacked className="w-4 h-4 fill-yellow-500 text-yellow-500"/>{service.category}
                  </span>
                  <span className="px-4 py-2 bg-yellow-500/20 backdrop-blur rounded-full text-sm font-semibold flex items-center ">
                     {service.price} <DollarSign className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                   
                  </span>
                  <span className="px-4 py-2 bg-yellow-500/20 backdrop-blur rounded-full text-sm font-semibold flex items-center gap-1">
                    <MapPin className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    {service.location} 
                  </span>
                </div>

                <a
                  href={service.location}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-linear-to-r from-sky-700 to-sky-400 hover:from-purple-500 hover:to-pink-500 rounded-xl font-bold text-lg shadow-xl transition-all transform hover:scale-105"
                >
                  <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="bg-gray-800/90  backdrop-blur-lg rounded-3xl shadow-2xl border  border-gray-700 p-8 sm:p-10 lg:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
            <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-purple-400" />
            About This Service
          </h2>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg whitespace-pre-line">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

