import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useCollection from '../components/hooks/useCollection'
import { selectEmail } from '../redux/features/authSlice'
import {
  selectOrderHistory,
  STORE_ORDERS,
  CALC_TOTAL_ORDER_AMOUNT,
} from '../redux/features/orderSlice'

const MyCourses = () => {
  const { data } = useCollection('orders')
  const orders = useSelector(selectOrderHistory)
  const userEmail = useSelector(selectEmail)
  let totalOrderAmount = 0

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(STORE_ORDERS(data))
    dispatch(CALC_TOTAL_ORDER_AMOUNT())
  }, [dispatch, data])

  const filteredOrders = orders.filter((order) => order.userEmail === userEmail)

  return (
    <>
      {filteredOrders.length === 0 ? (
        <div className="pt-24 bg-slate-50 pb-12">
          <div className=" mx-24 mb-12  shadow-md shadow-gray-400 bg-white">
            <h1 className="m-12 p-4 border-b-2 border-b-gray-400 text-2xl font-semibold">
              No courses found
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
          <div className="border-1 mx-20 md:mx-3 border-gray-500 shadow-md shadow-gray-500">
            <div className="flex p-6 text-xl font-thin text-birux justify-between items-center bg-white">
              <span className="w-1/2 text-left">Product</span>
              <span> Status</span>
              <span className="w-1/6 text-right pr-4">Price</span>
            </div>
            {filteredOrders
              .filter((item) => item.type === 'course')
              .map((order) => {
                const { id, title, total, imgUrl } = order
                totalOrderAmount += total
                return (
                  <div
                    key={id}
                    className="flex p-6  justify-between items-center bg-white border-t-1 border-t-gray-100"
                  >
                    <div className="flex w-1/2">
                      <img
                        src={imgUrl}
                        alt="logo"
                        className="w-20 md:hidden"
                      ></img>
                      <div className="flex flex-col items-start mx-4 md:mx-2">
                        <span className="text-gray-700 text-2xl md:text-base md:text-left">
                          {title}
                        </span>
                        <span className="text-gray-700 my-2 text-sm md:text-xs">
                          by DJQdan
                        </span>
                        <span className="text-gray-700 text-xs">
                          Fully supportable
                        </span>
                      </div>
                    </div>
                    <span className="align-middle md:text-sm">
                      {order.status}
                    </span>
                    <div className="flex items-center w-1/6 justify-end">
                      <span className="text-xl font-bold mx-4 md:text-base md:mx-2">
                        ${total}
                      </span>
                    </div>
                  </div>
                )
              })}

            <div className="flex p-6 text-3xl font-semibold text-gray-700 justify-between items-center bg-white">
              <span className="w-1/2 text-left md:hidden"></span>
              <span></span>
              <span className="w-2/6 text-right pr-4 flex justify-end md:w-full">
                Total &nbsp;&nbsp;&nbsp;{' '}
                <p className="text-red-500">${totalOrderAmount.toFixed(2)}</p>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MyCourses
