"use strict";

// Паттерн Observer представляет собой объект (или класс), который содержит в себе список объектов, которые заинтересованы в получении оповещения об изменении
// состояния другого объекта. Идея в том, чтобы формировать зависмость один ко многим, при которой изменение состояния одного объекта приводит к автоматическому
// оповещению всех заинтересованных объектов.

// Создаем класс Subject, который будет являться наблюдаемым объектом

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers.filter((obs) => obs !== observer);
  }

  fire(action) {
    this.observers.forEach((observer) => {
      observer.update(action);
    });
  }
}

// Создаем класс Observer, который будет являться наблюдателем

class Observer {
  constructor(state = 1) {
    this.state = state;
    this.initialState = state;
  }

  update(action) {
    switch (action.type) {
      case "INCREMENT":
        this.state = ++this.state;
        break;
      case "DECREMENT":
        this.state = --this.state;
        break;
      case "ADD":
        this.state += action.payload;
        break;
      default:
        this.state = this.initialState;
    }
  }
}

// Создаем экземпляры классов Subject и Observer

const stream$ = new Subject();

const obs1 = new Observer();
const obs2 = new Observer(42);

// Подписываемся на оповещения

stream$.subscribe(obs1);
stream$.subscribe(obs2);

// Отправляем оповещения

stream$.fire({ type: "INCREMENT" });
stream$.fire({ type: "INCREMENT" });
stream$.fire({ type: "DECREMENT" });
stream$.fire({ type: "ADD", payload: 10 });

console.log(obs1.state); // 1
console.log(obs2.state); // 42

// Паттерн Observer часто используется в JavaScript. Например, в React мы используем его для обновления компонентов при изменении состояния.
// В Redux мы используем его для обновления store при изменении состояния.
