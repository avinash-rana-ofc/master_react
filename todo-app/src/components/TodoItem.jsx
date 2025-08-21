import React from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li
      className={`flex justify-between items-center p-4 transition-colors ${
        todo.completed ? "bg-green-200" : ""
      }`}
    >
      <div className="flex items-center">
        <button
          className=""
          onClick={() => onToggle(todo.id)}
        >{`Mark as completed -->`}</button>
        <span>{todo.text}</span>
      </div>
      <button className="bg-red-500 px-3 py-1 rounded text-white" onClick={() => onDelete(todo.id)}>
        {`Delete`}
      </button>
    </li>
  );
};

export default TodoItem;
