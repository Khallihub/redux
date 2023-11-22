// import { createStore } from "redux";

// const initialState = { count: 0, showCounter: true };

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count: state.count + 1,
//         showCounter: state.showCounter,
//       };
//     case "DECREMENT":
//       return {
//         count: state.count - 1,
//         showCounter: state.showCounter,
//       };
//     case "INCREASE":
//       return {
//         count: state.count + action.amount,
//         showCounter: state.showCounter,
//       };
//     case "DECREASE":
//       return {
//         count: state.count - action.amount,
//         showCounter: state.showCounter,
//       };
//     case "RESET":
//       return {
//         count: 0,
//         showCounter: state.showCounter,
//       };
//     case "TOGGLE":
//         return {
//             count: state.count,
//             showCounter: !state.showCounter,
//         };
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);

// export default store;
