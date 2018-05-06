// 1.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Значит родители разрешили?");
  }
}

function checkAge2(age) {
  return age > 18 ? true : confirm("Значит родители разрешили?");
}

function checkAge3(age) {
  return age > 18 || confirm("Значит родители разрешили?");
}

console.log(checkAge(20));
console.log(checkAge2(20));
console.log(checkAge3(20));

// 2.

function min(a, b) {
  return a < b ? a : b;
}

console.log(min(4, 5));

// 3.

const pow = function(x, n) {};
