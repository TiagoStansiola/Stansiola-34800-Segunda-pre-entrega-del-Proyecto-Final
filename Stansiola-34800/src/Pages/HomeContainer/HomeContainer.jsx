import React from 'react'

const HomeContainer = ({greeting}) => {
  return (
    <div className="m-10">
        <p className="text-center text-2xl">{greeting}</p>
    </div>
  )
}

export default HomeContainer


