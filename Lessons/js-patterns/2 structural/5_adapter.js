"use strict";

//  Адаптер — это структурный паттерн проектирования, который позволяет объектам с несовместимыми интерфейсами работать вместе.

// old interface

class OldCalc {
  operations(t1, t2, operation) {
    switch (operation) {
      case "add":
        return t1 + t2;
      case "sub":
        return t1 - t2;
      default:
        return NaN;
    }
  }
}

// new interface

class NewCalc {
  add(t1, t2) {
    return t1 + t2;
  }
  sub(t1, t2) {
    return t1 - t2;
  }
}

// adapter

class CalcAdapter {
  // Создаем конструктор, в котором создаем новый объект класса NewCalc и присваиваем его свойству calc
  constructor() {
    this.calc = new NewCalc();
  }

  // Добавляем метод operations, который принимает те же параметры, что и у старого интерфейса и вызывает методы нового интерфейса

  operations(t1, t2, operation) {
    switch (operation) {
      case "add":
        return this.calc.add(t1, t2);
      case "sub":
        return this.calc.sub(t1, t2);
      default:
        return NaN;
    }
  }
}

const oldCalc = new OldCalc();
console.log(oldCalc.operations(10, 5, "add"));

const newCalc = new NewCalc();
console.log(newCalc.add(10, 5));

const adapter = new CalcAdapter();
console.log(adapter.operations(25, 10, "sub"));
