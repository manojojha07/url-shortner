
import React from 'react'
import UrlForm from '../Components/UrlFrom'

const HomePage = () => {
  return (
    <div className="min-h-[450px] bg-gray-100 flex flex-col items-center justify-center p-4">
    <div className="bg-white p-8  rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-3xl font-bold  text-center text-gray-500 mb-6">URL Shortener</h1>
      <UrlForm />
    </div>
  </div>
  )
}

export default HomePage