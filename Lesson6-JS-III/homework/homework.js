// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length-1];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for (let i=0,i < arr.length -1,i++){
    arr[i] = arr[i]+1;
  }
 return arr[];
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);
  return arr[];
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  arr.unshift(item);
  // return the array
  return arr[];
  // hint: use the array method .unshift
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  const newString = ""; 
  for (let i=0, i < words.length -1, i++) {

  } 
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  let check = false;
  for (let i=0, i < arr.length -1, i++) {
    if(arr[i] === item, check = true, false);
  } 
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let sum = 0;
  for (let i=0, i < numbers.length -1,i++){
  sum = sum + numbers[i];
  }
  return sum;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let sum = 0;
  for (let i=0, i < testScores.length -1, i++) {
    sum = sum + testScores[i];
  }
}
return sum / testScores.length;

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
 const maxNum number = 0;
 for (let i = 0, i < numbers.length-1, i++){
   if (numbers[i] > maxNum){
    maxNum = numbers[i];
   }
 }
 return maxNum;

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  let product = 1;
  for (let i = 0, i < arguments.length, i++){
  
    if (arguments.length === 0){
      product = product -1;
    }
    else if (arguments.length === 1){
      product = arguments[0]
    
    else {
      product = product * arguments[i];
    }
    }
    return product;
  }


// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};
