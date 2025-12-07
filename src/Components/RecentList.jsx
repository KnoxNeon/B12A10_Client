import React from 'react'
import useServices from '../Hooks/useServices'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const RecentList = () => {
const {services} = useServices()
  return (
    <div >
        <h1 className='mt-4 md:mt-8  lg:mt-20 mb-2 text-2xl md:text-4xl lg:text-5xl font-bold text-center text-sky-500'>Recent Listings</h1>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-60 lg:my-10 m-6 lg:mx-20">
        
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </motion.div>
       
    </div>
  )
}

export default RecentList
