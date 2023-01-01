import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useCollection from '../../components/hooks/useCollection'
import {
  selectOrderHistory,
  STORE_ORDERS,
  CALC_TOTAL_ORDER_AMOUNT,
} from '../../redux/features/orderSlice'
import SingleOrder from './SingleOrder'

const Orders = () => {
  const { data } = useCollection('orders')
  const orders = useSelector(selectOrderHistory)
  let totalOrderAmount = 0

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(STORE_ORDERS(data))
    dispatch(CALC_TOTAL_ORDER_AMOUNT())
  }, [dispatch, data])

  const filteredOrders = orders

  return (
    <>
      {filteredOrders.length === 0 ? (
        <div className="pt-24 bg-slate-50 pb-12">
          <div className=" mx-24 mb-12 md:mx-3  shadow-md shadow-gray-400 bg-white">
            <h1 className="m-12 p-4 border-b-2 border-b-gray-400 text-2xl font-semibold">
              No orders yet
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
            <div className="md:hidden flex p-6 text-xl md:text-sm font-thin text-birux justify-between md:justify-center items-center bg-white">
              <span className="w-2/5 text-left">Product</span>
              <span> Date</span>
              <span className="ml-28 md:ml-3"> Status</span>
              <span className="ml-8 md:hidden"> Customer email</span>
              <span className="w-1/6 text-right pr-12 md:hidden">Price</span>
            </div>
            {filteredOrders.map((order) => {
              const { id, total } = order
              totalOrderAmount += total
              return <SingleOrder order={order} key={id} />
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

export default Orders
