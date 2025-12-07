import React from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';
import { motion } from "motion/react"

const Cards = () => {
  return (
    <div>
        <h1 className='mt-4 md:mt-8  lg:mt-20 mb-2 text-2xl md:text-4xl lg:text-5xl font-bold text-center text-sky-500'>Categories</h1>
    <div className='grid grid-cols-2 md:grid-cols-4 md:py-10 lg:gap-20 gap-4 lg:w-[1600px] mx-auto'>
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1, transition: { duration: 1 } }}
      >
        <Link to="/services?category=pets" className="card image-full lg:w-80 h-25 md:h-60 lg:h-90 shadow-xl rounded-xl overflow-hidden group">
          <figure className="absolute inset-0"><img src="https://i.pinimg.com/1200x/b9/df/14/b9df14f3b4741730bdfeb21b52f501b3.jpg"alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
          </figure>

          <div className="card-body relative p-0 justify-end">
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>
            <div className="relative z-10 p-6 space-y-3">
              <h2 className="card-title md:text-2xl text-white text-center drop-shadow-lg">🐶 Pets (Adoption)</h2>
            </div>
          </div>
        </Link>

      </motion.div>

      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1, transition: { duration: 1 } }}
      >
        <Link
          to={`/services?category=food`}
          className="card image-full lg:w-80 h-25 md:h-60 lg:h-90 shadow-xl rounded-xl overflow-hidden group"
        >
          <figure className="absolute inset-0">
            <img
              src="https://i.pinimg.com/1200x/af/c3/05/afc305a7420da38f3143e7ee856cf5ba.jpg"
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </figure>

          <div className="card-body relative p-0 justify-end">
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>
            <div className="relative z-10 p-6 space-y-3">
              <h2 className="card-title md:text-2xl text-white text-center drop-shadow-lg">
                🍖 Pet Food
              </h2>
            </div>
          </div>
        </Link>
      </motion.div>

      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1, transition: { duration: 1 } }}
      >
        <Link
          to={`/services?category=accessories`}
          className="card image-full lg:w-80 h-25 md:h-60 lg:h-90 shadow-xl rounded-xl overflow-hidden group"
        >
          <figure className="absolute inset-0">
            <img
              src="https://i.pinimg.com/1200x/8a/e0/80/8ae0806e75437bb281dd4a35b9188344.jpg"
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </figure>

          <div className="card-body relative p-0 justify-end">
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>
            <div className="relative z-10 p-6 space-y-3">
              <h2 className="card-title md:text-2xl text-white text-center drop-shadow-lg">
                🧸 Accessories
              </h2>
            </div>
          </div>
        </Link>
      </motion.div>

      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1, transition: { duration: 1 } }}
      >
        <Link
          to={`/services?category=care products`}
          className="card image-full lg:w-80 h-25 md:h-60 lg:h-90 shadow-xl rounded-xl overflow-hidden group"
        >
          <figure className="absolute inset-0">
            <img
              src="https://i.pinimg.com/1200x/c8/1f/58/c81f589106c2f120284b2c3a8e74a5db.jpg"
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </figure>

          <div className="card-body relative p-0 justify-end">
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>
            <div className="relative z-10 p-6 space-y-3">
              <h2 className="card-title md:text-2xl text-white text-center drop-shadow-lg">
                💊 Pet Care Products
              </h2>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
    </div>
  );
}

export default Cards
