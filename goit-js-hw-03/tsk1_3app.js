"use strict";

// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

console.table(user);

// const key = "mood";

// const value = "happy";

user["mood"] = "happy";

console.table(user);

user['hobby'] = 'skydiving';

user['premium'] = false;

console.table(user);

const keys = Object.keys(user);

console.table(keys);

for(const propertie of keys){
  console.log(`${propertie}: `, user[propertie]);
}