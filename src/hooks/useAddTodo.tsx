import { useDispatch } from 'react-redux';
import { addTodoAction } from '../modules/todo';
import { useCallback } from 'react';

function useAddTodo() {
  const dispatch = useDispatch();

  const addTodo = useCallback((text: string) => dispatch(addTodoAction(text)), [dispatch]);

  return {
    addTodo, 
  };
}

export default useAddTodo;
