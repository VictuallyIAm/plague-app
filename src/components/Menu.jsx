import React, { useEffect, useState } from 'react'
import ClickAwayListener from 'react-click-away-listener'
import { FaInstagram, FaTelegramPlane, FaUserAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AdminOnlyLink } from './admin/AdminRoute'
import {
  REMOVE_ACTIVE_USER,
  selectIsLoggedIn,
  SET_ACTIVE_USER,
  selectEmail,
} from '../redux/features/authSlice'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase.config'

const Menu = ({ setMenuExpanded }) => {
  const [showAcc, setShowAcc] = useState(false)
  const IsLoggedIn = useSelector(selectIsLoggedIn)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const scrollToTop = () => {
    window.scrollTo({ top: 0 })
  }
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
    <>
      {showAcc ? (
        <div className="fixed h-screen w-screen mt-16 bg-black bg-opacity-50 z-50 ">
          <ClickAwayListener onClickAway={() => setMenuExpanded(false)}>
            <div className="w-2/3 bg-white text-left  text-xl h-screen">
              <div>
                <div className="flex w-full justify-center text-white border-2 border-biruz hover:bg-birux hover:border-birux text-sm px-2 py-5 bg-biruz cursor-pointer">
                  <FaUserAlt className="pt-1" size={20} />
                  <p className="mx-2">My Account</p>{' '}
                </div>
              </div>
              <Link
                to="/plague-app/mycourses"
                onClick={() => {
                  setMenuExpanded(false)
                  scrollToTop()
                }}
              >
                <div className="py-4 px-3 text-black">My courses</div>
              </Link>
              <Link
                to="/plague-app/myplags"
                onClick={() => {
                  setMenuExpanded(false)
                  scrollToTop()
                }}
              >
                <div className="py-4 px-3 text-black">My plags</div>
              </Link>
              <Link
                to="/plague-app/support"
                onClick={() => {
                  setMenuExpanded(false)
                  scrollToTop()
                }}
              >
                <div className="py-4 px-3 text-black">Customer support</div>
              </Link>
              <div
                onClick={() => {
                  userLogout()
                  navigate('/plague-app')
                  setMenuExpanded(false)
                }}
                className="py-4 px-3 text-black"
              >
                Log Out
              </div>

              <div className="py-4 px-3 text-black flex justify-center">
                <a
                  href="https://t.me/dannythegoat"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTelegramPlane
                    size={23}
                    className="text-gray-400 mx-3 cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.instagram.com/montaignebeats"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram
                    size={23}
                    className="text-gray-400 mx-3 cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </ClickAwayListener>
        </div>
      ) : (
        <div className="fixed h-screen w-screen mt-16 bg-black bg-opacity-50 z-50 ">
          <ClickAwayListener onClickAway={() => setMenuExpanded(false)}>
            <div className="w-2/3 bg-white text-left  text-xl h-screen ">
              <Link
                to="/plague-app"
                onClick={() => {
                  setMenuExpanded(false)
                  scrollToTop()
                }}
              >
                <div className="py-4 px-3 text-black">Home</div>
              </Link>
              <Link
                to="/plague-app/courses"
                onClick={() => {
                  setMenuExpanded(false)
                  scrollToTop()
                }}
              >
                <div className="py-4 px-3 text-black">Courses</div>
              </Link>
              <Link
                to="/plague-app/plug/windows"
                onClick={() => {
                  setMenuExpanded(false)
                  scrollToTop()
                }}
              >
                <div className="py-4 px-3 text-black">Plaguins</div>
              </Link>
              <Link
                to="/plague-app/solutions/fullstudio"
                onClick={() => {
                  setMenuExpanded(false)
                  scrollToTop()
                }}
              >
                <div className="py-4 px-3 text-black">Full solutions</div>
              </Link>
              <AdminOnlyLink>
                <Link
                  to="/plague-app/admin"
                  onClick={() => {
                    setMenuExpanded(false)
                    scrollToTop()
                  }}
                >
                  <div className="py-4 px-3 text-black">Orders</div>
                </Link>
              </AdminOnlyLink>
              <div
                onClick={() => {
                  if (IsLoggedIn) {
                    setShowAcc(true)
                  } else {
                    navigate('/plague-app/login')
                    setMenuExpanded(false)
                    scrollToTop()
                  }
                }}
                className="flex w-full justify-center text-white border-2 border-biruz hover:bg-birux hover:border-birux text-sm px-2 py-5 bg-biruz cursor-pointer"
              >
                <FaUserAlt className="pt-1" size={20} />
                <p className="mx-2">My Account</p>{' '}
              </div>

              <div className="py-4 px-3 text-black flex justify-center">
                <a
                  href="https://t.me/dannythegoat"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTelegramPlane
                    size={23}
                    className="text-gray-400 mx-3 cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.instagram.com/montaignebeats"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram
                    size={23}
                    className="text-gray-400 mx-3 cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </ClickAwayListener>
        </div>
      )}
    </>
  )
}

export default Menu
