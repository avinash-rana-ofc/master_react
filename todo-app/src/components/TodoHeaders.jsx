import React from "react";

const TodoHeaders = ({ todos }) => {
    const totalTodos = todos.length;
    const completedTodos = todos.filter((todo) => todo.completed === true).length
    const pendingTodos = totalTodos - completedTodos;
    
  return (
    <div className="bg-indigo-600 p-4">
      <h1 className="font-bold text-white text-2xl text-center">
        My Todo List
      </h1>
      <div className="flex justify-between mt-2 text-indigo-200 text-sm">
        <span>Total: {totalTodos}</span>
        <span>Completed: {completedTodos}</span>
        <span>Pending: {pendingTodos}</span>
      </div>
    </div>
  );
};

export default TodoHeaders;
