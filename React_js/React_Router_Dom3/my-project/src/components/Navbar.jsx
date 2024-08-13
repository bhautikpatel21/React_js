import React from 'react'
import Weblogo from '../assets/logo.png'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='bg-gray-500'>
                <div className='container'>
                    <div className='flex items-center justify-between py-6'>
                        <div>
                            <NavLink to="/">
                                <img src={Weblogo} alt="" className='size-20' />
                            </NavLink>
                        </div>
                        <ul className='flex text-white text-lg font-black space-x-20'>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">AboutUs</NavLink></li>
                            <li><NavLink to="/contact">ContctUs</NavLink></li>
                            <li><NavLink to="/shop">Shop</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Navbar
