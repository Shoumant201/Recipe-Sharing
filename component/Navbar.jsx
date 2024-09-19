import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='border border-grey flex w-full h-[50px] justify-between items-center px-20 sticky top-0 z-50 bg-white shadow-md'>
        <div className='inline'>
            <NavLink to='/'><p className='text-[24px] font-semibold'>LetHim<span className='text-[#FF3535]'>Cook</span></p></NavLink>
        </div>
        <div className='flex space-x-10 text-[16px]'>
            <NavLink to='/' className={({ isActive }) => `inline px-4 py-2 rounded transition duration-200 ${isActive ? 'bg-[#FF3535] text-white' : 'text-black hover:text-[#FF3535]'}`}>Home</NavLink>
            <NavLink to='/recipe' className={({ isActive }) => `inline px-4 py-2 rounded transition duration-200 ${isActive ? 'bg-[#FF3535] text-white' : 'text-black hover:text-[#FF3535]'}`}>Recipe</NavLink>
            <NavLink to='/contact' className={({ isActive }) => `inline px-4 py-2 rounded transition duration-200 ${isActive ? 'bg-[#FF3535] text-white' : 'text-black hover:text-[#FF3535]'}`}>Contact Us</NavLink>
        </div>
        <div className='w-20 h-8 rounded-[50px] text-white bg-[#FF3535] flex justify-center items-center text-[16px] font-semibold border border-transparent hover:bg-white hover:text-[#FF3535] hover:border-[#FF3535] transition duration-300 cursor-pointer '>
            <p>Login</p>
        </div>
    </nav>
  )
}

export default Navbar
