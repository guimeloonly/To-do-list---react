import React from 'react'
import TodoCards from './TodoCards'

export default function TodoList(props) {
  const {listel} = props
  
  return (
    <ul className='main'>
        {listel.map((listel, listelIndex) => {
       return(
       <TodoCards {...props} key={listelIndex} index={listelIndex} >
         <p>{listel}</p>
       </TodoCards>
    )
        })}
  </ul>
  )
}
