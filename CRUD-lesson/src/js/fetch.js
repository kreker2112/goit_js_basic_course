"use strict";

// RESTful API через fetch.

// Это не лучший вариант, но для примера подойдет.
// Он не всегда адекватно обрабатывает ошибки, а также не всегда возвращает
// полезный результат в ответ на запрос. Например, при успешном DELETE запросе
// возвращается пустой объект, а не полезный результат. Он не позволяет отменять http запрос.
// Поэтому в реальных проектах используют библиотеки для работы с сетью, например axios.

export const fetchApi = {
  // GET - READ функция
  fetchUsers() {
    return fetch("http://localhost:3030/users")
      .then((response) => response.json())
      .then(console.log)
      .catch(console.warn);
  },

  fetchUserWithId(userId) {
    return fetch(`http://localhost:3030/users/${userId}`)
      .then((response) => response.json())
      .then(console.log)
      .catch(console.warn);
  },

  // POST - CREATE функция

  createUser(name, email) {
    const url = "http://localhost:3030/users";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    };
    return fetch(url, options)
      .then((response) => response.json())
      .then(console.log)
      .catch(console.warn);
  },

  // DELETE - DELETE функция

  deleteUser(userId) {
    const url = `http://localhost:3030/users/${userId}`;
    const options = {
      method: "DELETE",
    };
    return fetch(url, options)
      .then((response) => response.json())
      .then(console.log)
      .catch(console.warn);
  },

  // PUT - UPDATE функция

  putUser(userId, update) {
    const url = `http://localhost:3030/users/${userId}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    };
    return fetch(url, options)
      .then((response) => response.json())
      .then(console.log)
      .catch(console.warn);
  },

  // PATCH - UPDATE функция

  patchUser(userId, update) {
    const url = `http://localhost:3030/users/${userId}`;
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    };
    return fetch(url, options)
      .then((response) => response.json())
      .then(console.log)
      .catch(console.warn);
  },
};
