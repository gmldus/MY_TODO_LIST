import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increaseAction, decreaseAction, increaseByAction } from '../modules/counter';
import { useCallback } from 'react';

function useCounter() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increaseAction()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decreaseAction()), [dispatch]);
  const onIncreaseBy = useCallback(
    (diff: number) => dispatch(increaseByAction(diff)),
    [dispatch]
  );

  return {
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy
  };
}

export default useCounter;
