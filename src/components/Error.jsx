import React from 'react'

function Error({children}) {
  return (
    <div className='border border-red-300 w-[90%] mx-auto mt-5 p-2 rounded-sm'>
      <p className='text-red-300 font-bold uppercase text-center'>{children}</p>
    </div>
  )
}

export default Error