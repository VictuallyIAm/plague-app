import React, { useEffect, useRef, useState } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import SolutionTable from '../components/SolutionTable'
import studio from '../data/studio.png'

const Solutions = () => {
  const params = useParams()
  const [activeLink, setActiveLink] = useState(params.slug)
  useEffect(() => {
    setActiveLink(params.slug)
  }, [params])

  const choice = useRef()
  const scrollToChoice = () => {
    choice.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="static bg-gradient-to-b from-bgPurple pt-36 flex mb-12 px-16">
        <div className="w-1/2 flex flex-col items-start md:w-full md:pb-8 overflow-hidden">
          <h1 className="font-bold text-4xl text-left pb-12 border-b-2 border-b-gray-600 md:text-xl md:pb-4">
            Grow up as a musician or improve yourself with Qdan!
          </h1>
          <p className="text-left text-xl text-black pt-8 md:text-sm md:py-4">
            Learn more effective with such a professional in the industry!
          </p>
          <ul className="text-left text-xl text-black py-8 md:text-sm md:py-4">
            <li className="flex items-center">
              <BsCheckLg color="green" size={20} className="mx-3" />
              something
            </li>
            <li className="flex items-center">
              <BsCheckLg color="green" size={20} className="mx-3" />
              something
            </li>
            <li className="flex items-center">
              <BsCheckLg color="green" size={20} className="mx-3" />
              something
            </li>
            <li className="flex items-center">
              <BsCheckLg color="green" size={20} className="mx-3" />
              something
            </li>
          </ul>
          <div className="flex justify-start">
            <button
              onClick={scrollToChoice}
              className="text-biruz bg-white text-2xl md:text-sm md:py-1 md:px-4  border-biruz border-2 rounded mx-3 mb-10 py-4 px-12 hover:bg-gray-100"
            >
              Choose your option
            </button>
          </div>
          <div ref={choice} className="pt-20 mx-12 py-2 md:mx-2 md:flex">
            <Link
              to="/solutions/fullstudio"
              className={
                activeLink === 'fullstudio'
                  ? 'text-biruz font-semibold px-3 py-2 border-b-4 border-b-birux md:px-1 md:text-sm md:pb-0'
                  : 'text-textBlack font-semibold px-3 py-2 hover:text-biruz border-b-4 border-b-transparent md:px-1 md:text-sm md:pb-0'
              }
            >
              Full Studio
            </Link>
            <Link
              to="/solutions/becomeproducer"
              className={
                activeLink === 'becomeproducer'
                  ? 'text-biruz font-semibold px-3 py-2 border-b-4 border-b-birux md:px-1 md:text-sm md:pb-0'
                  : 'text-textBlack font-semibold px-3 py-2 hover:text-biruz border-b-4 border-b-transparent md:px-1 md:text-sm md:pb-0'
              }
            >
              Become a producer
            </Link>
            <Link
              to="/solutions/consulting"
              className={
                activeLink === 'consulting'
                  ? 'text-biruz font-semibold px-3 py-2 border-b-4 border-b-birux md:px-1 md:text-sm md:pb-0'
                  : 'text-textBlack font-semibold px-3 py-2 hover:text-biruz border-b-4 border-b-transparent md:px-1 md:text-sm md:pb-0'
              }
            >
              Production consulting
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <img
            src={studio}
            alt="plagimg"
            className="h-192 absolute right-0 top-12 z-10"
          />
        </div>
      </div>
      <SolutionTable slug={params.slug} />
    </>
  )
}

export default Solutions
