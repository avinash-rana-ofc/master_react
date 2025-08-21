import React from "react";

const TodoItem = ({ todo, onToggle }) => {
  return (
    <li className={`flex justify-between items-center p-4 transition-colors ${todo.completed ? "bg-green-200" : ""}`}>
      <div className="flex items-center">
        <button className="" onClick={() => onToggle(todo.id)}>{`Mark as completed -->`}</button>
        <span>{todo.text}</span>
      </div>
    </li>
  );
};

export default TodoItem;
