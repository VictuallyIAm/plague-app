import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { FaUserAlt } from 'react-icons/fa'
import ClickAwayListener from 'react-click-away-listener'
import { userList } from '../../data/list'

const UserDrop = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const handleClickAway = () => {
    if (isExpanded) {
      setIsExpanded(false)
    }
  }
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <div
          className="flex w-48 justify-center mx-4 text-white border-2 border-biruz hover:bg-birux hover:border-birux text-sm px-2 py-5 bg-biruz cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <FaUserAlt className="pt-1" size={20} />
          <p className="mx-2">My Account</p>{' '}
          <IoIosArrowDown size={20} className="pt-1" />
        </div>

        <div
          className={isExpanded ? 'absolute  py-2  top-14 right-39' : 'hidden'}
        >
          {userList.map((item) => {
            return (
              <div
                key={userList.indexOf(item)}
                className=" px-2 text-left text-white w-48 py-3 bg-birux hover:bg-biruz text-sm font-sans cursor-pointer"
              >
                {item}
              </div>
            )
          })}
        </div>
      </div>
    </ClickAwayListener>
  )
}

export default UserDrop
