"use strict";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030";
// axios.defaults.headers.common[Authorization] = "Bearer TOKEN";
// axios.defaults.headers.post[Content - Type] = "application/json";
// axios.defaults.headers.get[Accept] = "application/json";

export const ErrorCodes = {
  404: "Woops, not found",
};

export const asyncAxiosApi = {
  // GET - READ функция
  async getUsers() {
    const response = await axios.get("/users");

    return response.data;
  },

  async getUserWithId(userId) {
    const response = await axios.get(`/users/${userId}`);

    return response.data;
  },

  // POST - CREATE функция

  async addUser(name, email) {
    const body = { name, email };

    const response = await axios.post("/users", body);

    return response.data;
  },

  // DELETE - DELETE функция

  async deleteUser(userId) {
    const response = await axios.delete(`/users/${userId}`);

    return response.data;
  },

  // PUT - UPDATE функция

  async putUser(userId, update) {
    const response = await axios.put(`/users/${userId}`, update);

    return response.data;
  },

  // PATCH - UPDATE функция

  async patchUser(userId, update) {
    const response = await axios.patch(`/users/${userId}`, update);

    return response.data;
  },
};
