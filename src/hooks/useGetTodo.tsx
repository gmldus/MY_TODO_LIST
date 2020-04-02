import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';

type todo = {
    id: number,
    text: string,
    complete: boolean,
  }

function useGetTodo() {
  const todos = useSelector((state: RootState) => state.todo.todos);

  return {
    todos,
  };
}

export default useGetTodo;
