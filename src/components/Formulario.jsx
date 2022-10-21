import React from 'react'

function Formulario() {
  return (
    <div className='py-5 px-10'>

      <div className='my-3'>
        <label htmlFor='nombre'
          className='text-white block font-bold '
        >Nombre</label>
        <input
          name='nombre' id='nombre' 
          type="text"
          className='mt-1 w-full bg-transparent border rounded-md text-slate-100 px-2 py-1 focus:scale-110 transition-all'
        />
      </div>
      <div className='my-3'>
        <label htmlFor='apellido'
          className='text-white block font-bold'
        >Apellido</label>
        <input
          name='apellido' id='apellido' 
          type="text"
          className='mt-1 w-full bg-transparent border rounded-md text-slate-100 px-2 py-1 focus:scale-110 transition-all'
        />
      </div>
      <div className='my-3'>
        <label htmlFor='telefono'
          className='text-white block font-bold'
        >Telefono</label>
        <input
          name='telefono' id='telefono'  
          type="tel"
          
          className='mt-1 w-full bg-transparent border rounded-md text-slate-100 px-2 py-1 focus:scale-110 transition-all'
        />
      </div>
      <div className='my-3'>
        <label htmlFor='email'
          className='text-white block font-bold'
        >Email</label>
        <input
          name='email' id='email' 
          type="email"
          className='mt-1 w-full bg-transparent border rounded-md text-slate-100 px-2 py-1 focus:scale-110 transition-all'
        />
      </div>
    </div>
  )
}

export default Formulario