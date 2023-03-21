"use strict";

const numbers = [1, 2, 3, 4, 5];

const products = [
  { id: "id-1", label: "Apples", price: 100, quantity: 50 },
  { id: "id-2", label: "Bananas", price: 120, quantity: 70 },
  { id: "id-3", label: "Lemons", price: 70, quantity: 30 },
];
const users = [
  { id: "id-1", name: "Mango", isActive: true },
  { id: "id-2", name: "Poly", isActive: false },
  { id: "id-3", name: "Ajax", isActive: true },
  { id: "id-4", name: "Chelsey", isActive: false },
];

const log = (array) => console.table(array);

// Map

{
  // map
  //   *map
  //   */
  // ===========================================================
  // Изменение массива чисел
  // ===========================================================
  // const doubled = numbers.map((number) => {
  //   return number * 2;
  // });
  // log(numbers);
  // log(doubled);
  // ===========================================================
  // // Создание нового массива со значением одинакового свойства из предыдущего массива
  // ===========================================================
  // const labels = products.map((product) => {
  //   return product.label;
  // });
  // log(labels);
  // -----------------------------------------------------------
  // То же самое, но через функцию:
  // -----------------------------------------------------------
  // const getLabels = products => {
  //   return products.map((product) => {
  //     return product.label;
  //   });
  // }
  // -----------------------------------------------------------
  // Но всегда пишется так:
  // -----------------------------------------------------------
  // const getLabels = products => products.map(product => product.label);
  // const labels = getLabels(products);
  // log(labels);
  // ===========================================================
  // // Создание нового массива на базе оригинального с изменением свойства
  // ===========================================================
  // const updatedProducts = products.map((product) => {
  //   return {
  //     ...product,
  //     price: product.price * 1.1,
  //   };
  // });
  // log(updatedProducts);
  // -----------------------------------------------------------
  // То же самое, но через функцию:
  // -----------------------------------------------------------
  // const updateAllProductPrice = (products, value) => {
  //   return products.map((product) => {
  //       return {
  //         ...product,
  //         price: product.price * value,
  //       };
  //     });
  // }
  // const updateProducts = updateAllProductPrice(products, 1.3);
  // log(updateProducts);
  // -----------------------------------------------------------
  // Но всегда пишется так:
  // -----------------------------------------------------------
  // const updateAllProductPrice = (products, value) =>
  //   products.map(product => ({
  //     ...product,
  //     price: product.price * value,
  // }));
  // const updateProducts = updateAllProductPrice(products, 1.3);
  // log(updateProducts);
  // ===========================================================
  // map по условию
  // ===========================================================
  // const updateProductQuantity = (products, productId, amount) => {
  //   return products.map((product) => {
  //     return product.id === productId
  //       ? { ...product, quantity: product.quantity + amount }
  //       : product;
  //   });
  // };
  // const updated = updateProductQuantity(products, "id-3", 50);
  // log(products);
  // log(updated);
}

// Filter

{
  // filter
  //   *filter
  //   */
  // Создает новый массив фильтруя базовый по соответствию условию true/false (добавляет/не добавляет)
  //
  // const filtered = numbers.filter(number => {
  //   return number < 3;
  // });
  //
  // log(filtered);
  //
  // const cheapProduct = products.filter(product => {
  //   return product.price < 100;
  // });
  //
  // log(cheapProduct);
  // ------------------------------------------------
  //  То же но через функцию
  // ------------------------------------------------
  // const getProductWithPrice = (products, price) => {
  //   return products.filter(product => {
  //       return product.price < price;
  //     });
  // };
  // const cheapProduct = getProductWithPrice(products, 120);
  // log(cheapProduct);
  // =================================================
  // const getProductsWithQuantity = (products, quantity) => {
  //   return products.filter(product => {
  //     return product.quantity > quantity;
  //   });
  // };
  // const availableProducts = getProductsWithQuantity(products, 40);
  // log(availableProducts);
  //
  // =================================================
  //
  // const activeUsers = users.filter(user => {
  //   return user.isActive;
  // });
  //
  // log(activeUsers);
  //
  // ------------------------------------------------
  //  То же но через функцию
  // ------------------------------------------------
  // const getActiveUsers = (users) => {
  //   return users.filter(user => {
  //       return user.isActive;
  //     });
  // }
  // const activeUsers = getActiveUsers(users);
  // log(activeUsers);
  // =================================================
  //
  // const inactiveUsers = users.filter(user => {
  //   return !user.isActive;
  // });
  //
  // log(inactiveUsers);
  // ------------------------------------------------
  //  То же но через функцию
  // ------------------------------------------------
  // const getInActiveUsers = (users) => {
  //   return users.filter(user => {
  //       return !user.isActive;
  //     });
  // }
  // const InactiveUsers = getInActiveUsers(users);
  // log(InactiveUsers);
}

// Find

{
  //  find
  //  * find
  //  */
  // Поиск позиции в массиве по id (зачастую) и создание объекта с его свойствами
  // const user = users.find (user => {
  //   return user.id === 'id-1';
  // });
  // log(user);
  // -------------------------------------------------
  //  То же но через функцию
  // -------------------------------------------------
  // const findUsersById = (users, id) => {
  //   return users.find (user => {
  //       return user.id === id;
  //     });
  // };
  // const user = findUsersById(users, 'id-1');
  // log(user);
  // -------------------------------------------------
  //  То же но в одну строку
  // -------------------------------------------------
  // const findUsersById = (users, id) => users.find (user => user.id === id);
  // const user = findUsersById(users, 'id-1');
  // log(user);
}

// every и some

{
  // every и some
  //   *every и some
  //   */
  // const isAllUsersActive = users.every(user => {
  //   return user.isActive;
  // });
  // log(isAllUsersActive);
  // const isSomeUsersActive = users.some(user => {
  //   return user.isActive;
  // });
  // log(isSomeUsersActive);
}

// В методах объекта

{
  // В методах объекта
  //   *
  //   */
  // const storage = {
  //   currentId: 1,
  //   _items: [
  //     { id: 0, label: "item-1" },
  //     { id: 1, label: "item-2" },
  //   ],
  //   get items() {
  //     return this._items;
  //   },
  //   add(item) {
  //     this._items = [...this._items, { id: ++this.currentId, ...item }];
  //   },
  //   updateLabel(id, label) {
  //     this._items = this._items.map((item) =>
  //       item.id === id ? { ...item, label } : item
  //     );
  //   },
  //   delete(id) {
  //     this._items = this._items.filter(item => item.id !== id);
  //   },
  // };
  // storage.add({ label: "item-3" });
  // storage.updateLabel(1, "updated label");
  // storage.delete(0);
  // log(storage.items);
}

// Reduce

{
  // Reduce
  //   *
  //   */

  // const total = numbers.reduce((accumulator, number) => {
  //   return accumulator + number;
  // }, 0);

  // log(total);

  // ==============================

  // const salary = {
  //   mango: 100,
  //   poly: 50,
  //   ajax: 150,
  // };

  // const total = Object.values(salary).reduce((acc, value) => acc+ value, 0);

  // log(total)

  // ==============================

  // const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);

  // log(totalQuantity);

  // ==============================

  // const tweets = [
  //   { id: '000', likes: 5, tags: ['js', 'nodejs']},
  //   { id: '001', likes: 2, tags: ['html', 'css']},
  //   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs']},
  //   { id: '003', likes: 8, tags: ['css', 'react']},
  //   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react']},
  // ];

  // const tags = tweets.reduce((acc, tweet) => {
  //   acc.push(...tweet.tags);

  //   return acc;
  // }, []);

  // log(tags);

}
