import React, { useEffect, useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa'
import Dropdown from '../drops/Dropdown'
import UserDrop from '../drops/UserDrop'
import logo from '../../data/logo.png'
import { list } from '../../data/list'
import { Link } from 'react-router-dom'
import {
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_QUANTITY,
  selectCartTotalQuantity,
} from '../../redux/features/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
  const scrollToTop = () => {
    window.scrollToTop()
  }
  const CartTotalQuantity = useSelector(selectCartTotalQuantity)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(CALCULATE_TOTAL_QUANTITY())
    dispatch(CALCULATE_SUBTOTAL())
  }, [dispatch])

  return (
    <div className="flex justify-between h-16 px-10 items-center text-sm bg-white border-b-1 shadow-md fixed z-30 w-screen font-semibold ">
      <div className="ml-3 pl-6">
        <Link to="/">
          <img src={logo} className="h-12" alt="logo" />
        </Link>
      </div>
      <div className="flex">
        <div className="mx-3 cursor-pointer border-b-4 border-b-transparent hover:border-b-birux box-border">
          <Link to="/" onClick={scrollToTop}>
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
        <Link to="/cart">
          <div className="flex mx-3">
            <FiShoppingCart
              className="text-gray-400 cursor-pointer"
              size={20}
            />
            <p
              className={
                CartTotalQuantity === 0
                  ? 'invisible'
                  : 'text-gray-400 -translate-y-1'
              }
            >
              {CartTotalQuantity}
            </p>
          </div>
        </Link>
        <UserDrop />
        <a href="https://t.me/dannythegoat" target="_blank" rel="noreferrer">
          <FaTelegramPlane
            size={23}
            className="text-gray-400 mx-1 cursor-pointer"
          />
        </a>
        <a
          href="https://www.instagram.com/montaignebeats"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram
            size={23}
            className="text-gray-400 mx-1 cursor-pointer"
          />
        </a>
      </div>
    </div>
  )
}

export default Header
