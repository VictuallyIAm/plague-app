import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import list from '../data/list.png'

const SolutionRow = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <tr key={item.id} className={isExpanded ? '' : 'h-24'}>
      <td className="border-1 align-top py-4 text-xl font-bold w-1/4">
        <div className="flex items-start justify-center">
          <img src={list} alt="logo" />
          <p className="mx-3 text-lg">{item.title}</p>
          <IoIosArrowDown
            size={40}
            color="green"
            className="ml-1 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          />
        </div>
      </td>
      <td className="border-1 align-top py-4 text-xl font-bold text-textBlack bg-bgFeatOne w-1/4">
        <div>{item.descBasic}</div>
        {isExpanded && (
          <div className="text-sm font-normal p-5 text-gray-600">
            {item.descriptionBasic}
          </div>
        )}
      </td>
      <td className="border-1 align-top py-4 text-xl font-bold text-textBlack bg-bgFeatOTwo w-1/4">
        <div>{item.descPro}</div>
        {isExpanded && (
          <div className="text-sm font-normal p-5 text-gray-600">
            {item.descriptionPro}
          </div>
        )}
      </td>
      <td className="border-1 align-top py-4 text-xl font-bold text-textBlack bg-bgFeatThree w-1/4">
        <div>{item.descProPlus}</div>
        {isExpanded && (
          <div className="text-sm font-normal p-5 text-gray-600">
            {item.descriptionProPlus}
          </div>
        )}
      </td>
    </tr>
  )
}

export default SolutionRow
