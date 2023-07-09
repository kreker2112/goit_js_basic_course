"use strict";

import { refs } from "./refs.js";

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

export const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    success
      ? resolve(
          (refs.promiseApiOutput.textContent = "Success!"),
          refs.promiseApiOutput.classList.add("is-resolved")
        )
      : reject(
          (refs.promiseApiOutput.textContent = "Promise Error!"),
          refs.promiseApiOutput.classList.add("is-rejected")
        );
  }, 2000);
});
