import React from 'react'
import homeImg from '../data/homeImg.png'
import Card from '../components/Card'
import merch from '../data/merch.jpg'
import merch2 from '../data/merch2.png'
import { Slider } from '../components/slider/Slider'
import { Link } from 'react-router-dom'

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 })
  }
  return (
    <>
      <div className=" h-screen bg-gradient-to-br from-emerald-100 pt-24 px-16 md:h-fit md:pb-8">
        <div className="w-1/2 flex flex-col items-start md:items-center md:w-full md:pb-8">
          <h1 className="font-bold text-4xl text-left pb-16 border-b-2 border-b-gray-600 md:text-xl md:pb-4">
            Lorem ipsum dolor, consectetur adipisicing elit.
          </h1>
          <p className="text-left text-xl text-black py-12 md:text-sm md:py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            nobis excepturi a aperiam. Suscipit, error! Vitae repellendus odit
            non veritatis.
          </p>
          <div className="flex">
            <Link to="plug/windows" onClick={scrollToTop}>
              <button className="text-white text-2xl md:text-sm md:py-1 md:px-4 bg-biruz border-biruz border-2 rounded mx-3 py-4 px-12 hover:bg-birux">
                Get Plag
              </button>
            </Link>
            <Link to="courses" onClick={scrollToTop}>
              <button className="text-textBlack text-2xl md:text-sm md:py-1 md:px-4 bg-white border-2 border-black mx-3 rounded py-4 px-9">
                Choose Course
              </button>
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <img
            src={homeImg}
            alt="homeimg"
            className="h-192 absolute right-0 top-12 z-10"
          />
        </div>
      </div>
      <div className="my-14 bg-bgGray">
        <h1 className="text-black text-5xl mb-3 font-bold md:text-xl">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className=" text-xl text-black text-center px-44 md:text-sm md:px-16">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          officiis dicta blanditiis! Quisquam voluptas exercitationem officia
          sit officiis, itaque enim?
        </p>
        <div className="flex flex-wrap justify-center mx-2">
          <Card>
            <div className="flex bg-overPurple  text-white rounded ">
              <div className="flex flex-col items-start px-5">
                <span className="text-textBlack bg-gradient-to-r my-6 from-emerald-200 to-green-600 px-4 p-1 rounded-full">
                  Xmas sale --Up to -50%
                </span>
                <div className="flex flex-col items-start my-4">
                  <h2 className="font-bold text-2xl">Lorem ipsum dolor sit.</h2>
                  <p className="text-left">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Atque non doloribus fugit officiis?
                  </p>
                  <Link to="courses/logic" onClick={scrollToTop}>
                    <button className="text-white text-2xl bg-red-500   rounded mt-12 mb-4 py-2 px-12 hover:bg-orange-600">
                      Buy now
                    </button>
                  </Link>
                </div>
              </div>
              <img src={merch} alt="homeimg" className="h-1/2 md:hidden"></img>
            </div>
          </Card>
          <Card>
            <div className="flex  bg-white  text-textBlack rounded ">
              <div className="flex flex-col items-start px-5">
                <span className="text-textBlack bg-gradient-to-r my-6 from-emerald-200 to-green-600 px-4 p-1 rounded-full">
                  Premium deal
                </span>
                <div className="flex flex-col items-start my-4">
                  <h2 className="font-bold text-2xl text-left">
                    Lorem ipsum dolor sit.
                  </h2>
                  <p className="text-left">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Atque non doloribus fugit officiis?
                  </p>
                  <Link to="plug/mac" onClick={scrollToTop}>
                    <button className="text-white text-2xl bg-birux   rounded mt-12 mb-4 py-2 px-12">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
              <img src={merch2} alt="homeimg" className="h-1/2 md:hidden"></img>
            </div>
          </Card>
        </div>
      </div>
      <div className="">
        <h1 className="mt-20 text-5xl font-bold md:text-2xl">
          What my clients say about me
        </h1>
        <p className="text-xl my-8 md:text-sm ">
          My success is measured by you.
        </p>
        <Slider />
      </div>
      <div className="bg-map h-screen pt-40 ">
        <h1 className="text-5xl font-bold md:text-2xl ">
          Russian leader in modern beatmaking
        </h1>
        <span className="text-3xl md:text-xl">This stats says it all</span>
        <div className="flex justify-center mt-16 md:flex-col ">
          <span className="mx-6">
            <p className="text-5xl font-bold">212M</p>
            <p className="text-biruz">plagueIns installed</p>
          </span>
          <span className="mx-6">
            <p className="text-5xl font-bold">$2M</p>
            <p className="text-biruz">beats selled</p>
          </span>
          <span className="mx-6">
            <p className="text-5xl font-bold">117</p>
            <p className="text-biruz">rappers involved</p>
          </span>
        </div>
      </div>
    </>
  )
}

export default Home
