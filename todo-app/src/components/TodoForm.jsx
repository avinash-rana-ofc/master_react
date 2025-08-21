import React, { useState } from "react";

const TodoForm = ({onAdd}) => {
    const [newTodo, setNewTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(newTodo.trim() === "") return;

        console.log(newTodo);
        onAdd(newTodo)

        setNewTodo("");

    }
  return (
    <form className="p-4 border-b" onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2">
        <input
          className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="text"
          placeholder="Add a new task"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="bg-indigo-600 hover:bg-indigo-700 p-2 rounded-md text-white transition-colors"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
