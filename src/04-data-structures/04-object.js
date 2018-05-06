const human = {
  name: "Сергей",
  eyesColor: "black",
  hairColor: "white"
};

const user = {};

user.name = "Vasya";
user.surname = "Petrov";

user.name = "Sergey";

delete user.name;

console.log(Object.keys(human));

console.log(user);
