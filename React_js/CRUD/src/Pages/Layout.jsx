import { Navbar } from "../Component/Navbar"
import Home from "./Home"
import Add from "./Add"
import Edit from "./Edit"
import Page404 from "./Page404"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Profile from "./Profile"
import { BrowserRouter,Routes ,Route } from "react-router-dom"

const Layout = () => {
    return (
        <div className="mx-auto">
         <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path='/edit/:id' element={<Edit/>} ></Route>
            <Route path="/add" element={<Add/>} ></Route>
            <Route path="/signup" element={< SignUp/>} ></Route>
            <Route path="/signin" element={<SignIn/>} ></Route>
            <Route path="/profile" element={<Profile/>} ></Route>
            <Route path="*" element={<Page404/>} ></Route>
          </Routes>


         </BrowserRouter>

        </div>
    )
}

export default Layout
