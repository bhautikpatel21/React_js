import React from 'react'
import styles from './Navbar.module.css'
import { useState } from 'react'

export const box =
    [
        {
            height: "100px",
            width: "200px",
            backgroundColor:'red'
        },
        {
            height: "100px",
            width: "200px"
        },
        {
            height: "100px",
            width: "200px"
        }
    ]
const Navbar = () => {

    let initialState = 0.


    const [count, setCount] = useState(initialState)

    return (
        <div>
            <h1 style={box[0]}>This is React Css Module Structure</h1>
            <span> countno:-{count}</span>
            <button onClick={() => setCount('skillQode')}>Increment</button>
            <button onClick={() => setCount('ReactJs')}>Decrement</button>
            <button onClick={() => setCount(initialState)}>Reset</button>
        </div>
    )
}

export default Navbar



/* Task : - Object Style get Method [style module ] */
/* Google */
/* Link */