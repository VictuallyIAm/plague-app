import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { plagues } from '../data/plagues'
import PlagCard from '../components/PlagCard'
import plagimg from '../data/plagimg.png'

const Plags = () => {
  const params = useParams()
  const [activeLink, setActiveLink] = useState(params.slug)
  useEffect(() => {
    setActiveLink(params.slug)
  }, [params])

  const navigate = useNavigate()
  const plags = plagues.find((plag) => plag.slug === params.slug)

  const choice = useRef()
  const scrollToChoice = () => {
    choice.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="h-screen bg-gradient-to-b from-bgPlag pt-36 flex mb-12 px-16 ">
        <div className="w-1/2 flex flex-col items-start md:pb-8 md:w-full">
          <h1 className="font-bold text-4xl text-left pb-16 border-b-2 border-b-gray-600 md:text-xl md:pb-4">
            Everything for comfortable start and insured way
          </h1>
          <p className="text-left text-xl text-black py-12">
            Begin your production with less investments with DJQdan
          </p>
          <div className="flex justify-start">
            <button
              onClick={scrollToChoice}
              className="text-white text-2xl bg-biruz md:text-sm md:py-1 md:px-4 border-biruz border-2 rounded mx-3 mb-10 py-4 px-12 hover:bg-birux"
            >
              Get Started
            </button>
          </div>
          <div
            ref={choice}
            className="pt-20 mx-12 py-2 md:flex md:justify-start md:mx-2"
          >
            <Link
              to="/plug/windows"
              className={
                activeLink === 'windows'
                  ? 'text-biruz font-semibold px-3 py-2 border-b-4 border-b-birux'
                  : 'text-textBlack font-semibold px-3 py-2 hover:text-biruz border-b-4 border-b-transparent'
              }
            >
              Windows
            </Link>
            <Link
              to="/plug/mac"
              className={
                activeLink === 'mac'
                  ? 'text-biruz font-semibold px-3 py-2 border-b-4 border-b-birux'
                  : 'text-textBlack font-semibold px-3 py-2 hover:text-biruz border-b-4 border-b-transparent'
              }
            >
              MacOS (Intel CPU)
            </Link>
            <Link
              to="/plug/macm1"
              className={
                activeLink === 'macm1'
                  ? 'text-biruz font-semibold px-3 py-2 border-b-4 border-b-birux'
                  : 'text-textBlack font-semibold px-3 py-2 hover:text-biruz border-b-4 border-b-transparent'
              }
            >
              MacOS (M1 CPU)
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <img
            src={plagimg}
            alt="plagimg"
            className="h-150 absolute right-0 top-16 z-10"
          />
        </div>
      </div>

      <div className="flex flex-wrap mx-8 my-4 md:justify-center">
        {plags.items.map((plag) => {
          return (
            <PlagCard
              plag={plag}
              key={plag.id}
              title={plag.title}
              price={plag.price}
              desc={plag.desc}
              imgUrl={plag.imgUrl}
              isHit={plag.isHit}
              bestChoice={plag.bestChoice}
            ></PlagCard>
          )
        })}
      </div>
    </>
  )
}

export default Plags
