// eslint-disable-next-line no-unused-vars
import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='absolute w-full flex items-center justify-end z-10 p-20'>
      <button className='bg-black border-4 text-xl px-7 py-2 text-white rounded-full hover:bg-gray-600'>Hire me</button>
      <i className="text-4xl ri-more-2-fill"></i>
    </div>
  )
}

export default Header
