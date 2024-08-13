import Home from './Home'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Shop from './Shop'
import Page404 from './Page404'
import Navbar from '../components/Navbar'
import NewProductPage from './NewProductPage'
import OldProductPage from './OldProductPage'
import Users from './Users'
import UserDetails from '../components/UserDetails'
// import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* outlet */

// const PageRouter = createBrowserRouter([
//   {
//     path:'/',
//     element:<Navbar/>,
//     children:[
//       {
//         path:"/",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<AboutUs/>
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       },
//       {
//         path:"/shop",
//         element:<Shop/>
//       }
//     ]
//   }
// ])

const Layout = () => {
  return (
    <div>
      {/* <RouterProvider router={PageRouter}>
     </RouterProvider> */}
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/shop' element={<Shop/>}>
            <Route path='newproduct' element={<NewProductPage/>}></Route>
            <Route path='oldproduct' element={<OldProductPage/>}></Route>
          </Route>
          <Route path='/users' element={<Users/>}>
            <Route path=":userId" element={<UserDetails/>}></Route>
          </Route>
          <Route path='/*' element={<Page404/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Layout
