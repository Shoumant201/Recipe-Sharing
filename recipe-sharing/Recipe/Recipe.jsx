import React from 'react'
import RecipeCard from '../../component/RecipeCard'

const Recipe = () => {

  const availableCards = [
    {
      id: 1,
      title: "Nepali Khana Set",
      type: "Nepali",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloribus minus quam reprehenderit blanditiis consectetur perferendis, voluptatem molestias adipisci voluptatum, rerum delectus deleniti cumque dolores id fuga soluta fugiat tempora.",
      image: "/salad.jpg",
    },
    {
      id: 2,
      title: "Momo",
      type: "Nepali",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloribus minus quam reprehenderit blanditiis consectetur perferendis, voluptatem molestias adipisci voluptatum, rerum delectus deleniti cumque dolores id fuga soluta fugiat tempora.",
      image: "/salad.jpg",
    },
    {
      id: 3,
      title: "Pizza",
      type: "Nepali",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloribus minus quam reprehenderit blanditiis consectetur perferendis, voluptatem molestias adipisci voluptatum, rerum delectus deleniti cumque dolores id fuga soluta fugiat tempora.",
      image: "/salad.jpg",
    },
    {
      id: 4,
      title: "Burger",
      type: "Nepali",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloribus minus quam reprehenderit blanditiis consectetur perferendis, voluptatem molestias adipisci voluptatum, rerum delectus deleniti cumque dolores id fuga soluta fugiat tempora.",
      image: "/salad.jpg",
      
    },
    {
      id: 6,
      title: "Salad",
      type: "Nepali",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloribus minus quam reprehenderit blanditiis consectetur perferendis, voluptatem molestias adipisci voluptatum, rerum delectus deleniti cumque dolores id fuga soluta fugiat tempora.",
      image: "/salad.jpg",
    },
    {
      id: 7,
      title: "Nepali Khana Set",
      type: "Nepali",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloribus minus quam reprehenderit blanditiis consectetur perferendis, voluptatem molestias adipisci voluptatum, rerum delectus deleniti cumque dolores id fuga soluta fugiat tempora.",
      image: "/salad.jpg",
    },
    {
      id: 8,
      title: "Nepali Khana Set",
      type: "Nepali",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloribus minus quam reprehenderit blanditiis consectetur perferendis, voluptatem molestias adipisci voluptatum, rerum delectus deleniti cumque dolores id fuga soluta fugiat tempora.",
      image: "/salad.jpg",
    },
  ];


  return (
    <div className='px-16 py-10 flex'>
      <div className='w-[15%] p-5 font-inter text-[20px]'>
        <h3>FILTER BY</h3>
        <div className='mt-7'>
          <h4 className='text-[18px] font-medium'>Cuisine Type</h4>
          <ul className='text-[16px] font-extralight mt-4 space-y-2'>
            <div className='flex justify-between'>
              <li>Nepali</li>
              <input type='checkbox'></input>
            </div>
            <div className='flex justify-between'>
              <li>Italian</li>
              <input type='checkbox'></input>
            </div>
            <div className='flex justify-between'>
              <li>Chinese</li>
              <input type='checkbox'></input>
            </div>
            <div className='flex justify-between'>
              <li>Indian</li>
              <input type='checkbox'></input>
            </div>
            <div className='flex justify-between'>
              <li>Mexican</li>
              <input type='checkbox'></input>
            </div>
          </ul>
          <h4 className='text-[18px] font-medium mt-7'>Diet Preference</h4>
          <ul className='text-[16px] font-extralight mt-4 space-y-2'>
            <div className='flex justify-between'>
              <li>Non Vegeterain</li>
              <input type='checkbox'></input>
            </div>
            <div className='flex justify-between'>
              <li>Vegeterain</li>
              <input type='checkbox'></input>
            </div>
          </ul>
        </div>
      </div>
      <div className='w-[85%] flex flex-wrap gap-5 justify-center'>
          {availableCards.map(({ id, title, type, description, image }) => (
            <RecipeCard
              key={id}
              title={title}
              type={type}
              description={description}
              image={image}
            />
          ))}
      </div>
    </div>
  )
}

export default Recipe
