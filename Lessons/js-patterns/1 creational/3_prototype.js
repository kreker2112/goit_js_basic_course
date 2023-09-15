"use strict";

// Объявляем класс с методом init(), который будет использоваться в конструкторе нового класса как прототип

const car = {
  wheels: 4,

  init() {
    console.log(
      `У меня есть ${this.wheels} колеса, мой владелец ${this.owner}`
    );
  },
};

// Создаем экземпляр класса на основе прототипа car и добавляем в него свойство owner

const carWithOwner = Object.create(car, {
  owner: {
    value: "Дмитрий",
  },
});

// Выводим в консоль сравнение прототипов экземпляра класса и класса car, который был использован в качестве прототипа

console.log(carWithOwner.__proto__ === car);

// Вызываем метод init() экземпляра класса carWithOwner

carWithOwner.init();
