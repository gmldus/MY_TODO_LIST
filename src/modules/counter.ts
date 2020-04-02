////// action
const INCREASE = 'INCREASE' as const;
const DECREASE = 'DECREASE' as const;
const INCREASE_BY = 'INCREASE_BY' as const;

export const increaseAction = () => ({
  type: INCREASE,
});
export const decreaseAction = () => ({
  type: DECREASE,
});
export const increaseByAction = (num: number) => ({
  type: INCREASE_BY,
  payload: num,
});

type CounterAction =
  | ReturnType<typeof increaseAction>
  | ReturnType<typeof decreaseAction>
  | ReturnType<typeof increaseByAction>;

////// reducer
type CounterState = {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;
