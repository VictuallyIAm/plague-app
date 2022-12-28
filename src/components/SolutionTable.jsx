import React from 'react'
import { AiOutlineSolution } from 'react-icons/ai'
import { solutions } from '../data/solutions'
import SolutionRow from './SolutionRow'

const SolutionTable = ({ slug }) => {
  const solution = solutions.find((solution) => solution.slug === slug)

  return (
    <table className="m-12 w-11/12">
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
              <span className="text-5xl font-extrabold">
                ${solution.priceBasic}
              </span>
              <button className="text-white text-2xl bg-biruz border-biruz border-2 rounded mx-3 my-5 py-4 px-12 hover:bg-birux">
                Get an offer
              </button>
              <span className="text-biruz text-xl underline cursor-pointer">
                Request trial lesson
              </span>
            </div>
          </td>
          <td>
            <div className="flex flex-col py-12 shadow-md shadow-black">
              <span className="text-5xl font-extrabold">
                ${solution.pricePro}
              </span>
              <button className="text-white text-2xl bg-biruz border-biruz border-2 rounded mx-3 my-5 py-4 px-12 hover:bg-birux">
                Get an offer
              </button>
              <span className="text-biruz text-xl underline cursor-pointer">
                Request trial lesson
              </span>
            </div>
          </td>
          <td>
            <div className="flex flex-col py-12 shadow-md shadow-black">
              <span className="text-5xl font-extrabold">
                ${solution.priceProPlus}
              </span>
              <button className="text-white text-2xl bg-biruz border-biruz border-2 rounded mx-3 my-5 py-4 px-12 hover:bg-birux">
                Get an offer
              </button>
              <span className="text-biruz text-xl underline cursor-pointer">
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
