import React from 'react'

export default function TodoCards(props) {
  const {children, addDeleteListel, index, EditListel} = props
  
  return (
    <li className='todoItem'>
       {children}
    <div className='actionsContainer'>
      <button onClick={() =>{
        EditListel(index)
      }}> 
    <i className="fa-solid fa-pen-to-square"></i>
    </button>
    <button onClick={()=>{
        addDeleteListel(index)
      } }>
    <i className="fa-solid fa-trash"></i>
    </button>
    </div>
    </li>
  )
}
