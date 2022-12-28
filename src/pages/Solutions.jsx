import React, { useEffect, useRef, useState } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import SolutionTable from '../components/SolutionTable'
import homeImg from '../data/homeImg.png'

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
      <div className=" bg-gradient-to-b from-bgPurple pt-36 flex mb-12 px-16">
        <div className="w-1/2 flex flex-col items-start">
          <h1 className="font-bold text-4xl text-left pb-12 border-b-2 border-b-gray-600">
            Grow up as a musician or improve yourself with Qdan!
          </h1>
          <p className="text-left text-xl text-black pt-8">
            Learn more effective with such a professional in the industry!
          </p>
          <ul className="text-left text-xl text-black py-8">
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
              className="text-biruz bg-white text-2xl  border-biruz border-2 rounded mx-3 mb-10 py-4 px-12 hover:bg-gray-100"
            >
              Choose your option
            </button>
          </div>
          <div ref={choice} className="pt-20 mx-12 py-2">
            <Link
              to="/solutions/fullstudio"
              className={
                activeLink === 'fullstudio'
                  ? 'text-biruz font-semibold px-3 py-2 border-b-4 border-b-birux'
                  : 'text-textBlack font-semibold px-3 py-2 hover:text-biruz border-b-4 border-b-transparent'
              }
            >
              Full Studio
            </Link>
            <Link
              to="/solutions/becomeproducer"
              className={
                activeLink === 'becomeproducer'
                  ? 'text-biruz font-semibold px-3 py-2 border-b-4 border-b-birux'
                  : 'text-textBlack font-semibold px-3 py-2 hover:text-biruz border-b-4 border-b-transparent'
              }
            >
              Become a producer
            </Link>
            <Link
              to="/solutions/consulting"
              className={
                activeLink === 'consulting'
                  ? 'text-biruz font-semibold px-3 py-2 border-b-4 border-b-birux'
                  : 'text-textBlack font-semibold px-3 py-2 hover:text-biruz border-b-4 border-b-transparent'
              }
            >
              Production consulting
            </Link>
          </div>
        </div>
        <div>
          <img
            src={homeImg}
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
