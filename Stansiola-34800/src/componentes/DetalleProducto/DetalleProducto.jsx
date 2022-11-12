import React from 'react'
import Contador from '../Contador'
import Title from '../Title'

const DetalleProducto = ({name,id,foto,desc,kcal}) => {
  return (
    
    <div key={id} className='grid grid-cols-2 mx-auto my-12 h-80 w-6/12 justify-center items-center'>

      <div className='col  align-middle justify-center'>
        <img className='min-w-64 justify-center align-middle' src={foto} alt="" />

      </div>

      <div className='col  text-left justify-center '>
        

        <div className='  text-stone-800 text-5xl font-sans font-bold leading-relaxed'>

        <Title
          nombre={name}
          
          />


        <div className='my-3'>
        <p className=' text-stone-700 text-2xl font-medium'>{kcal}</p>
        </div>

        <div>
        <p className='text-zinc-500 text-base font-semibold '>{desc}</p>
        </div>

        
      </div>
      <div className=''>
      <Contador/>
      </div>
        
        
      </div>

      
    </div>
  )
}

export default DetalleProducto