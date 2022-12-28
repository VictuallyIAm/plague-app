import React from 'react'
import homeImg from '../data/homeImg.png'
import Card from '../components/Card'
import merch from '../data/merch.jpg'
import merch2 from '../data/merch2.png'
import { Slider } from '../components/slider/Slider'

const Home = () => {
  return (
    <>
      <div className=" h-screen bg-gradient-to-br from-emerald-100 pt-24 px-16">
        <div className="w-1/2 flex flex-col items-start">
          <h1 className="font-bold text-4xl text-left pb-16 border-b-2 border-b-gray-600">
            Lorem ipsum dolor, consectetur adipisicing elit.
          </h1>
          <p className="text-left text-xl text-black py-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            nobis excepturi a aperiam. Suscipit, error! Vitae repellendus odit
            non veritatis.
          </p>
          <div className="flex">
            <button className="text-white text-2xl bg-biruz border-biruz border-2 rounded mx-3 py-4 px-12 hover:bg-birux">
              Get Plag
            </button>
            <button className="text-textBlack text-2xl bg-white border-2 border-black mx-3 rounded py-4 px-9">
              Get Course
            </button>
          </div>
        </div>
        <div>
          <img
            src={homeImg}
            alt="homeimg"
            className="h-192 absolute right-0 top-12 z-10"
          />
        </div>
      </div>
      <div className="my-14 bg-bgGray">
        <h1 className="text-black text-5xl mb-3 font-bold">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className=" text-xl text-black text-center px-44">
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
                  <button className="text-white text-2xl bg-red-500   rounded mt-12 mb-4 py-2 px-12 hover:bg-orange-600">
                    Buy now
                  </button>
                </div>
              </div>
              <img src={merch} alt="homeimg" className="h-1/2"></img>
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
                  <button className="text-white text-2xl bg-birux   rounded mt-12 mb-4 py-2 px-12">
                    Learn More
                  </button>
                </div>
              </div>
              <img src={merch2} alt="homeimg" className="h-1/2"></img>
            </div>
          </Card>
        </div>
      </div>
      <div className="">
        <h1 className="mt-20 text-5xl font-bold">
          What my clients say about me
        </h1>
        <p className="text-xl my-8 ">My success is measured by you.</p>
        <Slider />
      </div>
      <div className="bg-map h-screen pt-40 ">
        <h1 className="text-5xl font-bold">
          Russian leader in modern beatmaking
        </h1>
        <span className="text-3xl">This stats says it all</span>
        <div className="flex justify-center mt-16">
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
