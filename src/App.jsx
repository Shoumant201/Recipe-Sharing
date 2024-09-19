import Layout from '../Layout/Layout'
import Home from '../recipe-sharing/Home/Home'
import Recipe from '../recipe-sharing/Recipe/Recipe' 
import Contact from '../recipe-sharing/Contact/Contact'
import './App.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/recipe" element={<Recipe/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
