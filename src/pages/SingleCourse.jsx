import React, { useEffect, useState } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { useParams } from 'react-router'
import { courses } from '../data/courses'
import courseImg from '../data/course.png'
import { useDispatch, useSelector } from 'react-redux'
import {
  ADD_TO_CART,
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_QUANTITY,
} from '../redux/features/cartSlice'
import { selectEmail, selectPhoneNumber } from '../redux/features/authSlice'
import Notiflix from 'notiflix'

const SingleCourse = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const addToCart = (item) => {
    dispatch(ADD_TO_CART({ item }))
    dispatch(CALCULATE_TOTAL_QUANTITY())
    dispatch(CALCULATE_SUBTOTAL())
  }
  const userEmail = useSelector(selectEmail)
  const userPhone = useSelector(selectPhoneNumber)

  const course = courses.find((course) => course.slug === params.slug)

  const handleApply = (title, email, get, phone) => {
    Notiflix.Confirm.show(
      'Apply?',
      'I will receive your offer and connect with you in 24 hours',
      'Apply',
      'No',
      function okCb() {
        const data = {
          service_id: 'service_321usp4',
          template_id: 'template_me9n6cw',
          user_id: 'Qy5EvY0m13ER3oFiB',
          template_params: {
            title: title,
            userEmail: email,
            get: get,
            phone: phone,
          },
        }

        fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data)
          })
          .catch((error) => {
            console.log('Error:', error.message)
          })
      },
      function cancelCb() {},
      {
        width: '400px',
        borderRadius: '8px',
        titleColor: 'white',
        messageColor: 'white',
        okButtonBackground: 'black',
        CSSAnimationStyle: 'zoom',
        backgroundColor: 'rgba(5, 122, 104, 1)',
      }
    )
  }

  return (
    <div>
      <div className=" h-screen bg-gradient-to-b from-bgYellow pt-24 px-16 md:from-bgPlag md:h-fit">
        <div className="w-1/2 flex flex-col items-start md:w-full md:pb-8">
          <h1 className="font-bold text-4xl text-left pb-16 border-b-2 border-b-gray-600 md:text-2xl md:pb-8">
            {course.title}
          </h1>
          <ul className="text-left text-xl text-black py-8 md:text-base md:py-4">
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
          <span className="text-3xl font-bold text-gray-600 mb-6 md:text-xl md:py-4">
            For ${course.price}
          </span>
          <div className="flex">
            <button
              onClick={() => addToCart(course)}
              className="text-white text-2xl md:text-sm md:py-1 md:px-4 bg-biruz border-biruz border-2 rounded mx-3 py-4 px-12 hover:bg-birux"
            >
              Buy Now
            </button>
            <button
              onClick={() => {
                handleApply(course.title, userEmail, 'get a trial', userPhone)
              }}
              className="text-textBlack text-2xl md:text-sm md:py-1 md:px-4 bg-white border-black border-2 rounded mx-3 py-4 px-12"
            >
              Apply for lesson
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <img
            src={courseImg}
            alt="homeimg"
            className="h-192 absolute right-0 top-12 z-10"
          />
        </div>
      </div>
    </div>
  )
}

export default SingleCourse
