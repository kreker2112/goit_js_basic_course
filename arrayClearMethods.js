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

{ // map
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
{ // filter
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
{ //  find
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
}
{ // every и some
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
