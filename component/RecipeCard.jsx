import React from 'react'
import SeeRecipeButton from './UI/SeeRecipeButton'

const RecipeCard = () => {
  return (
    <div className='flex flex-wrap gap-5 border border-black justify-center'>
        <div className='w-[380px] h-[300px] border border-black'>
          <div className='w-full h-[65%]'>
            <img src="/salad.jpg" alt="" className='w-full h-full object-cover' />
          </div>
          <div className='w-full h-[35%] px-1'>
            <h3 className='text-[18px]'>
              Recipe Name
            </h3>
            <p className='text-[13px] font-light leading-[20px] line-clamp-2'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore debitis illo animi perspiciatis a voluptates, neque repellat asperiores, veritatis quasi libero sit velit, reprehenderit officia. Maiores qui fugiat aut voluptatum?
            </p>
            <div className='flex justify-between'>
              <div className='w-20 h-4 bg-black'>

              </div>
              <div>
                <SeeRecipeButton/>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[310px] h-[300px] border border-black'>
      
        </div>
        <div className='w-[310px] h-[300px] border border-black'>
      
        </div>
        <div className='w-[310px] h-[300px] border border-black'>
      
        </div>
        <div className='w-[310px] h-[300px] border border-black'>
      
        </div>
    </div>
  )
}

export default RecipeCard
