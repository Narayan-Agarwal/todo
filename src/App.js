import React,{useState} from 'react'
import './App.css';
import User from './User'
import Users from './Users'
import TodoInput from './TodoInput'
import Todolist from './Todolist';
function App() {
  const [todolist,setlist]=useState([]);
  let Addlist = (inputtext)=>{
    if(inputtext!=="")
      setlist([...todolist,inputtext]);
    else
    alert("enter a task")
  }
  const deleteitem = (key)=>{
    let newList=[...todolist];
    newList.splice(key,1)
    setlist([...newList])
  }
  return(
    <div>
    <h1>TO DO LIST</h1>
    
    <TodoInput Addlist={Addlist}/>
    {todolist.map((listitem,i)=>{
      return (
        <Todolist key={i} index ={i}  item={listitem} deleteItem={deleteitem} />
      )
    })}
    </div>
  );
}

export default App;