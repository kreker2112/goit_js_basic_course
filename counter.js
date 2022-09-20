"use strict";

const Counter = function ({ initialValue = 0, step = 1 }) {
  this.value = initialValue;
  this.step = step;
};

Counter.prototype.increment = function () {
  this.value += this.step;
};

Counter.prototype.decrement = function () {
  this.value -= this.step;
};

const counter = new Counter({ initialValue: 10, step: 5 });

const counterValueField = document.querySelector(".js-counter-value");
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const updateCounterValueField = () => {
  counterValueField.textContent = counter.value;
};

updateCounterValueField();

incrementBtn.addEventListener("click", () => {
  counter.increment();
  updateCounterValueField();
});

decrementBtn.addEventListener("click", () => {
  counter.decrement();
  updateCounterValueField();
});

console.dir(counterValueField);

console.dir(incrementBtn);

console.dir(decrementBtn);
