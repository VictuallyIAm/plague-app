import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { plagues } from '../data/plagues'

const Plags = () => {
  const params = useParams()
  const navigate = useNavigate()
  const plags = plagues.find((plag) => plag.slug === params.slug)

  return (
    <div className="h-screen py-24">
      {plags.items.map((plag) => {
        return (
          <div key={plag.id}>
            <div>{plag.title}</div>
            <div>{plag.price}</div>
            <div>{plag.desc}</div>
            <img src={plag.imgUrl} alt="ee" className="h-20" />
          </div>
        )
      })}
    </div>
  )
}

export default Plags
