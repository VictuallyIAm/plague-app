import React from 'react'
import hit from '../data/hit.jpg'
import best from '../data/best.jpg'
import { useDispatch } from 'react-redux'
import {
  ADD_TO_CART,
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_QUANTITY,
} from '../redux/features/cartSlice'

const PlagCard = ({ title, price, desc, imgUrl, isHit, bestChoice, plag }) => {
  const dispatch = useDispatch()
  const addToCart = (item) => {
    dispatch(ADD_TO_CART({ item }))
    dispatch(CALCULATE_TOTAL_QUANTITY())
    dispatch(CALCULATE_SUBTOTAL())
  }

  return (
    <div className="p-3 mx-1 relative  my-4 shadow-md shadow-black flex flex-col items-center w-72">
      {isHit && (
        <img src={hit} alt="hit" className="absolute top-1 left-1 w-14" />
      )}
      {bestChoice && (
        <img src={best} alt="hit" className="absolute top-1 left-1 w-14" />
      )}
      <img src={imgUrl} alt="logo" className="w-36" />
      <h1 className="text-xl my-1 text-textBlack font-semibold">{title}</h1>
      <p className="text-md my-1 text-textBlack ">{desc}</p>
      <span
        className={
          isHit
            ? 'text-textBlack bg-gradient-to-r my-1 font-bold from-emerald-400 to-green-600 px-4 py-1 rounded-full'
            : 'text-textBlack bg-gradient-to-r my-1 font-bold from-emerald-400 to-green-600 px-4 py-1 rounded-full invisible'
        }
      >
        40% OFF
      </span>
      <span className="text-xl">
        From<span className="text-2xl font-bold"> ${price}</span>
      </span>
      <button
        onClick={() => addToCart(plag)}
        className="text-white w-full text-md bg-biruz border-biruz border-1 rounded m-3 py-2 px-12 hover:bg-birux"
      >
        Buy now
      </button>
    </div>
  )
}

export default PlagCard
