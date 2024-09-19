import React from 'react'
import HomeRecipeCard from '../../component/HomeRecipeCard'

const HomeMain = () => {
  return (
    <div className='flex flex-col w-full p-16'>
        <div className='w-full flex justify-center my-10 '>    
        <h1 className='font-cormorant text-4xl font-semibold'>Chef's Latest picks</h1>
        </div>
        <HomeRecipeCard/>
        <div className='w-full flex justify-center my-10'>
            <h2 className='font-cormorant text-3xl font-semibold'>Morning Delight</h2>
        </div>
        <HomeRecipeCard/>
        <div className='w-full flex justify-center my-10'>
            <h2 className='font-cormorant text-3xl font-semibold'>Midday Munchies</h2>
        </div>
        <HomeRecipeCard/>
        <div className='w-full flex justify-center my-10'>
            <h2 className='font-cormorant text-3xl font-semibold'>Nightly Cravings</h2>
        </div>
        <HomeRecipeCard/>

    </div>
  )
}

export default HomeMain
