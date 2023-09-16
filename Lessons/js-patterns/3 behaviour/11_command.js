"use strict";

// Паттерн Command представляет собой объект, инкапсулирующий вызов метода и его параметры.

// Классический пример данного паттерна это Redux, где каждый action это объект, который содержит тип и данные.

class MyMath {
  constructor(initialValue = 0) {
    this.num = initialValue;
  }

  square() {
    return this.num ** 2;
  }

  cube() {
    return this.num ** 3;
  }
}

// Создаем класс Command, который принимает в конструкторе объект MyMath и метод, который нужно вызвать

class Command {
  constructor(subject) {
    this.subject = subject;
    this.commandsExecuted = [];
  }

  execute(command) {
    this.commandsExecuted.push(command);
    return this.subject[command]();
  }
}

// Создаем и записываем в переменную объект MyMath и объект Command, который принимает в конструкторе объект MyMath

const x = new Command(new MyMath(2));

// Вызываем метод execute у объекта Command и передаем в него строку square, которая является методом объекта MyMath

console.log(x.execute("square")); // 4
console.log(x.execute("cube")); // 8

// Выводим массив с командами, которые были вызваны

console.log(x.commandsExecuted); // ['square', 'cube']
