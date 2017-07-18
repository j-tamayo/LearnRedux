var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
  //state = state || {name: 'Anonymous'};
  return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);
// Pure function
// function add(a, b) {
//   return a + b;
// }
//
// var a = 3;
// function add(b) {
//   return a + b;
// }
//
// var result;
// function add(a, b) {
//   result = a + b;
// }
//
// function add(a, b) {
//   return a + b + new Date().getSeconds();
// }
//
// function changeProp(obj) {
//   return {
//     ...obj,
//     name: 'Jen'
//   }
// }
//
// var startingValue = {
//   name: 'Andrew',
//   age: 25
// }
//
// var res = changeProp(startingValue);
// console.log(startingValue);
// console.log(res);
