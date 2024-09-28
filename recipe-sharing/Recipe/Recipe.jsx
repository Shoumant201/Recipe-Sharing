import {useState} from 'react'
import RecipeCard from '../../component/RecipeCard'
import { IoSearch } from "react-icons/io5";

const Recipe = () => {

  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedDiet, setSelectedDiet] = useState([]);
  const [selectedFood, setSelectedFood] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const availableCards = [
    {
      id: 1,
      title: "Nepali Khana Set",
      type: "Nepali",
      diet: "vegetarian",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloribus minus quam reprehenderit blanditiis consectetur perferendis, voluptatem molestias adipisci voluptatum, rerum delectus deleniti cumque dolores id fuga soluta fugiat tempora.",
      image: "/salad.jpg",
      food:"breakfast"
    },
    {
      id: 2,
      title: "Momo",
      type: "Italian",
      diet: "vegetarian",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloribus minus quam reprehenderit blanditiis consectetur perferendis, voluptatem molestias adipisci voluptatum, rerum delectus deleniti cumque dolores id fuga soluta fugiat tempora.",
      image: "/salad.jpg",
      food:"breakfast"
    },
    {
      id: 3,
      title: "Pizza",
      type: "Nepali",
      diet: "vegetarian",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloribus minus quam reprehenderit blanditiis consectetur perferendis, voluptatem molestias adipisci voluptatum, rerum delectus deleniti cumque dolores id fuga soluta fugiat tempora.",
      image: "/salad.jpg",
      food:"lunch"
    },
    {
      id: 4,
      title: "Burger",
      type: "Mexican",
      diet: "non vegetarian",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloribus minus quam reprehenderit blanditiis consectetur perferendis, voluptatem molestias adipisci voluptatum, rerum delectus deleniti cumque dolores id fuga soluta fugiat tempora.",
      image: "/salad.jpg",
      food:"lunch"
      
    },
    {
      id: 6,
      title: "Salad",
      type: "Nepali",
      diet: "non vegetarian",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloribus minus quam reprehenderit blanditiis consectetur perferendis, voluptatem molestias adipisci voluptatum, rerum delectus deleniti cumque dolores id fuga soluta fugiat tempora.",
      image: "/salad.jpg",
      food:"special"
    },
    {
      id: 7,
      title: "Nepali Khana Set",
      type: "Nepali",
      diet: "non vegetarian",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloribus minus quam reprehenderit blanditiis consectetur perferendis, voluptatem molestias adipisci voluptatum, rerum delectus deleniti cumque dolores id fuga soluta fugiat tempora.",
      image: "/salad.jpg",
      food:"dinner"
    },
    {
      id: 8,
      title: "Nepali Khana Set",
      type: "Nepali",
      diet: "non vegetarian",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloribus minus quam reprehenderit blanditiis consectetur perferendis, voluptatem molestias adipisci voluptatum, rerum delectus deleniti cumque dolores id fuga soluta fugiat tempora.",
      image: "/salad.jpg",
      food:"dinner"
    },
  ];

    const handleCuisineChange = (cuisine) => {
      setSelectedCuisines((prev) =>
        prev.includes(cuisine) ? prev.filter((item) => item !== cuisine) : [...prev, cuisine]
      );
    };
  
    const handleDietChange = (diet) => {
      setSelectedDiet((prev) =>
        prev.includes(diet) ? prev.filter((item) => item !== diet) : [...prev, diet]
      );
    };
  
    const filteredCards = availableCards.filter((card) => {
      const matchesCuisine = selectedCuisines.length === 0 || selectedCuisines.includes(card.type);
      const matchesDiet = selectedDiet.length === 0 || selectedDiet.includes(card.diet);
      const matchesFood = selectedFood === "All" || selectedFood.toLowerCase() === card.food.toLowerCase();
      const matchesSearch = card.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCuisine && matchesDiet && matchesFood && matchesSearch;
    });


  return (
    <div className='px-16 py-10'>
      <div className='w-full flex justify-between p-5 mb-10 items-center pr-10'>
        <ul className='flex space-x-10'>
          {["All", "Breakfast", "Lunch", "Dinner", "Special"].map((food) => (
            <li 
            key={food} 
            className={` hover:cursor-pointer ${selectedFood === food ? 'text-[#FF3535] border-b border-[#FF3535] transition-all duration-200' : ''}`}
            onClick={() => setSelectedFood(food)}>
              {food}
            </li>
          ))}
        </ul>
        <div className='w-[250px] h-[35px] border border-[#B9B9B9] flex items-center p-1 gap-1'>
          <div>
            <IoSearch className='text-[25px] text-[gray] transition-all duration-200'/>
          </div>
          <div className='w-full h-full'>
          <input
            type="search"
            className="w-full focus:outline-none focus:border-none focus:ring-0"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search recipes..."
          />
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className='w-[15%] p-5 font-inter text-[20px]'>
          <h3>FILTER BY</h3>
          <div className='mt-7'>
            <h4 className='text-[18px] font-medium'>Cuisine Type</h4>
            <ul className='text-[16px] font-extralight mt-4 space-y-2'>
              {['Nepali', 'Italian', 'Chinese', 'Indian', 'Mexican'].map((cuisine) => (
                <div className='flex justify-between' key={cuisine}>
                  <li>{cuisine}</li>
                  <input
                    type='checkbox'
                    checked={selectedCuisines.includes(cuisine)}
                    onChange={() => handleCuisineChange(cuisine)}
                  />
                </div>
              ))}
            </ul>
            <h4 className='text-[18px] font-medium mt-7'>Diet Preference</h4>
            <ul className='text-[16px] font-extralight mt-4 space-y-2'>
              {['Non Vegetarian', 'Vegetarian'].map((diet) => (
                  <div className='flex justify-between' key={diet}>
                    <li>{diet}</li>
                    <input
                      type='checkbox'
                      checked={selectedDiet.includes(diet.toLowerCase())}
                      onChange={() => handleDietChange(diet.toLowerCase())}
                    />
                  </div>
                ))}
            </ul>
          </div>
        </div>
        <div className='w-[85%] flex flex-wrap flex-grow gap-5 pl-12'>
          {filteredCards.length > 0 ? (
              filteredCards.map(({ id, title, type, description, image }) => (
                <RecipeCard key={id} title={title} type={type} description={description} image={image} />
              ))
            ) : (
              <p>No recipes match the selected filters.</p>
          )}
        </div>
      </div>
      
    </div>
  )
}

export default Recipe
