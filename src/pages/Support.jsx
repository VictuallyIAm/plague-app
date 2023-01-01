import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { selectEmail } from '../redux/features/authSlice'

const Support = () => {
  const email = useSelector(selectEmail)
  const scrollToTop = () => {
    window.scrollTo({ top: 0 })
  }
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate('/')
    scrollToTop()
  }
  return (
    <div className="bg-login bg-cover">
      <div className="pt-14 flex justify-center items-center h-screen w-screen bg-black bg-opacity-40 ">
        <div className="flex flex-col shadow-md shadow-gray-500  rounded items-center bg-white">
          <div className="flex flex-col">
            <div className={'py-3 text-xl font-bold cursor-pointer'}>
              Contact
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col  px-8 pt-8 pb-6 w-96"
          >
            <label className="text-left text-sm text-gray-400">Email:</label>
            <input
              type="text"
              required
              value={email}
              className="border-1 border-gray-300 hover:border-birux outline-1 outline-biruz rounded mb-6 text-xs p-2"
            />
            <div className="flex justify-between">
              <label className="text-sm text-gray-400">Your message:</label>
              <div className="text-sm text-biruz hover:text-birux  font-bold"></div>
            </div>
            <textarea
              type="text"
              rows={7}
              required
              className="border-1 border-gray-300 hover:border-birux outline-1 outline-biruz rounded text-xs p-2"
            />
            <button
              className='text-white text-xl bg-biruz border-biruz border-2 rounded mt-6  py-1 w-full hover:bg-birux"'
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Support
