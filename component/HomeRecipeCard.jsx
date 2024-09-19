import { NavLink } from "react-router-dom"
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const HomeRecipeCard = () => {

  const homeMainRef = useRef(null);
  const isInView = useInView(homeMainRef, { Once: true})
  const mainControl = useAnimation();

  useEffect(() =>{
    if (isInView) {
      mainControl.start("visible");
    }
    // else{
    //   mainControl.start("hidden")
    // }
  }, [isInView])

  return (
    <motion.div ref={homeMainRef} variants={{hidden: {opacity: 0, y: 75 }, visible: { opacity: 1, y: 0}}} initial="hidden" animate={mainControl} transition={{duration: 0.5, delay: 0.25}} className='w-full h-[400px] flex'>
      <div className='w-[40%] h-full'>
        <img src="/salad.jpg" alt="" className='w-full h-full object-cover' />
      </div>
      <div className='w-[60%] px-12 py-4 mb-2'>
        <h3 className='text-2xl'>Recipe Name</h3>
        <p className='text-[13px] font-light mb-1'>By <span className='text-[#FF3535]'>chef's name</span></p>
        <p className='text-[13px] font-light mb-3'>Total Time: 30min</p>
        <p className='leading-[30px] text-[15px] mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloribus minus quam reprehenderit blanditiis consectetur perferendis, voluptatem molestias adipisci voluptatum, rerum delectus deleniti cumque dolores id fuga soluta fugiat tempora.</p>
        <NavLink to='/' className='w-[130px] h-[37px] border border-black flex justify-center items-center transition-all duration-500 bg-gradient-to-r from-[#FF3535] to-white from-[50%] to-[50%] bg-[length:200%_100%] bg-right hover:bg-left hover:text-white hover:border-transparent'>
            <p>See Recipe</p>
        </NavLink>
      </div>
    </motion.div>
  )
}

export default HomeRecipeCard
