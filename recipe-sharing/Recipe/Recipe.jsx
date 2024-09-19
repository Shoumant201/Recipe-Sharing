import React from 'react'
import RecipeCard from '../../component/RecipeCard'

const Recipe = () => {
  return (
    <div className='px-36 py-10 flex'>
      <div className='w-[20%] border border-black'>
        Filter
      </div>
      <div className='w-[80%]'>
      <RecipeCard/>
      </div>
    </div>
  )
}

export default Recipe
