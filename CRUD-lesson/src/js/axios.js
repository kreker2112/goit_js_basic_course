"use strict";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030";
// axios.defaults.headers.common[Authorization] = "Bearer TOKEN";
// axios.defaults.headers.post[Content - Type] = "application/json";
// axios.defaults.headers.get[Accept] = "application/json";

export const axiosApi = {
  // GET - READ функция
  fetchUsers() {
    return axios.get("/users").then(console.dir).catch(console.warn);
  },

  fetchUserWithId(userId) {
    return axios.get(`/users/${userId}`).then(console.log).catch(console.warn);
  },

  // POST - CREATE функция

  createUser(name, email) {
    const body = { name, email };
    return axios.post("/users", body).then(console.log).catch(console.warn);
  },

  // DELETE - DELETE функция

  deleteUser(userId) {
    return axios
      .delete(`/users/${userId}`)
      .then(console.log)
      .catch(console.warn);
  },

  // PUT - UPDATE функция

  putUser(userId, update) {
    return axios
      .put(`/users/${userId}`, update)
      .then(console.log)
      .catch(console.warn);
  },

  // PATCH - UPDATE функция

  patchUser(userId, update) {
    return axios
      .patch(`/users/${userId}`, update)
      .then(console.log)
      .catch(console.warn);
  },
};
