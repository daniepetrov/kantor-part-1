const copy = function(dst) {
  for (let i = 1; i < arguments.length; i++) {
    let arg = arguments[i];

    for (let key in arg) {
      dst[key] = arg[key];
    }
  }
  return dst;
};

var vasya = {
  age: 21,
  name: "Вася",
  surname: "Петров"
};

var user = {
  isAdmin: false,
  isEmailConfirmed: true
};

var student = {
  university: "My university"
};

const newArr = copy(vasya, user, student);

console.log(newArr);

function showWarning(width, height, title, contents) {
  width = width || 200; // если не указана width, то width = 200
  height = height || 100; // если нет height, то height = 100
  title = title || "Предупреждение";

  return width;
}

const showWarningEs = function(
  width = 200,
  height = 100,
  title = "Предупреждение"
) {
  return width;
};
console.log(showWarning());

console.log(showWarningEs());

//1.

function f(x) {
  return arguments.length ? 1 : 0;
  // return x === undefined ? 0 : 1;
}

console.log(f(undefined));

const sum = function() {
  let sm = 0;
  for (let i = 0; i < arguments.length; i++) {
    sm += arguments[i];
  }
  return sm;
};

console.log(sum(9, 8, 9, 9));
