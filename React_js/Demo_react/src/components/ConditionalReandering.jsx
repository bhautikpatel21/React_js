import React from 'react'

export function Item({check,name}) {
    if(check) {
        return <li>{name}</li>
    }
    return <li><del>{name}</del></li>
}

const ConditionalReandering = () => {
  return (
    <>
    <div>
    <h1>This is conditional rendering</h1>
    <ul className='mt-6'>
        <Item check={false} name='leptop'></Item>
        <Item check={true} name='mobile'></Item>
        <Item check={false} name='tv'></Item>
        <Item check={true} name='mouse'></Item>
        <Item check={false} name='cpu'></Item>
        <Item check={true} name='k-pade'></Item>
        <Item check={false} name='bage'></Item>
    </ul>
    </div>
    </>
  )
}

export default ConditionalReandering
