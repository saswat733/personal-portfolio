import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Github,{githubInfoLoader} from './components/Github.jsx'
import User from './components/User.jsx'
import Projects from './components/Projects.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>,
//     children:[
//       {path:"",
//     element:<Home/>},
//     {
//       path:"about",
//       element:<About/>
//     },
//     {
//       path:"Contact",
//       element:<Contact/>
//     },
//     {
//       path:"Github",
//       element:<Github/>
//     }
//     ]
//   }
// ])


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='Projects' element={<Projects/>}/>

      <Route path='user/:userid' element={<User/>}/>
      <Route loader={githubInfoLoader} path='Github' element={<Github/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
