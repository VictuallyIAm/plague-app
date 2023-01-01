import React from 'react'
import { AiOutlineSolution } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import Notiflix from 'notiflix'
import { solutions } from '../data/solutions'
import SolutionRow from './SolutionRow'
import { selectEmail, selectPhoneNumber } from '../redux/features/authSlice'

const SolutionTable = ({ slug }) => {
  const solution = solutions.find((solution) => solution.slug === slug)
  const userEmail = useSelector(selectEmail)
  const userPhone = useSelector(selectPhoneNumber)

  const handleApply = (title, type, email, get, phone) => {
    Notiflix.Confirm.show(
      'Apply?',
      'I will receive your offer and connect with you in 24 hours',
      'Apply',
      'No',
      function okCb() {
        const data = {
          service_id: 'service_321usp4',
          template_id: 'template_me9n6cw',
          user_id: 'Qy5EvY0m13ER3oFiB',
          template_params: {
            title: title,
            type: type,
            userEmail: email,
            get: get,
            phone: phone,
          },
        }

        fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data)
          })
          .catch((error) => {
            console.log('Error:', error.message)
          })
      },
      function cancelCb() {},
      {
        width: '400px',
        borderRadius: '8px',
        titleColor: 'white',
        messageColor: 'white',
        okButtonBackground: 'black',
        CSSAnimationStyle: 'zoom',
        backgroundColor: 'rgba(5, 122, 104, 1)',
      }
    )
  }

  return (
    <table className="m-12 w-11/12 md:mx-3 inline-block overflow-x-scroll">
      <thead>
        <tr className="h-36">
          <th></th>
          <th className="border-1">
            <div className="flex flex-col items-center p-4">
              <AiOutlineSolution size={50} color="green" />
              <p className="text-sm text-gray-600 mt-6">QDan</p>
              <p className="text-lg mb-3"> Solution Basic</p>
            </div>
          </th>
          <th className="border-1">
            <div className="flex flex-col items-center p-4">
              <AiOutlineSolution size={50} color="green" />
              <p className="text-sm mt-6 text-gray-600">QDan</p>
              <p className="text-lg mb-3"> Solution Pro</p>
            </div>
          </th>
          <th className="border-1">
            <div className="flex flex-col items-center p-4">
              <AiOutlineSolution size={50} color="green" />
              <p className="text-sm mt-6 text-gray-600">QDan</p>
              <p className="text-lg mb-3"> Solution Pro Plus</p>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {solution.features.map((item) => {
          return <SolutionRow key={item.id} item={item} />
        })}
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td>
            <div className="flex flex-col py-12 shadow-md shadow-black">
              <span className="text-5xl md:mx-4 md:text-3xl font-extrabold flex justify-center items-end">
                <p className="text-base font-thin mx-3">From</p> $
                {solution.priceBasic}
              </span>
              <button
                onClick={() =>
                  handleApply(
                    solution.title,
                    'Basic',
                    userEmail,
                    'get full course',
                    userPhone
                  )
                }
                className="text-white text-2xl md:text-xl md:px-4 bg-biruz border-biruz border-2 rounded mx-3 my-5 py-4 px-12 hover:bg-birux"
              >
                Get an offer
              </button>
              <span
                onClick={() =>
                  handleApply(
                    solution.title,
                    'Basic',
                    userEmail,
                    'get a trial',
                    userPhone
                  )
                }
                className="text-biruz text-xl md:text-base underline cursor-pointer"
              >
                Request trial lesson
              </span>
            </div>
          </td>
          <td>
            <div className="flex flex-col py-12 shadow-md shadow-black">
              <span className="text-5xl md:text-3xl md:mx-4 font-extrabold flex justify-center items-end">
                <p className="text-base font-thin mx-3">From</p> $
                {solution.pricePro}
              </span>
              <button
                onClick={() =>
                  handleApply(
                    solution.title,
                    'Pro',
                    userEmail,
                    'get full course',
                    userPhone
                  )
                }
                className="text-white text-2xl md:text-xl bg-biruz border-biruz border-2 rounded mx-3 my-5 md:px-4 py-4 px-12 hover:bg-birux"
              >
                Get an offer
              </button>
              <span
                onClick={() =>
                  handleApply(
                    solution.title,
                    'Pro',
                    userEmail,
                    'get a trial',
                    userPhone
                  )
                }
                className="text-biruz text-xl md:text-base underline cursor-pointer"
              >
                Request trial lesson
              </span>
            </div>
          </td>
          <td>
            <div className="flex flex-col py-12 shadow-md shadow-black">
              <span className="text-5xl md:text-3xl md:mx-4 font-extrabold flex justify-center items-end">
                <p className="text-base font-thin mx-3">From</p> $
                {solution.priceProPlus}
              </span>
              <button
                onClick={() =>
                  handleApply(
                    solution.title,
                    'Pro Plus',
                    userEmail,
                    'get full course',
                    userPhone
                  )
                }
                className="text-white text-2xl md:text-xl md:px-4 bg-biruz border-biruz border-2 rounded mx-3 my-5 py-4 px-12 hover:bg-birux"
              >
                Get an offer
              </button>
              <span
                onClick={() =>
                  handleApply(
                    solution.title,
                    'Pro Plus',
                    userEmail,
                    'get a trial',
                    userPhone
                  )
                }
                className="text-biruz text-xl md:text-base underline cursor-pointer"
              >
                Request trial lesson
              </span>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default SolutionTable
