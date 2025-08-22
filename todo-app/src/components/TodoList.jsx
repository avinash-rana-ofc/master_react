import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className="divide-y max-h-96 overflow-y-auto">
      {todos.length === 0 ? (
        <li className="text-gray-500 text-center">
          No Tasks yet. Add one above!
        </li>
      ) : (
        todos.map((todo) => (
          <TodoItem todo={todo} onToggle={onToggle} key={todo.id} onDelete={onDelete} />
        ))
      )}
    </ul>
  );
};

export default TodoList;
