import React from 'react';
import useGetTodo from '../../hooks/useGetTodo';

function TodoList() {
  const { todos } = useGetTodo();

  return (
    <div>
      <ul>
      {todos.map(todo => (
        <li>{todo.text}</li>
      ))}
    </ul>
    </div>
  );
}

export default TodoList;
