import React from "react";
import { CheckCircle, Circle, Trash2 } from "lucide-react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li
      className={`flex justify-between items-center p-4 transition-colors ${
        todo.completed ? "bg-gray-50" : ""
      }`}
    >
      <div className="flex items-center">
        <button
          className="mr-2 text-indigo-400 hover:text-indigo-800 transition-colors"
          onClick={() => onToggle(todo.id)}
        >
          {todo.completed ? (
            <CheckCircle size={20} className="text-green-500"></CheckCircle>
          ) : (
            <Circle size={20}></Circle>
          )}
        </button>
        <span className={`${todo.completed ? "text-gray-500 line-through" : "text-gray-800"}`}>{todo.text}</span>
      </div>
      <button
        className="text-red-400 hover:text-red-700 transition-colors"
        onClick={() => onDelete(todo.id)}
      >
        <Trash2 size={18}></Trash2>
      </button>
    </li>
  );
};

export default TodoItem;
