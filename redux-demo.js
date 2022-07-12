const redux = require("redux"); // import redux

// reducer function - always receives two pieces of input by default - old existing state, dispatched action
// it output new state object
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// store should manage some data, which is managed by reducer function
const store = redux.createStore(counterReducer);

console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState(); // give latest state
  console.log(latestState);
};

store.subscribe(counterSubscriber); // subscribe is used to watch for changes in redux stores

store.dispatch({ type: "increment" }); // to dispatch an action
store.dispatch({ type: "decrement" });
