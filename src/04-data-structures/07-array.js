// 1.

const goods = [1, 3, 4, 5, 6, "Ass"];

const getLastArrayElem = function(arr) {
  return arr[arr.length - 1];
};

console.log(getLastArrayElem(goods));

// 2.
const pushLast = function(arr) {
  arr.push("Компьютер");
  return arr;
};

console.log(pushLast(goods));

// 3.

const styles = ["jazz", "blues"];

styles.push("RocknRoll");
styles[styles.length - 2] = "Classics";
let first = styles.shift();
console.log(styles);

styles.unshift("Rap", "Reggy");

console.log(first);

console.log(styles);
