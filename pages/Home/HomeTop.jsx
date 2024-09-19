import { IoIosArrowDown } from "react-icons/io";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const HomeTop = ({scrollToSection}) => {

  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true})
  const mainControl = useAnimation();

  useEffect(() =>{
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView])

  const handleScroll = () => {
    scrollToSection.current?.scrollIntoView({ behavior: 'smooth'});
  };

  return (
    <div className='w-full font-Roboto'>
      <div className='w-full h-[505px] bg-[url("/HoneTopBG.png")] bg-cover bg-center relative items-center justify-center flex'>
        <motion.div ref={animationRef} variants={{hidden: {opacity: 0, y: 75 }, visible: { opacity: 1, y: 0}}} initial="hidden" animate={mainControl}transition={{duration: 0.75, delay: 0.25}} className=" w-full h-[505px] flex flex-col items-center justify-center text-center">
          <p className='font-bold text-6xl leading-[70px]'>Let's Get Cooking!!</p>
          <p className='text-lg text-[#4D4D4D]'>Discover the joy of homemade recipes and bring the authentic taste of home-cooked meals to your table.</p>
        </motion.div>
        <div className="absolute bottom-4 border border-black rounded-lg w-20 flex justify-center items-center cursor-pointer hover:text-[#FF3535] hover:border-[#FF3535] transition duration-500" onClick={handleScroll}>
          <IoIosArrowDown size={30}/>
        </div>
      </div>
    </div>
  )
}

export default HomeTop
