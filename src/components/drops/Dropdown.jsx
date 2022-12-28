import queryString from 'query-string'
import React, { useState } from 'react'
import ClickAwayListener from 'react-click-away-listener'
import { IoIosArrowDown } from 'react-icons/io'
import { useLocation, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Dropdown = ({ title, positions, slug }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const location = useLocation()
  const query = queryString.parse(location.search)
  const navigate = useNavigate()

  const handleClickAway = () => {
    if (isExpanded) {
      setIsExpanded(false)
    }
  }
  const scrollToTop = () => {
    window.scrollToTop()
  }
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div
        className={
          !isExpanded
            ? 'mx-3 cursor-pointer border-b-4 border-b-white hover:border-b-birux box-border'
            : 'mx-3 cursor-pointer border-b-4 border-b-birux box-border'
        }
      >
        <div
          className="flex items-center px-2 py-5 text-textBlack "
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {title} <IoIosArrowDown size={20} className="pt-1" />
        </div>
        <div
          className={
            isExpanded
              ? 'absolute  py-2  top-14 shadow-sm'
              : 'absolute py-2  top-16 hidden'
          }
        >
          {isExpanded &&
            positions.map((item) => {
              return (
                <Link
                  to={`${slug}/${item.slug}`}
                  className="card"
                  key={item.id}
                  onClick={() => {
                    setIsExpanded(false)
                    scrollToTop()
                  }}
                >
                  <div
                    key={positions.indexOf(item)}
                    className="border-b-2 border-b-f8 border-collapse px-2 text-left w-48 py-3 bg-white hover:bg-f8 text-sm font-sans"
                  >
                    {item.title}
                  </div>
                </Link>
              )
            })}
        </div>
      </div>
    </ClickAwayListener>
  )
}

export default Dropdown
