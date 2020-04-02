////// action
const ADD_TODO = 'ADD_TODO' as const;

export const addTodoAction = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});

type TodoAction =
  | ReturnType<typeof addTodoAction>;

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

function todo(state: TodoState = initialState, action: TodoAction) {
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
    default:
      return state;
  }
}

export default todo;
