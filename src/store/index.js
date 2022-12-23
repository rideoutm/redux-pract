import { createStore } from "redux";

const reducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(reducer);

export default store;

// const counterSubscriber = () => {
//   const latest = store.getState();
//   console.log(latest);
// };

// store.subscribe(counterSubscriber);
// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });
