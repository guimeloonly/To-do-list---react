import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

function App() {
const [listel, setlistel] = useState([]);
const [listelvalue, setlistelvalue] = useState('');

function PersisteData(newlist){
  localStorage.setItem('listel', JSON.stringify({
    listel: newlist
  }))
}
function Addlistel (Newlistel) {
 const NewAddlistel = [...listel, Newlistel]
 PersisteData(NewAddlistel)
 setlistel(NewAddlistel)

}
function addDeleteListel (index){
const NewAddlistel = listel.filter((listel, listelindex) => {
  return listelindex !== index
})
setlistel(NewAddlistel);
}
function EditListel (index){
  const editItem = listel[index]
  setlistelvalue(editItem)
  addDeleteListel(index)
}
useEffect (()=>{
  if(!localStorage){
    return
  }
  let locallistel = localStorage.getItem('listel')
  if (!locallistel){
    return
  }
  console.log(locallistel)
  locallistel = JSON.parse(locallistel).listel
  setlistel(locallistel)
}, [])

  return (
    <>
      <TodoInput listelvalue={listelvalue} setlistelvalue={setlistelvalue} Addlistel={Addlistel}/>
      <TodoList EditListel={EditListel} addDeleteListel={addDeleteListel}  listel={listel}/>
    </>
  )
}

export default App
