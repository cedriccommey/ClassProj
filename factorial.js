
function factorial(n) {
    recursiveFactorial(n, 1);
  }
  
  function recursiveFactorial(n, accumulator) {
    if (n <= 0) return accumulator;
  
    return recursiveFactorial(n-1, n*accumulator);
  }