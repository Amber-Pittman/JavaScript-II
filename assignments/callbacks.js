// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// CHALLENGE 1 //
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function(length) {
  console.log(length);
});

// CHALLENGE 2 //
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, function(last) {
  console.log(last);
});

// CHALLENGE 3 //
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

function total (x, y) {
  return x + y;
}
console.log(sumNums (3, 8, total));

// CHALLENGE 4 //
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

function times (x, y) {
  return x * y;
}

console.log(multiplyNums (4, 4, times));


// CHALLENGE 5 //
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
    return cb (item, list);
}

function isPresent(item, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(contains('Notebook', items, isPresent));
console.log(contains('textbook', items, isPresent));
console.log(contains('yo-yo', items, isPresent));
console.log(contains('Gum', items, isPresent));
// THESE ARE ALL PRESENTING AS FALSE BUT I'M NOT SURE WHY //

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
