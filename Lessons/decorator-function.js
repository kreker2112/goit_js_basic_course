"use strict";

const withLog =
  (fn) =>
  (...args) => {
    console.log(`Calling ${fn.name} with args: ${args}`);

    return fn(...args);
  };

const add = (a, b) => a + b;

console.log(add(2, 3));

const addWithLog = withLog(add);

console.log(addWithLog(2, 3));