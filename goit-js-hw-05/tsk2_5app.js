"use strict";

// Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers

class User {
  constructor({name, age, followers}) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    alert(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
  }
}

const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

console.table(mango);

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

console.table(poly);

poly.getInfo(); // User Poly is 3 years old and has 17 followers