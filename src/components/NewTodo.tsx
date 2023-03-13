
import { useRef } from "react";
import styles from './NewTodo.module.css'



const NewTodo:React.FC <{onAddTodo :(text:string)=> void}> = (props)=>{

    //수많은 htmlelement가 있다. 골라서 쓰면됨!>
    const todoTextInputRef =useRef<HTMLInputElement>(null); //어떤 타입의 element를 가져올 건지 명시해준다. 

    const submitHandler = (e:React.FormEvent)=>{ //이벤트 객체에 대한 정의를 포함하고 있다. 
        e.preventDefault();

        const enteredText = todoTextInputRef.current!.value; //있으면 value를 없으면 아무것도 반환하지 않는다. 

        
        if(enteredText.trim().length === 0){
            //throw an error
            return;
        }

        props.onAddTodo(enteredText);
        todoTextInputRef.current!.value = '';
    }

    //위쪽이 formEvent가 아니라 MouseEvent였다면 onSubmit에 넣을 때 에러가 생긴다. 
    return (
        <form onSubmit={submitHandler} className ={styles.form}> 
            <label htmlFor="text">Todo Text</label>
            <input type="text"  id='text' ref={todoTextInputRef}/>
            <button>Add todo</button>
        </form>
    )
}

export default NewTodo