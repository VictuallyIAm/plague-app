import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { BsCheckLg } from 'react-icons/bs'
import course from '../data/course.png'
import aware from '../data/aware.svg'
import theory from '../data/theory.gif'
import seq from '../data/seq.jpg'

const Courses = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 })
  }

  const courseDiv = useRef()
  const scrollToCourseDiv = () => {
    courseDiv.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <div className=" h-screen bg-gradient-to-b from-bgYellow pt-24 px-16 md:h-fit md:pb-8 md:from-bgPlag">
        <div className="w-1/2 flex flex-col items-start md:w-full">
          <h1 className="font-bold text-4xl text-left pb-16 border-b-2 border-b-gray-600 md:text-xl md:pb-4">
            Lorem ipsum dolor, consectetur adipisicing elit.
          </h1>
          <p className="text-left text-xl text-black py-12 md:text-sm md:py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            nobis excepturi a aperiam. Suscipit, error! Vitae repellendus odit
            non veritatis.
          </p>
          <div className="flex">
            <button
              onClick={scrollToCourseDiv}
              className="text-white text-2xl md:text-sm md:py-1 md:px-4 bg-biruz border-biruz border-2 rounded mx-3 py-4 px-12 hover:bg-birux"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <img
            src={course}
            alt="homeimg"
            className="h-192 absolute right-0 top-12 z-10"
          />
        </div>
      </div>
      <div
        ref={courseDiv}
        className="mx-12 py-8 shadow-md shadow-black md:mx-3"
      >
        <div className="flex justify-start items-center  mx-16 md:mx-3 py-8 border-b-1 border-b-gray-400">
          <img src={aware} alt="full" />
          <h1 className="text-xl font-bold ml-4 md:text-2xl md:pb-4">
            Music Theory from begginer to advanced
          </h1>
        </div>
        <div className="flex p-8 justify-center items-center">
          <div className="w-1/2 md:hidden">
            <img src={theory} alt="fl" className="w-full"></img>
          </div>
          <div className="px-12 flex flex-col items-center md:px-3">
            <div className="flex justify-center flex-col items-start text-left my-3">
              <span className="text-gray-700 font-bold text-2xl flex items-center">
                <BsCheckLg color="green" size={20} className="mx-3" /> 350 hours
                of training
              </span>
              <span className="text-gray-600 text-xl pl-12">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </span>
            </div>
            <div className="flex justify-center flex-col items-start text-left my-3">
              <span className="text-gray-700 font-bold text-2xl flex items-center">
                <BsCheckLg color="green" size={20} className="mx-3" />{' '}
                Interactive lessons
              </span>
              <span className="text-gray-600 text-xl pl-12">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </span>
            </div>
            <div className="flex justify-center flex-col items-start text-left my-3">
              <span className="text-gray-700 font-bold text-2xl flex items-center">
                <BsCheckLg color="green" size={20} className="mx-3" /> 1200
                customers
              </span>
              <span className="text-gray-600 text-xl pl-12">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </span>
            </div>
            <div className="flex justify-center flex-col items-start text-left my-3">
              <span className="text-gray-700 font-bold text-2xl flex items-center">
                <BsCheckLg color="green" size={20} className="mx-3" /> High
                skill level
              </span>
              <span className="text-gray-600 text-xl pl-12">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </span>
            </div>
          </div>
        </div>
        <Link to="musictheory" onClick={scrollToTop}>
          <button className="text-white text-2xl bg-biruz border-biruz border-2 rounded m-3 mt-0 py-4 px-12 hover:bg-birux">
            Learn more
          </button>
        </Link>
      </div>
      <div className="mx-12 py-8 my-8 shadow-md shadow-black md:mx-3">
        <div className="flex justify-start items-center md:mx-3 mx-16 py-8 border-b-1 border-b-gray-400">
          <img src={aware} alt="full" />
          <h1 className="text-xl font-bold ml-4">
            Most popular soft for production
          </h1>
        </div>
        <div className="flex p-8 justify-center items-center">
          <div className="w-1/2 md:hidden">
            <img src={seq} alt="fl" className="w-full"></img>
          </div>
          <div className="px-12 flex flex-col items-center md:px-3">
            <div className="flex justify-center flex-col items-start text-left my-3">
              <Link to="flstudio" onClick={scrollToTop}>
                <span className="text-gray-700 font-bold text-2xl flex items-center hover:text-biruz">
                  <BsCheckLg color="green" size={20} className="mx-3" /> FL
                  Studio
                </span>
              </Link>
              <span className="text-gray-600 text-xl pl-12">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </span>
            </div>
            <div className="flex justify-center flex-col items-start text-left my-3">
              <Link to="logic" onClick={scrollToTop}>
                <span className="text-gray-700 font-bold text-2xl flex items-center hover:text-biruz">
                  <BsCheckLg color="green" size={20} className="mx-3" /> Logic
                </span>
              </Link>
              <span className="text-gray-600 text-xl pl-12">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </span>
            </div>
            <div className="flex justify-center flex-col items-start text-left my-3">
              <Link to="reaper" onClick={scrollToTop}>
                <span className="text-gray-700 font-bold text-2xl flex items-center hover:text-biruz">
                  <BsCheckLg color="green" size={20} className="mx-3" /> Reaper
                </span>
              </Link>
              <span className="text-gray-600 text-xl pl-12">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </span>
            </div>
            <div className="flex justify-center flex-col items-start text-left my-3">
              <Link to="studioone" onClick={scrollToTop}>
                <span className="text-gray-700 font-bold text-2xl flex items-center hover:text-biruz">
                  <BsCheckLg color="green" size={20} className="mx-3" /> Studio
                  One
                </span>
              </Link>
              <span className="text-gray-600 text-xl pl-12">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </span>
            </div>
            <div className="flex justify-center flex-col items-start text-left my-3">
              <Link to="reason" onClick={scrollToTop}>
                <span className="text-gray-700 font-bold text-2xl flex items-center hover:text-biruz">
                  <BsCheckLg color="green" size={20} className="mx-3" /> Reason
                </span>
              </Link>
              <span className="text-gray-600 text-xl pl-12">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
