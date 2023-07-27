"use strict";

import { fetchApi } from "./fetch.js";
import { axiosApi } from "./axios.js";
import { asyncAxiosApi } from "./asyncAwait.js";
import { ErrorCodes } from "./asyncAwait.js";

// Работа с асинхронными функциями с помощью axios и async/await из файла asyncAwait.js================================

asyncAxiosApi.getUsers().then(console.log).catch(console.warn);

// asyncAxiosApi.getUserWithId("7").then(console.log).catch(console.warn);

// asyncAxiosApi
//   .addUser("Nirvana", "nirvana@mail.com")
//   .then(console.log)
//   .catch(console.warn);

// asyncAxiosApi.deleteUser("1").then(console.log).catch(console.warn);

// asyncAxiosApi
//   .putUser("4", { name: "Poly", email: "poly@mail.com" })
//   .then(console.log)
//   .catch(console.warn);

// asyncAxiosApi
//   .patchUser("2", { name: "Norman" })
//   .then(console.log)
//   .catch(console.warn);

//   Отрисовка данных на странице через async/await с методами объекта из файла asyncAwait.js============================

// const updateUI = async () => {
//   try {
//     const users = await asyncAxiosApi.fetchUsers();

//     console.log(users);
//   } catch (error) {
//     console.dir(error);
//     alert(ErrorCodes[error.response.status]);
//     console.log(error);
//   }
// };

// updateUI();

// Работа с асинхронными функциями с помощью axios из файла axios.js=====================================================

axiosApi.fetchUsers();

// axiosApi.fetchUserWithId("3");

// axiosApi.createUser("Mango", "Mango@mail.com");

// axiosApi.deleteUser("5");

// axiosApi.putUser("2", { name: "Poly", email: "vanillajs@mail.com" });

// axiosApi.patchUser("2", { name: "Vanilla" });
