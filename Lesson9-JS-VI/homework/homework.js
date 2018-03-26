// Do not change any of the function names

function invokeCallback(cb) {
  // invoke cb
  cb();
}

function sumArray(numbers, cb) {
  // sum up all of the integers in the numbers array
  let sum = numbers.reduce(function(accumulator, currentValue){
    accumulator = accumulator + currentValue;
  }
  cb(sum);
  // pass the result to cb
  // no return is necessary
}

function forEach(arr, cb) {
  // iterate over arr and pass its values to cb one by one
  arr.foreEach(cb);
  // hint: you will be invoking cb multiple times (once for each value in the array)
}

function map(arr, cb) {
  // create a new array
  const newArr = [];
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  arr.forEach(function(item){
    newArr.push(cb(item));
  });
  return newArr;
  // the new array should be the same length as the array argument
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};
