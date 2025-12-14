import React from 'react'
import UrlForm from '../Components/UrlFrom'
import UserUrl from '../Components/UseUrl'


const DashboardPage = () => {
  return (
    <div className="min-h-[460px]   bg-gray-100 flex flex-col items-center justify-center p-4">
    <div className="bg-white mt-2 p-8 rounded-lg shadow-md w-full max-w-4xl">
      <h1 className="text-2xl font-bold bg-yellow-300 text-center mb-6">URL Shortener</h1>
      <UrlForm/>
      <UserUrl/>
    </div>
  </div>
  )
}

export default DashboardPage