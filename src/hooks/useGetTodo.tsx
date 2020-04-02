import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';

function useGetTodo() {
  const todos = useSelector((state: RootState) => state.todo.todos);

  return {
    todos, 
  };
}

export default useGetTodo;
