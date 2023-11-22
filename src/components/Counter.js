import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter-slice";
const Counter = () => {
  const counter = useSelector((state) => state.counter.count);  
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  // const incrementHandler = () => {
  //   dispatch({ type: "INCREMENT" });
  // };
  // const decrementHandler = () => {
  //   dispatch({ type: "DECREMENT" });
  // };
  // const increaseHandler = () => {
  //   dispatch({ type: "INCREASE", amount: 5 });
  // };
  // const decreaseHandler = () => {
  //   dispatch({ type: "DECREASE", amount: 5 });
  // };
  // const resetHandler = () => {
  //   dispatch({ type: "RESET" });
  // };
  // const toggleCounterHandler = () => {
  //   dispatch({ type: "TOGGLE" });
  // };
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5));
  };
  const resetHandler = () => {
    dispatch(counterActions.reset());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decreaseHandler}>Decrease by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
