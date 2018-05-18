const human = {
  name: "Сергей",
  eyesColor: "black",
  hairColor: "white",
  sayHello: function() {
    console.log("Привет", this.name);
  }
};

const user = {};

user.name = "Vasya";
user.surname = "Petrov";

user.name = "Sergey";

delete user.name;

console.log(Object.keys(human));

human.sayHello();

human.width = "100";

console.log(human);

function nigga() {
  function hello() {
    console.log(this);
  }

  hello();
}

nigga();

var e = new Error("Произошла проблема");
console.log(e.message);

try {
  throw new Error("Ошибка!");
} catch (e) {
  console.log(e.name + ": " + e.message);
}

function upperProps(obj) {
  return Object.keys(obj).map(item => item.toUpperCase());
}

console.log(upperProps(human));

function nigga(x, y, initial) {
  if (initial in arguments) {
    return x + y;
  } else {
    return x - y;
  }
}

console.log(nigga(5, 8));
