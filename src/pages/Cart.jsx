import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrashAlt } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import {
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_QUANTITY,
  CLEAR_CART,
  REMOVE_FROM_CARD,
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQuantity,
} from '../redux/features/cartSlice'

const Cart = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotalAmount = useSelector(selectCartTotalAmount)
  const cartTotalQuantity = useSelector(selectCartTotalQuantity)
  const dispatch = useDispatch()

  const removeFromCart = (cart) => {
    dispatch(REMOVE_FROM_CARD(cart))
  }

  const clearCart = () => {
    dispatch(CLEAR_CART())
  }

  useEffect(() => {
    dispatch(CALCULATE_SUBTOTAL())
    dispatch(CALCULATE_TOTAL_QUANTITY())
  }, [dispatch, cartItems])

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="pt-24 bg-slate-50 pb-12">
          <div className=" mx-24 mb-12  shadow-md shadow-gray-400 bg-white">
            <h1 className="m-12 p-4 border-b-2 border-b-gray-400 text-2xl font-semibold">
              Your cart is empty. Do you want to continue shopping?
            </h1>
            <Link to="/">
              <button className="text-white text-2xl bg-biruz border-biruz border-2 rounded mx-3 my-3 py-4 px-12 hover:bg-birux">
                Go to home
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="py-24 bg-gradient-to-b from-gray-200 ">
          <div className="border-1 mx-20 border-gray-500 shadow-md shadow-gray-500">
            <div className="flex p-6 text-xl font-thin text-birux justify-between items-center bg-white">
              <span className="w-1/2 text-left">Product</span>
              <span>Delivery method</span>
              <span className="w-1/6 text-right pr-4">Price</span>
            </div>
            {cartItems.map((cart) => {
              const { id, title, price, imgUrl } = cart.item
              return (
                <div
                  key={id}
                  className="flex p-6  justify-between items-center bg-white border-t-1 border-t-gray-100"
                >
                  <div className="flex w-1/2">
                    <img src={imgUrl} alt="logo" className="w-20"></img>
                    <div className="flex flex-col items-start mx-4">
                      <span className="text-gray-700 text-2xl">{title}</span>
                      <span className="text-gray-700 my-2 text-sm">
                        by DJQdan
                      </span>
                      <span className="text-gray-700 text-xs">
                        Fully supportable
                      </span>
                    </div>
                  </div>
                  <span className="align-middle">Digital</span>
                  <div className="flex items-center w-1/6 justify-end">
                    <span className="text-xl font-bold mx-4">${price}</span>
                    <MdClose
                      size={15}
                      color={'gray'}
                      onClick={() => removeFromCart(cart)}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              )
            })}
            <div className="flex p-6 text-3xl font-semibold text-gray-700 justify-between items-center bg-white">
              <span className="w-1/2 text-left"></span>
              <span></span>
              <span className="w-2/6 text-right pr-4 flex justify-end">
                Total &nbsp;&nbsp;&nbsp;{' '}
                <p className="text-red-500">${cartTotalAmount.toFixed(2)}</p>
              </span>
            </div>
          </div>
          <div className="flex justify-end">
            <span className="my-5 mx-4 text-xl text-gray-500">
              Create an order and I will connect with you in 24 hours to manage
              details
            </span>
            <button className="text-white text-2xl bg-biruz border-biruz border-2 rounded mx-20 my-3 px-8 py-2  hover:bg-birux">
              Create an order now
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Cart
