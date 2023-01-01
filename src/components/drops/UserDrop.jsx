import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosArrowDown } from 'react-icons/io'
import { FaUserAlt } from 'react-icons/fa'
import ClickAwayListener from 'react-click-away-listener'
import { userList } from '../../data/list'
import {
  REMOVE_ACTIVE_USER,
  selectIsLoggedIn,
  SET_ACTIVE_USER,
  selectEmail,
} from '../../redux/features/authSlice'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { Link } from 'react-router-dom'

const UserDrop = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const handleClickAway = () => {
    if (isExpanded) {
      setIsExpanded(false)
    }
  }
  const IsLoggedIn = useSelector(selectIsLoggedIn)
  const userEmail = useSelector(selectEmail)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userID: user.uid,
          })
        )
      } else {
        dispatch(REMOVE_ACTIVE_USER())
      }
    })
  }, [dispatch])

  const userLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
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
          {IsLoggedIn && (
            <div className=" px-2 text-textBlack border-2 border-biruz w-48 py-3 bg-white text-sm text-center font-sans cursor-pointer">
              {userEmail}
            </div>
          )}
          {userList.map((item) => {
            return (
              <Link
                key={userList.indexOf(item)}
                to={
                  IsLoggedIn ? `/plague-app/${item.slug}` : '/plague-app/login'
                }
              >
                <div className=" px-2 text-left text-white w-48 py-3 bg-birux hover:bg-biruz text-sm font-sans cursor-pointer">
                  {item.title}
                </div>
              </Link>
            )
          })}
          {IsLoggedIn && (
            <div
              onClick={userLogout}
              className=" px-2 text-left text-white w-48 py-3 bg-birux hover:bg-biruz text-sm font-sans cursor-pointer"
            >
              Log Out
            </div>
          )}
        </div>
      </div>
    </ClickAwayListener>
  )
}

export default UserDrop
