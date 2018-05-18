/*
  Follow the instructions in the comments
  and pass the tests!
  When I say "write a function" below, note
  that they are already started for you, and
  you need to complete them by:
  * adding parameters, and
  * writing the logic and return statements
*/

function mySimpleArray() {
  // Simply return an array literal from this function
  // with any number of items
  return [0, 1, 2, 3]
}

// There are two ways we've learned to access
// items in arrays:
//   1. postfix operators by index (arr[index])
//   2. destructuring
// Write a function that takes an array and
// returns the first item using one of those ways
function head1(daysoftheweek) {
  return daysoftheweek[0]
}

// Write a function that does the same as the function
// above, (that is, it takes an array and returns the
// first item), but use the other approach
function head2(name) {
  const [first, last] = name
  return first
}

// Write a function that takes an array and returns
// an array containing all but the first item
function tail1(weekdays) {
  const [Monday, ...Friday] = weekdays
  return Friday
}

// Write a function similar to head1 & head2 *but*
// using the *arguments passed into the function*
// (simply return the first argument)
function head3(...name) {
  return name[0]
}

// Write a function that takes any number of arguments
// and returns the number of arguments passed in
// (hints: argument gathering, p.89 and .length, p.77)
function countMyArgs(...name) {
  return name.length
}

// Write a function similar to tail1 *but*
// using the *arguments passed into the function*
// (return all but the first argument as an array)
// see JavaScript Allongé, p.89 for help
function tail2(weekdays, ...Monday) {
  return Monday
}

// Write a function that takes an array and does the following:
// 1. determines if the array is empty or not
// 2. if the array is empty, return the string 'Empty'
// 3. otherwise, return the length of the array
// 4. the function should never return 0
// Feel free to use if/else [p.31] or a ternary [p.77]
function howMany(words) {
  if (words.length === 0) return 'Empty'
  else return words.length
}

module.exports = {
  countMyArgs,
  head1,
  head2,
  head3,
  howMany,
  mySimpleArray,
  tail1,
  tail2,
}