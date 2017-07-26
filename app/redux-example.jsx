var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New state', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if(state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="blank">View your location</>';
  }
});

// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Junior'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Miriam'));

store.dispatch(actions.addMovie('Mad Max', 'Action'));

store.dispatch(actions.addMovie('Toy Story', 'Animated'));

store.dispatch(actions.removeMovie(2));

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
