import React, { useState } from 'react'
import useServices from '../Hooks/useServices'
import ServiceCard from '../Components/ServiceCard'
import { motion } from "motion/react"

const PetSupplies = () => {
    const {services, loading, error, category, setCategory} = useServices()
 
  return (
    <>
      <select onChange={(e)=>setCategory(e.target.value)} defaultValue="Select Category" className="select select-info">
        <option disabled={true}>Select Category</option>
            <option value="pets">Pets</option>
            <option value="food">Food</option>
            <option value="accessories">Accessories</option>
            <option value="care products">Care Products</option>
      </select>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-60 lg:my-10 m-6 lg:mx-20">
        <title>Pets & Supplies</title>
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </motion.div>
    </>
  );
}

export default PetSupplies
