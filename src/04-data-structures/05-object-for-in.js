const menu = {
  width: 300,
  height: 200,
  title: "Menu"
};

for (let key in menu) {
  console.log("Ключ: " + key + " , значение:" + menu[key]);
}

// 1.

const obj3 = {};

const isEmpty = function(obj) {
  if (Object.keys(obj).length !== 0) return false;
  return true;
};

console.log(isEmpty(menu));

console.log(isEmpty(obj3));

// 2.

var salaries = {
  Вася: 100,
  Петя: 300,
  Даша: 250
};

const salariesSum = function(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }

  return sum;
};

console.log(salariesSum(salaries));

// 3.

const mostPaid = function(obj) {
  let max = 0;
  let maxName = "";
  for (let name in obj) {
    if (max < salaries[name]) {
      max = salaries[name];
      maxName = name;
    }
  }

  return maxName || "нет сотрудников";
};

console.log(mostPaid(salaries));

var salaries2 = {
  Вася: 100,
  Петя: 300,
  Даша: "hello"
};

const multiplyNumeric = function(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") continue;
    obj[key] *= 2;
  }

  return obj;
};

console.log(multiplyNumeric(salaries2));
