var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
  //state = state || {name: 'Anonymous'};

  switch(action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };

    default:
    return state;
  }

};
var store = redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;
});

// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Junior'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Miriam'
});

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
