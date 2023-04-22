"use strict";

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);

const counterValueField = document.querySelector("span");

class Counter {
  constructor(initialValue = 0, step = 1) {
    this.value = initialValue;
    this.step = step;
  }
  increment() {
    this.value += this.step;
  }
  decrement() {
    this.value -= this.step;
  }
  getCounterValue() {
    counterValueField.textContent = this.value;
  }
}

const counter = new Counter();

incrementButton.addEventListener("click", () => {
  counter.increment();
  counter.getCounterValue();
});

decrementButton.addEventListener("click", () => {
  counter.decrement();
  counter.getCounterValue();
});
