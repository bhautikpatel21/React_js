import React from 'react'
import Weblogo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-gray-500'>
            <div className='container'>
                <div className='flex items-center justify-between py-6'>
                    <div>
                        <Link to="/">
                            <img src={Weblogo} alt="" className='size-20' />    
                        </Link>
                    </div>
                    <ul className='flex text-white text-lg font-black space-x-20'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">AboutUs</Link></li>
                        <li><Link to="/contact">ContctUs</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar