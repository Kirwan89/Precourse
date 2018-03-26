// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
 if (n === 0){
   return 1;
 }
 return n * nFactorial(n - 1);
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  const fibArr = [];
  if (n > 0){
    let nextN = nFibonacci(n-1) + nFibonacci(n-2);
    return nextN;
  }
  return 1;
  // return the nth number in the sequence
}
// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
