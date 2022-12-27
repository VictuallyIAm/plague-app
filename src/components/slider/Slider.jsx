import React, { useEffect, useState } from 'react'
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillStar,
} from 'react-icons/ai'
import './slider.scss'
import { sliderData } from './slider-data'
import { Link } from 'react-router-dom'

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideLength = sliderData.length
  const autoScroll = true
  let slideInterval
  let intervalTime = 20000

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
  }

  useEffect(() => {
    setCurrentSlide(0)
  }, [])

  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime)
      }
      auto()
    }
    return () => clearInterval(slideInterval)
  }, [currentSlide, slideInterval, autoScroll])

  return (
    <div className="slider">
      <AiOutlineArrowLeft
        className="arrow prev"
        onClick={prevSlide}
      ></AiOutlineArrowLeft>
      <AiOutlineArrowRight
        className="arrow next"
        onClick={nextSlide}
      ></AiOutlineArrowRight>
      {sliderData.map((slide, index) => {
        const { id, heading, desc, author } = slide
        return (
          <div
            key={id}
            className={index === currentSlide ? 'slide current' : 'slide'}
          >
            {index === currentSlide && (
              <div className="content shadow-lg shadow-black">
                <h2>{heading}</h2>
                <hr></hr>
                <p>{desc}</p>
                <p className="flex">
                  <AiFillStar size={30} color="gold" />
                  <AiFillStar size={30} color="gold" />
                  <AiFillStar size={30} color="gold" />
                  <AiFillStar size={30} color="gold" />
                  <AiFillStar size={30} color="gold" />
                </p>

                <span>
                  <p>by {author}</p>
                  <button className="text-white text-xl bg-biruz  rounded mt-3 py-2 px-4 hover:bg-birux">
                    See all feedback
                  </button>
                </span>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
