import React from 'react'
import { useState } from 'react'

export default function TodoInput(props) {
  const {Addlistel, listelvalue, setlistelvalue} = props
  
  return (
    <header>
      <input value={listelvalue} onChange={(e)=> {
        setlistelvalue(e.target.value)}
      }
       type="text" placeholder='Type something...' />
      <button onClick={()=>{
      Addlistel(listelvalue), setlistelvalue('') }} >Add</button>
    </header>
  )
}
