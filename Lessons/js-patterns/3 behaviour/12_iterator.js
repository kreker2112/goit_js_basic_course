"use strict";

// Идея паттерна Iterator заключается в том, чтобы предоставить универсальный интерфейс (объект либо класс) для последовательного перебора элементов коллекции,
// независимо от ее конкретной реализации.

class MyIterator {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false,
          };
        } else {
          this.index = 0;
          return {
            done: true,
            value: void 0,
          };
        }
      },
    };
  }
}

// Создаем функцию-генератор, которая принимает в себя коллекцию и возвращает объект с методом next, который возвращает объект с двумя полями: value и done

function* generator(collection) {
  let index = 0;

  while (index < collection.length) {
    yield collection[index++];
  }
}

// Создаем функцию, которая принимает в себя массив и возвращает объект MyIterator, который принимает в конструкторе этот массив

const iterator = new MyIterator(["This", "is", "iterator"]);
const gen = generator(["This", "is", "iterator"]);

// for (const val of gen) {
//   console.log("Value: ", val);
// }

// for (const val of iterator) {
//   console.log("Value: ", val);
// }

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
