"use strict";

// Импорт ссылок на ДОМ-элементы из отдельного файла======================================

import { refs } from "../refs/refs.js";

// Импорт шаблона из отдельного файла======================================================

import promiseIntroTemplate from "./promise-intro-tmplt.hbs";

// Промис через Иф-Элс=====================================================================

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = Math.random() > 0.5;
//     if (success) {
//       resolve(
//         (refs.promiseApiOutput.textContent = "Success!"),
//         refs.promiseApiOutput.classList.add("is-resolved")
//       );
//     } else {
//       reject(
//         (refs.promiseApiOutput.textContent = "Promise Error!"),
//         refs.promiseApiOutput.classList.add("is-rejected")
//       );
//     }
//   }, 1000);
// });

// Промис через Тернарник

// export const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = Math.random() > 0.5;
//     success
//       ? resolve(
//           (refs.promiseApiOutput.textContent = "Success!"),
//           refs.promiseApiOutput.classList.add("is-resolved")
//         )
//       : reject(
//           (refs.promiseApiOutput.textContent = "Promise Error!"),
//           refs.promiseApiOutput.classList.add("is-rejected")
//         );
//   }, 2000);
// });

// Промис через методы объекта=====================================================================

export const promiseExample = {
  addPromiseIntroMarkup() {
    const markup = promiseIntroTemplate();
    return Promise.resolve(
      refs.promiseLesson.insertAdjacentHTML("afterbegin", markup)
    );
  },

  addTextBeforePromise() {
    return Promise.resolve(
      (document.getElementById("before_promise_output").textContent =
        "before promise")
    );
  },
  addPromiseText() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5;
        success
          ? resolve(
              (document.getElementById("output").textContent = "Success!"),
              document.getElementById("output").classList.add("is-resolved")
            )
          : reject(
              (document.getElementById("output").textContent =
                "Promise Error!"),
              document.getElementById("output").classList.add("is-rejected")
            );
      }, 2000);
    });
  },
  addTextAfterPromise() {
    document.getElementById("after_promise_output").textContent =
      "after promise";
  },
  onError(error) {
    console.error(`error: ${error}`);
  },
  onSuccess(message) {
    console.log(message);
  },
};
