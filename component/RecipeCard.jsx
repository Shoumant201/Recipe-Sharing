import React from 'react'
import SeeRecipeButton from './UI/SeeRecipeButton'

const RecipeCard = ({title, type, description, image}) => {
  return (
    <div className=''>
        <div className='w-[350px] h-[350px] bg-[#F7F7F7]'>
          <div className='w-full h-[65%]'>
            <img src={image} alt="" className='w-full h-full object-cover' />
          </div>
          <div className='w-full h-[35%] px-1'>
            <h3 className='text-[18px]'>
              {title}
            </h3>
            <p className='text-[13px] font-light leading-[20px] line-clamp-2'>
              {description}
            </p>
            <div className='flex justify-between'>
              <div className='w-20 h-4 mt-[15px] ml-2'>
                ★★★★★
              </div>
              <div className='mt-[8px] mr-2'>
                <SeeRecipeButton/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RecipeCard
