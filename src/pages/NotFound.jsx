import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="pt-24 bg-slate-50 pb-12">
      <div className=" mx-24 mb-12  shadow-md shadow-gray-400 bg-white">
        <h1 className="m-12 p-4 border-b-2 border-b-gray-400 text-2xl font-semibold">
          It seems we dont have this here. Do you want to go back?
        </h1>
        <Link to="/">
          <button className="text-white text-2xl bg-biruz border-biruz border-2 rounded mx-3 my-3 py-4 px-12 hover:bg-birux">
            Go to home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
