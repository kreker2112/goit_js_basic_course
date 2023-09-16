"use strict";

// Паттерн Strategy позволяет создавать некоторую оболочку для различных интерфейсов для использования разных алгоритмов и интерфейсов в конкретной задаче.
// Он определяет семейство некоторых алгоритмов, которые наследуют объекты в неизменяемом порядке. При этом каждый из этих алгоритмов является полностью
// независимым от других.

// Создаем класс Vehicle, который будет являться наблюдаемым объектом

class Vehicle {
  travelTime() {
    return this.timeTaken;
  }
}

// Создаем класс Bus, который будет являться наблюдателем

class Bus extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 10;
  }
}

// Создаем класс Taxi, который будет являться наблюдателем

class Taxi extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 5;
  }
}

// Создаем класс Car, который будет являться наблюдателем

class Car extends Vehicle {
  constructor() {
    super();
    this.timeTaken = 3;
  }
}

// Создаем класс Commute, который будет являться наблюдаемым объектом и позволяет показать ту или иную стратегию

class Commute {
  travel(transport) {
    return transport.travelTime();
  }
}

// Создаем экземпляр класса Commute

const commute = new Commute();

// Выводим результаты работы различных стратегий

console.log(commute.travel(new Taxi()));
console.log(commute.travel(new Bus()));
console.log(commute.travel(new Car()));
