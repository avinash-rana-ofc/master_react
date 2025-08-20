import React, { useState } from "react";

const TodoForm = () => {
    const [newTodo, setNewTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(newTodo.trim() === "") return;

        console.log(newTodo);

        setNewTodo("");

    }
  return (
    <form className="p-4 border-b" onSubmit={handleSubmit}>
      <div>
        <input
          className="flex-grow p-2 rounded-l-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
          type="text"
          placeholder="Add a new task"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="flex items-center bg-indigo-600 p-2 rounded-r-sm"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
