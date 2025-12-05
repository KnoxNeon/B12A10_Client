import React from 'react'
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';
import { motion } from "motion/react"

const ServiceCard = ({service}) => {

    return (
        <motion.div initial={ { scale:0.5 } } animate={{scale: 1, transition: { duration: 1 }}} >
            <Link to={`/service/_id`} className="card image-full md:w-96 md:h-96 shadow-xl rounded-xl overflow-hidden group">
            <figure className="absolute inset-0">
                <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </figure>

            <div className="card-body relative p-0 justify-end">
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="relative z-10 p-6 space-y-3">
                    <h2 className="card-title md:text-2xl text-white drop-shadow-lg">{service.name}</h2>
                    <div className="flex justify-between items-center text-white">
                        <span className="px-2 md:px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">{service.category}</span>
                        <span className="flex items-center gap-2 text-lg font-semibold"><FaStar className="text-yellow-400 drop-shadow" /> {service.price} </span>
                    </div>
                </div>
            </div></Link>
</motion.div>
  )
}

export default ServiceCard

