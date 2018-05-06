
function fib2(n) {
  if (n <= 1) {
    return n
  } else {
    return fib2(n - 1) + fib2(n - 2)
  }
}

console.log(fib2(7));



const fib = function(n) {
  let a = 1;
  let b = 1;
  let c = a + b;

  for (let i = 3; i < n; i++) {
    a = b;
    b = c;
    c = a + b;
  }
  
  return c;
}

console.log(fib(7));