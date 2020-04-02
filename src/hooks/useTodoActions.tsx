import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { toggleTodoAction } from '../modules/todo';


function useTodoActions() {
  const dispatch = useDispatch();

  const toggleTodo = useCallback((id: number) => dispatch(toggleTodoAction(id)), [dispatch]);

  return {
    toggleTodo, 
  };
}

export default useTodoActions;
