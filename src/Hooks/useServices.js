import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useServices = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
     const [category, setCategory] = useState('')
    

     useEffect(()=>{
        setLoading(true)
        axios.get(`https://pawmart-eta.vercel.app/services?category=${category}`)
        .then(data => setServices(data.data))
        .catch(err => setError(err))
        .finally(()=>setLoading(false))
    },[category])
    
  return {services, loading, error, category, setCategory}
}

export default useServices

