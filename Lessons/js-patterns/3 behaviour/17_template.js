"use strict";

// Паттерн Template представляет собой поведенческий паттерн проектирования, который определяет основу алгоритма и позволяет наследникам
// переопределять некоторые шаги алгоритма, не изменяя его структуру в целом.

// Создаем класс Employee, который будет являться наблюдаемым объектом

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  // Создаем метод responsibilities(), который будет возвращать список обязанностей

  responsibilities() {}

  // Создаем метод work(), который будет возвращать список обязанностей

  work() {
    return `${this.name} выполняет ${this.responsibilities()}`;
  }

  // Создаем метод getPaid(), который будет возвращать зарплату

  getPaid() {
    return `${this.name} имеет ЗП ${this.salary}`;
  }
}

// Создаем класс Developer, который будет являться наблюдателем

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  // Переопределяем метод responsibilities()

  responsibilities() {
    return "процесс создания программ";
  }
}

// Создаем класс Tester, который будет являться наблюдателем

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  // Переопределяем метод responsibilities()

  responsibilities() {
    return "процесс тестирования";
  }
}

// Создаем экземпляры классов Developer и Tester

const dev = new Developer("Владилен", 100000);
console.log(dev.getPaid());
console.log(dev.work());

const tester = new Tester("Виктория", 90000);
console.log(tester.getPaid());
console.log(tester.work());
// Path: Lessons/js-patterns/3%20behaviour/18_visitor.js
