import React, { MouseEvent } from 'react';
import useGetTodo from '../../hooks/useGetTodo';
import useTodoActions from '../../hooks/useTodoActions';
import './TodoList.css';

type Todo = {
  id: number,
  text: string,
  complete: boolean,
}

function TodoList() {
  const { todos } = useGetTodo();
  const { toggleTodo } = useTodoActions();

  const onToggle = (e: MouseEvent) => {
    const element = e.currentTarget as HTMLSpanElement;
    const id = element.dataset.id || '';

    toggleTodo(parseInt(id));
  }

  return (
    <div>
      <ul>
      {todos.map((todo: Todo) => (
        <li className={`TodoItem ${todo.complete ? 'done' : ''}`}>
          <span className='text' onClick={onToggle} data-id={todo.id}>{todo.text}</span>
          <span>(X)</span>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default TodoList;
