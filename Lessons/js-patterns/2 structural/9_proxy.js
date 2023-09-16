"use strict";

// Паттерн Proxy предоставляет объект, который контролирует доступ к другому объекту, перехватывая все вызовы (вызов методов, чтение/запись свойств и т.д.),
// а также позволяет добавлять своё поведение до, во время и после основного доступа к объекту.

// Этот паттерн позволяет ставить ловушки на поля объекта, вызов фунций, позволяет гибко определять работу приложения в дальнейшем, и как пример,
// это избавление лишних запросов на сервер, что в контексте веб-разработки очень важно и позволяет сэкономить трафик.

// Создаем функцию networkFetch c эмуляцией запроса к серверу, которая принимает параметр url и возвращает строку с url и текстом

function networkFetch(url) {
  return `${url} - Ответ с сервера`;
}

// Создаем объект cache с пустым массивом

const cache = new Set();

// Создаем новый объект proxiedFetch, который является прокси для функции networkFetch

const proxiedFetch = new Proxy(networkFetch, {
  // Создаем метод apply, который принимает целевой объект и контекст вызова и возвращает результат вызова целевого объекта
  apply(target, thisArg, args) {
    // Преобразуем массив args в строку и присваиваем переменной url
    const url = args[0];
    // Если в cache есть url, то возвращаем строку с url и текстом из cache
    if (cache.has(url)) {
      return `${url} - Ответ из кэша`;
    } else {
      // Если в cache нет url, то добавляем его в cache и возвращаем результат вызова целевого объекта
      cache.add(url);
      return Reflect.apply(target, thisArg, args);
    }
  },
});

console.log(proxiedFetch("angular.io"));
console.log(proxiedFetch("react.io"));
console.log(proxiedFetch("angular.io"));
