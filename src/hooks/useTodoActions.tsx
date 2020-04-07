import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { toggleTodoAction, removeTodoAction } from '../modules/todo';

function useTodoActions() {
  const dispatch = useDispatch();

  const toggleTodo = useCallback((id: number) => dispatch(toggleTodoAction(id)), [dispatch]);
  const removeTodo = useCallback((id: number) => dispatch(removeTodoAction(id)), [dispatch]);

  return {
    toggleTodo, 
    removeTodo,
  };
}

export default useTodoActions;
