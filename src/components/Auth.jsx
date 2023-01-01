import React, { useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../firebase.config'
import { useNavigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
} from '../redux/features/authSlice'
import { useDispatch } from 'react-redux'

const Auth = () => {
  const [stage, setStage] = useState('login')
  const [isReset, setIsReset] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginUser = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        navigate(-1)
      })
      .catch((error) => {})
  }

  const provider = new GoogleAuthProvider()
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        navigate(-1)
      })
      .catch((error) => {})
  }

  const registerUser = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
          .then(() => {})
          .catch((error) => {})
          .then(() => {})
          .catch((error) => {})
      })
      .then(() => {
        navigate(-1)
      })
      .catch((error) => {})

      .catch((error) => {})
  }

  const resetPassword = (e) => {
    e.preventDefault()
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigate(-1)
      })
      .catch((error) => {})
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
        console.log(user)
      } else {
        dispatch(REMOVE_ACTIVE_USER())
      }
    })
  }, [dispatch])

  return (
    <div className="bg-login bg-cover">
      <div className="pt-14 flex justify-center items-center h-screen bg-black bg-opacity-40 ">
        {!isReset ? (
          <div className="flex flex-col shadow-md shadow-gray-500 items-center bg-white">
            <div className="flex w-full ">
              <div
                className={
                  stage === 'login'
                    ? ' py-5 w-1/2 border-t-4 border-t-biruz text-xl font-bold cursor-pointer'
                    : 'py-5 bg-bgGray2 w-1/2 border-l-1 border-b-1 cursor-pointer'
                }
                onClick={() => setStage('login')}
              >
                Login
              </div>
              <div
                className={
                  stage === 'register'
                    ? ' py-5 w-1/2 border-t-4 border-t-biruz text-xl font-bold cursor-pointe'
                    : 'py-5 bg-bgGray2 w-1/2 border-l-1 border-b-1 cursor-pointer'
                }
                onClick={() => setStage('register')}
              >
                Register
              </div>
            </div>
            {stage === 'login' && (
              <form
                onSubmit={loginUser}
                className="flex flex-col  px-8 pt-12 pb-6 w-96"
              >
                <label className="text-left text-sm text-gray-400">
                  Email:
                </label>
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-1 border-gray-300 hover:border-birux outline-1 outline-biruz rounded mb-6 text-xs p-2"
                />
                <div className="flex justify-between">
                  <label className="text-sm text-gray-400">Password:</label>
                  <div className="text-sm text-biruz hover:text-birux  font-bold">
                    <span onClick={() => setIsReset(true)}>Reset Password</span>
                  </div>
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-1 border-gray-300 hover:border-birux outline-1 outline-biruz rounded text-xs p-2"
                />
                <button
                  className='text-white text-xl bg-biruz border-biruz border-2 rounded mt-6  py-1 w-full hover:bg-birux"'
                  type="submit"
                >
                  Log In
                </button>
                <div
                  className="flex justify-center items-center text-black text-xl bg-transparent cursor-pointer font-semibold rounded mt-6  py-2 px-3 hover:bg-gray-300"
                  onClick={signInWithGoogle}
                >
                  <FaGoogle color="orange" className="ml-3" />{' '}
                  <p className="mx-3">Sign up With Google</p>
                </div>
              </form>
            )}
            {stage === 'register' && (
              <form
                onSubmit={registerUser}
                className="flex flex-col  px-8 pt-12 pb-6 w-96"
              >
                <label className="text-left text-sm text-gray-400">
                  Email:
                </label>
                <input
                  type="text"
                  required
                  placeholder="djqdan@mail.ru"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-1 border-gray-300 hover:border-birux outline-1 outline-biruz rounded mb-6 text-xs p-2"
                />
                <div className="flex justify-start">
                  <label className="text-sm text-gray-400">Password:</label>
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-1 border-gray-300 hover:border-birux outline-1 outline-biruz rounded text-xs p-2"
                />
                <button
                  className='text-white text-xl bg-biruz border-biruz border-2 rounded mt-6  py-1 w-full hover:bg-birux"'
                  type="submit"
                >
                  Create an account
                </button>
                <div
                  className="flex justify-center items-center text-black text-xl bg-transparent cursor-pointer font-semibold rounded mt-6  py-2 px-3 hover:bg-gray-300"
                  onClick={signInWithGoogle}
                >
                  <FaGoogle color="orange" className="ml-3" />{' '}
                  <p className="mx-3">Sign up With Google</p>
                </div>
              </form>
            )}
            <p className="mb-3 text-xs text-gray-400">DJQdan 2022</p>
          </div>
        ) : (
          <div className="flex flex-col shadow-md shadow-gray-500 relative items-center bg-white">
            <MdClose
              size={25}
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setIsReset(false)}
            />
            <form
              onSubmit={resetPassword}
              className="flex flex-col  px-8 pt-8 pb-6 w-96"
            >
              <h1 className="text-2xl font-bold text-left my-2">
                Reset a password
              </h1>
              <p className="text-sm text-left text-gray-600 my-4">
                Enter email to receive the reset link:
              </p>
              <label className="text-left text-sm text-gray-400">Email:</label>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-1 border-gray-300 hover:border-birux outline-1 outline-biruz rounded mb-6 text-xs p-2"
              />
              <button
                className='text-white text-xl bg-biruz border-biruz border-2 rounded mt-6  py-1 w-full hover:bg-birux"'
                type="submit"
              >
                Reset password
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default Auth
