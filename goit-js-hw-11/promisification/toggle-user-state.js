"use strict";

// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, а принимала всего два параметра allUsers и userName и
// возвращала промис.

// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };

// const logger = updatedUsers => console.table(updatedUsers);

// /*
//  * Сейчас работает так
//  */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

// /*
//  * Должно работать так
//  */
// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);

const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

// Объявление функционального выражения toggleUserState, которая возвращает промис.

const toggleUserState = (allUsers, userName) => {
  // Объявление промиса с помощью конструктора Promise.
  return new Promise((resolve, reject) => {
    // Объявление переменной findUser, которая принимает объект пользователя из массива allUsers, если такой пользователь есть в массиве.
    const findUser = allUsers.find((user) => user.name === userName);
    // Объявление переменной isUserValid, которая принимает значение "true" или "false" в зависимости от того, есть ли в массиве allUsers пользователь с именем userName.
    const isUserValid = userName === findUser.name;
    // Объявление переменной updatedUsers, которая принимает массив всех пользователей, в котором значение свойства active у пользователя с именем userName изменено на противоположное.
    const updatedUsers = allUsers.map((user) =>
      user.name === userName ? { ...user, active: !user.active } : user
    );
    // Если в массиве allUsers есть пользователь с именем userName, то промис переходит в состояние "resolved" и возвращает массив updatedUsers.
    // Если в массиве allUsers нет пользователя с именем userName, то промис переходит в состояние "rejected" и возвращает строку "Error!".
    isUserValid ? resolve(updatedUsers) : reject("Error!");
  });
};

// Объявление функции toggleUserState, которая возвращает промис.

// function toggleUserState(allUsers, userName) {
//   return new Promise((resolve, reject) => {
//     const findUser = allUsers.find((user) => user.name === userName);
//     const isUserValid = userName === findUser.name;
//     const updatedUsers = allUsers.map((user) =>
//       user.name === userName ? { ...user, active: !user.active } : user
//     );
//     isUserValid ? resolve(updatedUsers) : reject("Error!");
//   });
// }

const logger = (updatedUsers) => console.table(updatedUsers);

// Вызовы функции для проверки

toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);
toggleUserState(users, "Poly").then(logger);
toggleUserState(users, "Ajax").then(logger);
// toggleUserState(users, "Chelsey")
//   .then(logger)
//   .catch((error) => console.log(error));
