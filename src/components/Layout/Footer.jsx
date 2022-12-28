import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { IoLogoSoundcloud } from 'react-icons/io5'
import {
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillFacebook,
} from 'react-icons/ai'
import { list } from '../../data/list'
import { Link } from 'react-router-dom'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  const scrollToTop = () => {
    window.scrollToTop()
  }

  return (
    <>
      <div className="flex justify-evenly border-t-2 border-t-slate-100 border-b-2 border-b-slate-100 bg-bgFooter">
        {list.map((item) => {
          const mainslug = item.slug
          return (
            <div
              key={list.indexOf(item)}
              className="flex flex-col p-4 text-textBlack text-left text-sm "
            >
              <span className="text-biruz text-xl font-bold mb-3 mt-2 cursor-pointer">
                {item.title}
              </span>
              {item.positions.map((item) => {
                return (
                  <Link
                    to={`${mainslug}/${item.slug}`}
                    className="my-1"
                    key={item.id}
                    onClick={scrollToTop}
                  >
                    <span className=" cursor-pointer hover:underline">
                      {item.title}
                    </span>
                  </Link>
                )
              })}
            </div>
          )
        })}
      </div>
      <div className="flex justify-evenly py-4 bg-bgFooter">
        <div className="w-3/4 text-gray-400 text-left px-10">
          <p> @{year} DjQdan. All rights reserved</p>
          <p>
            {' '}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos et
            iure nostrum adipisci cupiditate.
          </p>
        </div>
        <div className="flex justify-evenly items-center w-1/4 text-biruz">
          <a
            href="https://www.instagram.com/montaignebeats"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram size={24} />
          </a>
          <a
            href="https://soundcloud.com/montaignebeats"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoSoundcloud size={24} />
          </a>
          <a
            href="https://www.facebook.com/montaignebeats/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook size={24} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCMO5qyUEZ1KE4nXoAg3bYXA"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillYoutube size={24} />
          </a>
          <a
            href="https://twitter.com/BeatsMontaigne"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterCircle size={24} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer
