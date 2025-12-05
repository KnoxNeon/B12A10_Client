import React from 'react'
import useServices from '../Hooks/useServices'
import ServiceCard from '../Components/ServiceCard'
import { motion } from "motion/react"

const PetSupplies = () => {
    const {services, loading, error} = useServices()
  return (
    <motion.div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 lg:my-10 m-6 lg:mx-20'>
      <title>Pets & Supplies</title>
      {
            services.map(service => (
              <ServiceCard key={service._id} service={service} />
            ))
          }
    </motion.div>
  )
}

export default PetSupplies
