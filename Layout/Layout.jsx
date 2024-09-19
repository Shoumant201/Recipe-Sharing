import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const Layout = () => {
  return (
    <div>
      <header className='sticky top-0 z-50 bg-white shadow-md'>
        <Navbar/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout
