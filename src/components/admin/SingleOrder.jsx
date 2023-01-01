import { doc, setDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { RiSaveFill } from 'react-icons/ri'
import { db } from '../../firebase.config'

const SingleOrder = ({ order }) => {
  const { userEmail, total, status, title, imgUrl, type, id, createdAt } = order
  const [orderStatus, setOrderStatus] = useState(status)

  const handleStatusUpload = (e) => {
    e.preventDefault()
    try {
      setDoc(doc(db, `orders`, id), {
        userEmail: userEmail,
        total: total,
        status: orderStatus,
        title: title,
        imgUrl: imgUrl,
        type: type,
        createdAt: createdAt,
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  const date = new Date(createdAt.seconds * 1000)
  const createDate =
    date.getMonth() +
    1 +
    '.' +
    date.getDate() +
    '.' +
    date.getFullYear() +
    '\u00A0' +
    date.getHours() +
    ':' +
    date.getMinutes()

  return (
    <div className="flex p-6 md:p-2 justify-between items-center bg-white border-t-1 border-t-gray-100">
      <div className="flex w-2/5">
        <img src={imgUrl} alt="logo" className="w-20 md:hidden"></img>
        <div className="flex flex-col items-start mx-4 md:mx-1">
          <span className="text-gray-700 text-2xl md:text-sm md:text-left">
            {title}
          </span>
          <span className="text-gray-700 my-2 text-sm md:hidden">
            by DJQdan
          </span>
          <span className="text-gray-700 text-xs md:hidden">
            Fully supportable
          </span>
        </div>
      </div>
      <span className="text-sm mr-4 md:text-xs">{createDate}</span>
      <select
        className="align-middle p-3 border-2 text-left md:p-1 md:w-16"
        value={orderStatus}
        onChange={(e) => setOrderStatus(e.target.value)}
      >
        <option>Created</option>
        <option>Performing</option>
        <option>Completed</option>
      </select>
      <span className="align-middle w-1/6 md:hidden">{order.userEmail}</span>
      <div className="flex items-center w-1/6 justify-end">
        <span className="text-xl font-bold mx-4 md:hidden">${total}</span>
        <RiSaveFill
          onClick={handleStatusUpload}
          color={orderStatus === status ? 'green' : 'red'}
          size={40}
          className="cursor-pointer"
        />
      </div>
    </div>
  )
}

export default SingleOrder
