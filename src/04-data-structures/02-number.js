// 1.

const getDecimal = function(num) {
  let str = "" + num;
  let pos = str.indexOf(".");

  if (pos === -1) return 0;
  str = str.slice(pos);
  return +str;
};

console.log(getDecimal(0.45));

// 2.

const random1 = function(max) {
  let result = max * Math.random();

  return result;
};

console.log(random1(2));

// 3.

const random2 = function(min, max) {
  return min + Math.random() * max - Math.random() * min;
};
console.log(random2(2, 20));

console.log(random2(2, 20));
