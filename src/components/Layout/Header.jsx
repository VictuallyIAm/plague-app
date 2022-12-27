import React, { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa'
import Dropdown from '../drops/Dropdown'
import UserDrop from '../drops/UserDrop'
import logo from '../../data/logo.png'
import { list } from '../../data/list'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex justify-between h-16 px-10 items-center text-sm bg-white border-b-1 shadow-md fixed z-30 w-screen font-semibold ">
      <div className="ml-3 pl-6">
        <img src={logo} className="h-12" alt="logo" />
      </div>
      <div className="flex">
        <div className="mx-3 cursor-pointer border-b-4 border-b-transparent hover:border-b-birux box-border">
          <Link to="/">
            <div className="flex items-center px-2 py-5 text-textBlack ">
              Home
            </div>
          </Link>
        </div>
        {list.map((item) => {
          return (
            <Dropdown
              key={list.indexOf(item)}
              title={item.title}
              positions={item.positions}
              slug={item.slug}
            />
          )
        })}
      </div>
      <div className="flex mr-4 pr-6 items-center">
        <FiShoppingCart
          className="text-gray-400 mx-3 cursor-pointer"
          size={20}
        />
        <UserDrop />
        <FaTelegramPlane
          size={23}
          className="text-gray-400 mx-1 cursor-pointer"
        />
        <FaInstagram size={23} className="text-gray-400 mx-1 cursor-pointer" />
      </div>
    </div>
  )
}

export default Header
