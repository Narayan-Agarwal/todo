import React from 'react'
function Todolist(props)
{
    return(
        <div>
       <li>{props.item}
        <span>
        <i className="fa-solid fa-trash" onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        </span>
       </li>
       
      </div>
    )
}
export default Todolist