import React from 'react'

const Card = ({ children }) => {
  return (
    <div className="shadow-md border-1 my-12 mx-6 w-5/12 md:w-fit  ">
      {children}
    </div>
  )
}

export default Card
