import React from 'react'
import { Link } from 'react-router'

const ErrorPage = () => {
  return (
    <div>
    <title>404 Error</title>
    <div className='flex flex-col'> <img className='w-[700px] m-auto md:h-[500px]' src="../404_paw.png" alt="" />
      <Link to='/' className="w-[300px] mx-auto text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition transform hover:scale-105 shadow-md">Go Back Home</Link></div>
     

    </div>
  )
}

export default ErrorPage
