import React from 'react'

/* Conditional Rendering */

export function Item({check , name}){
    // if(check){
    //     return <li>{name}</li>
    // }
    // return <li><del>{name}</del></li>

    return check ? <li className='bg-purple-600 text-white my-2'>{name}</li> : null
}

const Conditional = () => {
  return (
    <div>
      <h1 className='p-4 bg-purple-600 text-white text-center text-4xl'>React Conditional Rendering</h1>
      <ul className='mt-6'>
        <Item check={false} name='laptop'></Item>
        <Item check={true} name='mobile'></Item>
        <Item check={false} name='mouse'></Item>
        <Item check={true} name='pendrive'></Item>
        <Item check={true} name='harddisk'></Item>
        <Item check={false} name='keyboard'></Item>
      </ul>
    </div>
  )
} 

export default Conditional