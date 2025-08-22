import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem("todos");
    return saveTodos ? JSON.parse(saveTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    )
  }

  return (
    <div className='flex justify-center items-center bg-gradient-to-br from-indigo-500 to-purple-600 p-4 min-h-screen'>
      <div className='bg-white shadow-xl rounded-sm w-full max-w-xl overflow-hidden'>
        <TodoForm onAdd={addTodo}></TodoForm>
        <TodoList todos={todos} onToggle={toggleTaskStatus} onDelete={deleteTodo}></TodoList>
      </div>
    </div>
      
  )
}

export default App
