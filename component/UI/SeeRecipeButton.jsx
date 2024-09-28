import React from 'react'
import { NavLink } from 'react-router-dom'

const SeeRecipeButton = () => {
  return (
    <div>
        <NavLink to='/' className='w-[130px] h-[37px] border border-black flex justify-center items-center transition-all duration-500 bg-gradient-to-r from-[#FF3535] to-white from-[50%] to-[50%] bg-[length:200%_100%] bg-right hover:bg-left hover:text-white hover:border-transparent'>
            <p>See Recipe</p>
        </NavLink>
    </div>
  )
}

export default SeeRecipeButton
