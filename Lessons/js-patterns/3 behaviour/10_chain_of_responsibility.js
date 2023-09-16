"use strict";

// Этот паттерн позволяет у одного и того же объекта вызывать набор операций и последовательно их модифицировать.

// Создаем класс MySum, который принимает в конструкторе число и имеет метод add, который принимает число и возвращает новый объект MySum с суммой чисел

class MySum {
  constructor(initialValue = 42) {
    this.sum = initialValue;
  }

  add(value) {
    this.sum += value;
    return this;
  }
}

const sum1 = new MySum();

console.log(sum1.add(8).add(10).add(1).add(9).sum);

const sum2 = new MySum(0);

console.log(sum2.add(1).add(2).add(3).add(4).sum);
