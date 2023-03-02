import React from 'react'

const Card = ({ email,name,id }) => {
  return (
    <div className='bg-light-green dib br4 pa2 ma2 grow shadow-5'>
        <img src={`https://robohash.org/${id}?100x100`} alt="photos" />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
  )
}

export default Card;