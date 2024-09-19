import React from 'react'
import { NavLink } from 'react-router-dom'

const CookBanner = () => {
  return (
    <div className='w-full h-[322px] bg-[url("/cookbanner.jpg")] bg-cover bg-center flex justify-center items-center'>
        <div className='w-full h-full flex flex-col justify-center items-center bg-gradient-to-r from-[#00000080]/50 to-transparent'>
            <p className='font-semibold text-white text-[80px]'>Apply For Cook</p>
            <NavLink to="/" className='w-[105px] h-[40px] bg-[#FF3535] flex justify-center items-center text-white'>Apply Now</NavLink>
        </div>
    </div>
  )
}

export default CookBanner
