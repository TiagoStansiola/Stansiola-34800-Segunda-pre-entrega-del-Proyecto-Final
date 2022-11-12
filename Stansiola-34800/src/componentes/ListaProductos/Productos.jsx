import React from 'react'
import { Link } from 'react-router-dom'

const Productos = ({name,foto,id}) => {
  return (
    <div key={id} className='text-center w-60 mx-14'>
    <Link to={`/detail/${id}`}>
    <div >
        <div className='w-60'>
            <img src={foto} alt='' />
            <p>{name}</p>
        </div>
       

    </div>
    </Link>
    </div>
    
  )
}

export default Productos