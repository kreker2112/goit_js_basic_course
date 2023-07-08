"use strict";

import "./../css/styles.css";

const promiseApiOutput = document.getElementById("output");

const beforePromise = document.getElementById("before_promise_output");

const afterPromise = document.getElementById("after_promise_output");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve((promiseApiOutput.textContent = "Success!"));
    } else {
      reject((promiseApiOutput.textContent = "Promise Error!"));
    }
  }, 2000);
});

beforePromise.textContent = "before promise";

const onSuccess = (message) => {
  console.log(message);
};

const onError = (error) => {
  console.error(`error: ${error}`);
};

promise.then(onSuccess).catch(onError);

afterPromise.textContent = "after promise";
