////// action
const ADD_TODO = 'ADD_TODO' as const;
const TOGGLE_TODO = 'TOGGLE_TODO' as const;
const REMOVE_TODO = 'REMOVE_TODO' as const;

export const addTodoAction = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});
export const toggleTodoAction = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});
export const removeTodoAction = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});

type TodoAction =
  | ReturnType<typeof addTodoAction>
  | ReturnType<typeof toggleTodoAction>
  | ReturnType<typeof removeTodoAction>;


////// reducer
type ItemState = {
  id: number,
  text: string,
  complete: boolean,
}

type TodoState = {
  todos: ItemState[];
}

const initialState: TodoState = {
  todos: [
    {
      id: 1,
      text: "타입스크립트 공부하기",
      complete: false,
    }
  ],
};

function todo(state: TodoState = initialState, action: TodoAction): TodoState {
  switch (action.type) {
    case ADD_TODO:
      const nextId = Math.max(...state.todos.map(todo => todo.id)) + 1;
      return { 
        todos: state.todos.concat({
          id: nextId,
          text: action.payload,
          complete: false,
        }) 
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map(todo => {
          return todo.id === action.payload ? {...todo, complete: !todo.complete} : todo
        })
      };
    case REMOVE_TODO:
      return {
        todos: state.todos.filter(todo => {
          return todo.id !== action.payload 
        })
      };
    default:
      return state;
  }
}

export default todo;
