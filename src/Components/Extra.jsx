import React from 'react'

const Extra = () => {
  return (
    <div>
     
      <h1 className="mt-4 md:mt-8  lg:mt-20 mb-2 text-2xl md:text-4xl lg:text-5xl font-bold text-center text-sky-500">
        Meet Out Heroes
      </h1>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-x-60 lg:my-10 m-6 lg:mx-20'>
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-sky-900 p-6 text-center">
          <img
            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-sky-600 shadow-xl object-cover"
          />
        </div>

        <div className="p-6 space-y-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-sky-900">Alex</h2>
            <p className="text-gray-500 text-sm">@alex</p>
          </div>

          <div className="space-y-3 text-gray-700">
            <div className="flex items-center gap-3">
              <span className="font-medium text-sky-900">Email:</span>
              <span className="text-gray-600">alex59@yahoo.com</span>
            </div>
          </div>

          {/* --------- */}
        </div>
      </div>
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-sky-900 p-6 text-center">
          <img
            src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-sky-600 shadow-xl object-cover"
          />
        </div>

        <div className="p-6 space-y-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-sky-900">Emily</h2>
            <p className="text-gray-500 text-sm">@Emily</p>
          </div>

          <div className="space-y-3 text-gray-700">
            <div className="flex items-center gap-3">
              <span className="font-medium text-sky-900">Email:</span>
              <span className="text-gray-600">emily@yahoo.com</span>
            </div>
          </div>

          {/* --------- */}
        </div>
      </div>
    <div className="max-w-sm mx-auto mt-10 bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-sky-900 p-6 text-center">
          <img
            src="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-sky-600 shadow-xl object-cover"
          />
        </div>

        <div className="p-6 space-y-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-sky-900">Penny</h2>
            <p className="text-gray-500 text-sm">@penny</p>
          </div>

          <div className="space-y-3 text-gray-700">
            <div className="flex items-center gap-3">
              <span className="font-medium text-sky-900">Email:</span>
              <span className="text-gray-600">pennymorgan@gmail.com</span>
            </div>
          </div>

          {/* --------- */}
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Extra
