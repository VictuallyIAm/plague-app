import React, { useEffect, useState } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { useParams } from 'react-router'
import { courses } from '../data/courses'
import { useDispatch } from 'react-redux'
import {
  ADD_TO_CART,
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_QUANTITY,
} from '../redux/features/cartSlice'

const SingleCourse = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const addToCart = (item) => {
    dispatch(ADD_TO_CART({ item }))
    dispatch(CALCULATE_TOTAL_QUANTITY())
    dispatch(CALCULATE_SUBTOTAL())
  }

  const course = courses.find((course) => course.slug === params.slug)

  return (
    <div>
      <div className=" h-screen bg-gradient-to-b from-bgBiruz pt-24 px-16">
        <div className="w-1/2 flex flex-col items-start">
          <h1 className="font-bold text-4xl text-left pb-16 border-b-2 border-b-gray-600">
            {course.title}
          </h1>
          <ul className="text-left text-xl text-black py-8">
            <li className="flex items-center">
              <BsCheckLg color="green" size={20} className="mx-3" />
              {course.desc1}
            </li>
            <li className="flex items-center">
              <BsCheckLg color="green" size={20} className="mx-3" />
              {course.desc2}
            </li>
            <li className="flex items-center">
              <BsCheckLg color="green" size={20} className="mx-3" />
              {course.desc3}
            </li>
            <li className="flex items-center">
              <BsCheckLg color="green" size={20} className="mx-3" />
              {course.desc4}
            </li>
          </ul>
          <span className="text-3xl font-bold text-gray-600 mb-6">
            For ${course.price}
          </span>
          <div className="flex">
            <button
              onClick={() => addToCart(course)}
              className="text-white text-2xl bg-biruz border-biruz border-2 rounded mx-3 py-4 px-12 hover:bg-birux"
            >
              Buy Now
            </button>
            <button className="text-textBlack text-2xl bg-white border-black border-2 rounded mx-3 py-4 px-12">
              Apply for lesson
            </button>
          </div>
        </div>
        <div>
          <img
            src={course.imgUrl}
            alt="homeimg"
            className="h-192 absolute right-0 top-12 z-10"
          />
        </div>
      </div>
    </div>
  )
}

export default SingleCourse
