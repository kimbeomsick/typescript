 
import React from "react";
import todo from "../module/todo";
import TodoItem from "./TodoItem";
import styles from './Todos.module.css'

const Todos:React.FC<{items:todo[], onRemoveTodo: (id:string) => void}> = (props)=>{

    
    return (
        <ul className = {styles.todos}>
           {props.items.map((data)=>(<>
            <TodoItem key={data.id} text={data.text} onRemoveTodo={props.onRemoveTodo.bind(null,data.id)}/>
          
            </>
           ))}
        </ul>
    )
} 
export default Todos