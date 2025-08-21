import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const todo = {
      id : Date.now(),
      text,
      completed : false
    };
    setTodos([...todos, todo]);
  };

  const toggleTaskStatus = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id ? {...todo, completed : !todo.completed} : todo)
    )
  }

  return (
    <div>
      <TodoForm onAdd={addTodo}></TodoForm>
      <TodoList todos={todos} onToggle={toggleTaskStatus}></TodoList>
    </div>
      
  )
}

export default App
