"use strict";

// =======================================================================================
// Создание объекта
// =======================================================================================
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

// =======================================================================================
// Вложенные свойтсва
// =======================================================================================

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };

// =======================================================================================
// Обращение к свойствам через точку
// =======================================================================================

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

//   const bookTitle = book.title;
//   console.log(bookTitle); // 'The Last Kingdom'

//   const bookGenres = book.genres;
//   console.log(bookGenres); // ['historical prose', 'adventurs']

//   const bookPrice = book.price;
//   console.log(bookPrice); // undefined

// =======================================================================================
// Обращение к вложенным свойствам
// =======================================================================================

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     hobbies: ["swiming", "music", "sci-fi"],
//   };

//   const location = user.location;
//   console.log(location); // Объект location

//   const country = user.location.country;
//   console.log(country); // 'Jamaica'

//   const hobbies = user.hobbies;
//   console.log(hobbies); // ['swiming', 'music', 'sci-fi']

//   const firstHobby = user.hobbies[0];
//   console.log(firstHobby); // 'swiming'

//   const numberOfHobbies = user.hobbies.length;
//   console.log(numberOfHobbies); // 3

// =======================================================================================
// Обращение к свойствам через квадратные скобки
// =======================================================================================

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

//   const bookTitle = book["title"];
//   console.log(bookTitle); // 'The Last Kingdom'

//   const bookGenres = book["genres"];
//   console.log(bookGenres); // ['historical prose', 'adventurs']

//   const propKey = "author";
//   const bookAuthor = book[propKey];
//   console.log(bookAuthor); // 'Bernard Cornwell'

// =======================================================================================
// Изменение значения свойства
// =======================================================================================

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

//   book.rating = 9;
//   book.isPublic = false;
//   book.genres.push("драма");

//   console.log(book.rating); // 9
//   console.log(book.isPublic); // false
//   console.log(book.genres); // ['historical prose', 'adventures', 'драма']

// =======================================================================================
// Добавление свойств
// =======================================================================================

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

//   book.pageCount = 836;
//   book.originalLanguage = "en";
//   book.translations = ["ua", "ru"];

//   console.log(book.pageCount); // 836
//   console.log(book.originalLanguage); // 'en'
//   console.log(book.translations); // ['ua', 'ru']

// =======================================================================================
// Короткие свойства
// =======================================================================================

// const name = "Генри Сибола";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Генри Сибола"
// console.log(user.age); // 25

// =======================================================================================
// Вычисляемые свойства
// =======================================================================================

// const propName = "name";
// const user = {
//   age: 25,
//   // Имя этого свойства будет взято из значения переменной propName
//   [propName]: "Генри Сибола",
// };

// console.log(user.name); // 'Генри Сибола'

// =======================================================================================
// Методы объекта
// =======================================================================================

// ✅ Логически и синтаксически сгруппированные сущности
// const bookShelf = {
//     books: ["The Last Kingdom", "Dream Guardian"],
//     // Это метод объекта
//     getBooks() {
//       console.log("Этот метод будет возвращать все книги - свойство books");
//     },
//     // Это метод объекта
//     addBook(bookName) {
//       console.log("Этот метод будет добавлять новую книгу в свойство books");
//     },
//   };

//   // Вызовы методов
//   bookShelf.getBooks();
//   bookShelf.addBook("Новая книга");

// =======================================================================================
// Доступ к свойствам объекта в методах
// =======================================================================================

// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//       return this.books;
//     },
//     addBook(bookName) {
//       this.books.push(bookName);
//     },
//     removeBook(bookName) {
//       const bookIndex = this.books.indexOf(bookName);
//       this.books.splice(bookIndex, 1);
//     },
//   };

//   console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
//   bookShelf.addBook("The Mist");
//   bookShelf.addBook("Dream Guardian");
//   console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
//   bookShelf.removeBook("The Mist");
//   console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// ========================================================================================================================
// Перебор объекта
// ========================================================================================================================
// Цикл for...in
// ===========================================================================================
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };

//   for (const key in book) {
//     // Ключ
//     console.log(key);
//     // Значение свойства с таким ключом
//     console.log(book[key]);
//   }

// =======================================================================================
// Метод hasOwnProperty()
// =======================================================================================

// const animal = {
//     legs: 4,
//   };
//   const dog = Object.create(animal);
//   dog.name = "Манго";

//   console.log(dog); // {name: 'Манго'}
//   console.log(dog.name); // 'Манго'
//   console.log(dog.legs); // 4

// // ❌ Возвращает true для всех свойств
// console.log("name" in dog); // true
// console.log("legs" in dog); // true

// // ✅ Возвращает true только для собственных свойств
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };

//   for (const key in book) {
//     // Если это собственное свойство - выполняем тело if
//     if (book.hasOwnProperty(key)) {
//       console.log(key);
//       console.log(book[key]);
//     }

//     // Если это не собственное свойство - ничего не делаем
//   }

// =======================================================================================
// Метод Object.keys()
// =======================================================================================

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'genres', 'rating']

//   for (const key of keys) {
//     // Ключ
//     console.log(key);
//     // Значение свойства
//     console.log(book[key]);
//   }

// =======================================================================================
// Метод Object.values()
// =======================================================================================

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'rating']

//   const values = Object.values(book);
//   console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// =======================================================================================
// Метод Object.entries()
// =======================================================================================

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys); // ['title', 'author', 'rating']

//   const values = Object.values(book);
//   console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

//   const entries = Object.entries(book);
//   console.log(entries);
//   // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// ========================================================================================================================
// Массив обьектов
// ========================================================================================================================

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На берегу спокойных вод",
//       author: "Роберт Шекли",
//       rating: 8.51,
//     },
//     {
//       title: "Сон смешного человека",
//       author: "Федор Достоевский",
//       rating: 7.75,
//     },
//   ];
//                                   Перебор массива объектов
// for (const book of books) {
//     // Объект книги
//     console.log(book);
//     // Название
//     console.log(book.title);
//     // Автор
//     console.log(book.author);
//     // Рейтинг
//     console.log(book.rating);
//   }
//                                   Создание нового массива одного из свойств всех объектов массива
// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames); // ["The Last Kingdom", "На берегу спокойных вод", "Сон смешного человека"]

//                                   Средний рейтинг коллекции

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2

// ========================================================================================================================
// Синтаксис spread и rest
// ========================================================================================================================
//          Распыление это когда ... находится в правой части операции присваивания, а сбор это когда ... находится в её левой части.
// =======================================================================================
// spread: передача аргументов
// =======================================================================================

// const temps = [14, -4, 25, 8, 11];

// // В консоли будет массив
// console.log(temps);
// // ❌ Так не сработает, потому что передаём целый массив
// console.log(Math.max(temps)); // NaN

// // В консоли будет набор отдельных чисел
// console.log(...temps);
// // ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25

// =======================================================================================
// spread: создание нового массива
// =======================================================================================

//                         Создание копии массива

// const temps = [14, -4, 25, 8, 11];

// // Это точная, но независимая копия массива temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

//                          Склеивание массивов

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// =======================================================================================
// spread: создание нового объекта
// =======================================================================================
//
//                          Новый объект с разными свойствами двух массивов

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

//                          Новый объект с одинаковыми свойствами двух массивов (важен порядок)

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

//                    Можно добавлять свойства в произвольное место. Главное помнить про уникальность имени свойства и о том, что его значение
//                    может быть перезаписано.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// =======================================================================================
// rest: сбор всех аргументов функции
// =======================================================================================

// // Как объявить параметры функции так,
// // чтобы можно было передать любое кол-во аргументов?
// function multiply() {
//     // ...
//   }

//   multiply(1, 2);
//   multiply(1, 2, 3);
//   multiply(1, 2, 3, 4);

// function multiply(...args) {
//     console.log(args); // массив всех аргументов
//   }

//   multiply(1, 2);
//   multiply(1, 2, 3);
//   multiply(1, 2, 3, 4);

// =======================================================================================
// rest: сбор части аргументов функции
// =======================================================================================

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//     console.log(firstNumber); // Значение первого аргумента
//     console.log(secondNumber); // Значение второго аргумента
//     console.log(otherArgs); // Массив остальных аргументов
//   }

//   multiply(1, 2);
//   multiply(1, 2, 3);
//   multiply(1, 2, 3, 4);

// ========================================================================================================================
// Деструктуризация объектов
// ========================================================================================================================

// =======================================================================================
// Деструктуризация объектов
// =======================================================================================

//                     Без деструктуризации:
// ===========================================
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

//   const accessType = book.isPublic ? "публичном" : "закрытом";
//   const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится в ${accessType} доступе.`;
// ===========================================
// const user = {
//   name: "Mango",
//   room: 24,
//   type: "vip",
// };

// const message = `Гость ${user.name} прибывает как ${user.type} в комнату ${user.room}`;

// console.log(message);

//                     С деструктуризацией:

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

//   // Деструктуризируем
//   const { title, author, isPublic, rating, coverImage } = book;
//   console.log(coverImage); // undefined

//   const accessType = isPublic ? "публичном" : "закрытом";
//   const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;
// =================================================

// const user = {
//   name: "Mango",
//   room: 24,
//   type: "vip",
// };

// const { name, room, type } = user;

// const message = `Гость ${name} прибывает как ${type} в комнату ${room}`;

// console.log(message);

// ==================================================

// const user = {
//     name: "Mango",
//     room: 24,
//     type: "vip",
//   };

// const greeter = user => {
//     const { name, room, type } = user;
//     return `Гость ${name} прибывает как ${type} в комнату ${room}`;
//     }

//     console.log(greeter(user));

// ====================================================

// const user = {
//     name: "Mango",
//     room: 24,
//     type: "vip",
//   };

// const greeter = ({ name, room, type }) => {
//     return `Гость ${name} прибывает как ${type} в комнату ${room}`;
//     }

//     console.log(greeter(user));

// ====================================================

// const user = {
//     name: "Mango",
//     room: 24,
//     type: "vip",
//   };

// const greeter = ({ name, room, type } = {}) => {
//     return `Гость ${name} прибывает как ${type} в комнату ${room}`;
//     }

//     console.log(greeter()); // Гость undefined прибывает как undefined в комнату undefined

// =======================================================================================
// Значения по умолчанию
// =======================================================================================

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//   };

//   // Добавим картинку обложки если её нет в объекте книги
//   const {
//     title,
//     coverImage = "https://via.placeholder.com/640/480",
//     author,
//   } = book;

//   console.log(title); // The Last Kingdom
//   console.log(author); // Bernard Cornwell
//   console.log(coverImage); // https://via.placeholder.com/640/480

// =======================================================================================
// Изменение имени переменной
// =======================================================================================

// const firstBook = {
//     title: "The Last Kingdom",
//     coverImage:
//       "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
//   };

//   const {
//     title: firstTitle,
//     coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
//   } = firstBook;

//   console.log(firstTitle); // The Last Kingdom
//   console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

//   const secondBook = {
//     title: "Сон смешного человека",
//   };

//   const {
//     title: secondTitle,
//     coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
//   } = secondBook;

//   console.log(secondTitle); // Сон смешного человека
//   console.log(secondCoverImage); // https://via.placeholder.com/640/480

// =======================================================================================
// Деструктуризация в циклах
// =======================================================================================

//                             Без деструктуризации

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На берегу спокойных вод",
//       author: "Роберт Шекли",
//       rating: 8.51,
//     },
//   ];

//   for (const book of books) {
//     console.log(book.title);
//     console.log(book.author);
//     console.log(book.rating);
//   }

//                              С деструктуризацией

// for (const book of books) {
//     const { title, author, rating } = book;

//     console.log(title);
//     console.log(author);
//     console.log(rating);
//   }

//                  Если в объекте немного свойств, деструктуризацию можно выполнить прямо в месте объявления переменной book.

// for (const { title, author, rating } of books) {
//     console.log(title);
//     console.log(author);
//     console.log(rating);
//   }

// =======================================================================================
// Глубокая деструктуризация
// =======================================================================================

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };

//   const {
//     name,
//     tag,
//     stats: { followers, views: userViews, likes: userLikes = 0 },
//   } = user;

//   console.log(name); // Jacques Gluke
//   console.log(tag); // jgluke
//   console.log(followers); // 5603
//   console.log(userViews); // 4827
//   console.log(userLikes); // 1308

// ========================================================================================================================
// Деструктуризация массивов
// ========================================================================================================================

// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

//                               Редко используется

// const rgb = [200, 255, 100];
// let red, green, blue;

// [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// =========================================================================================================================
// Иногда из массива необходимо деструктуризировать только первые N элементов, а остальные сохранить в одну переменную в
// виде массива. При деструкции массива можно распаковать и присвоить оставшуюся часть элементов массива переменной,
// используя операцию ... (rest).

// const rgb = [200, 255, 100];

// const [red, ...colors] = rgb;

// console.log(red); // "200"
// console.log(colors); // [255, 100]

// ==========================================================================================================================
// Элементы можно пропускать. Допустим, из массива rgb необходимо взять только последнее значение. На практике эта
// возможность используется редко.

// const rgb = [200, 100, 255];

// const [, , blue] = rgb;

// console.log(`Blue: ${blue}`); // "Blue: 255"

// ========================================================================================================================
// Паттерн «Объект параметров»
// ========================================================================================================================

//                               Работа с множеством параметров без паттерна

// function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
//     // Делаем что-то с параметрами
//     console.log(title);
//     console.log(numberOfPages);
//     // И так далее
//   }

//   // ❌ Что такое 736? Что такое 10283? Что такое true?
//   doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);

//                               Работа с множеством параметров с паттерном

// function doStuffWithBook(book) {
//     // Делаем что-то со свойствами объекта
//     console.log(book.title);
//     console.log(book.numberOfPages);
//     // И так далее
//   }

//                              Вызов функции с помощью объекта параметров

// ✅ Всё понятно
// doStuffWithBook({
//     title: "The Last Kingdom",
//     numberOfPages: 736,
//     downloads: 10283,
//     rating: 8.38,
//     isPublic: true,
//   });

//                     Ещё один плюс в том, что можно деструктуризировать объект в параметре book. Это можно сделать в теле функции.

// function doStuffWithBook(book) {
//     const { title, numberOfPages, downloads, rating, isPublic } = book;
//     console.log(title);
//     console.log(numberOfPages);
//     // И так далее
//   }

//         Или сразу в сигнатуре (подписи) функции, разницы нет.

// function doStuffWithBook({
//     title,
//     numberOfPages,
//     downloads,
//     rating,
//     isPublic,
//   }) {
//     console.log(title);
//     console.log(numberOfPages);
//     // И так далее
//   }
