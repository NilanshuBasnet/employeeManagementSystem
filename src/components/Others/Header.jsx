import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Nilanshu 👋</span> </h1>
        <button className='text-white text-lg font-medium  bg-indigo-600 hover:bg-indigo-500 rounded-xl px-4 py-2'>Log Out</button>
    </div>
  )
}

export default Header