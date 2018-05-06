var user = { name: "Вася" };

var admin = user;

admin.name = "Петя"; // поменяли данные через admin

console.log(user.name); // 'Петя', изменения видны в user
