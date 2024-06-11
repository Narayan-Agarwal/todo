
import React,{useState} from 'react'
function TodoInput(props)
{
    const [inputtext,settext]=useState('')
    return(
        <div>
           <input type='text'
            placeholder='Enter task'
            value={inputtext}
            onChange={e=>{
                settext(e.target.value)
            }}></input>
           <button onClick={()=>{
            props.Addlist(inputtext)
            settext("")
           }}>ADD</button>
        </div>
    )
}
export default TodoInput;