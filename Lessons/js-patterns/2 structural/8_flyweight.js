"use strict";

// Это паттерн служит для того, чтобы эффективно передавать данные для работы с различными объектами, не создавая при этом множество объектов.

// Создаем класс Car, который принимает в конструкторе модель и цену

class Car {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

// Создаем класс CarFactory, который будет создавать объекты класса Car

class CarFactory {
  constructor() {
    this.cars = [];
  }

  // Создаем метод create, который принимает модель и цену и создает объект класса Car, который добавляет в массив cars

  create(model, price) {
    const candidate = this.getCar(model);
    if (candidate) {
      return candidate;
    }
    const newCar = new Car(model, price);
    this.cars.push(newCar);
    return newCar;
  }

  // Создаем метод getCar, который принимает модель и возвращает объект класса Car, если такой объект уже есть в массиве cars

  getCar(model) {
    return this.cars.find((car) => car.model === model);
  }
}

const factory = new CarFactory();

// Создаем объекты класса Car с помощью метода create

const bmwX6 = factory.create("bmw", 10000);
console.log(bmwX6);
const audi = factory.create("audi", 12000);
console.log(audi);
const bmwX3 = factory.create("bmw", 8000);
console.log(bmwX3);

console.log(bmwX3 === bmwX6);
