import React from 'react'
import { useState } from 'react'
const Contador = () => {
const [contador,setContador]=useState(0)

    const agregar=()=>{
      contador==10
      ?
      setContador(10)
      :
      setContador(contador+1)

    }
    const restar=()=>{
      contador==0
      ?
      setContador(0)
      :
      setContador(contador-1)
    }

  return (
    <div className='flex flex-wrap '>
        <button onClick={agregar} className='h-10 px-6 font-semibold rounded-full bg-amber-400 text-white'>+</button>
        <div className='mx-3 my-auto'>

       <p>{contador}</p> 
        </div>
       <button onClick={restar} className='h-10 px-6 font-semibold rounded-full bg-amber-400 text-white'>-</button>
    </div>
  )
}

export default Contador