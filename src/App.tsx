import { useState } from 'react';
import Todos from './components/Todos';
import Todo from './module/todo';
import NewTodo from './components/NewTodo';

function App() {


  const [todos, setTodos] = useState<Todo[]>([])
  
  const addTodoHandler = (text: string)=>{ 
    const newTodo = new Todo(text)
    setTodos((existingTodos)=>{return existingTodos.concat(newTodo)})
  }

  const removeTodoHandler = (todoId:string) =>{
    setTodos((preTodos)=>{
      return preTodos.filter(todo => todo.id !== todoId);
    })
  };
 
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
     <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
